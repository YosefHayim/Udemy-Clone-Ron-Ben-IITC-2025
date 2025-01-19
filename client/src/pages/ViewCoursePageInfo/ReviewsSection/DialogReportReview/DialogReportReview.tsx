import reportUserReviewByReviewId from "@/api/reviews/reportUserReviewByReviewId";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const DialogReportReview: React.FC<{
  reviewId: string;
  isOpenReportDrawer: boolean;
  setReportDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  userId?: string;
}> = ({ reviewId, isOpenReportDrawer, setReportDrawer, userId }) => {
  if (!reviewId) {
    return <div>No review selected to report.</div>;
  }

  const [isClicked, setIsClicked] = useState(false);

  const handleSubmitReport = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const issueType = String(formData.get("issue-type"));
    const issueDetails = String(formData.get("issue-details"));

    if (!issueType || !issueDetails) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    mutation.mutate({ userId, reviewId, issueType, issueDetails });
  };

  const mutation = useMutation({
    mutationFn: reportUserReviewByReviewId,
    onSuccess: () => {
      // Show the acknowledgment message
      setIsClicked(true);
    },
    onError: (error) => {
      console.error("Error reporting review:", error);
    },
  });

  const handleCloseBtn = () => {
    // Close the dialog when the user acknowledges
    setReportDrawer(false);
    setIsClicked(false); // Reset the state for the next time the dialog opens
  };

  return (
    <div>
      <Dialog
        open={isOpenReportDrawer}
        onOpenChange={(isOpen) => setReportDrawer(isOpen)}
      >
        <DialogContent className="w-max-none w-[600px]">
          <DialogHeader>
            <DialogTitle className="mb-[1em] font-bold">
              Report abuse
            </DialogTitle>
            <DialogDescription className="text-black">
              {isClicked ? (
                <div>
                  <p>
                    Thank you for helping maintain the integrity of our
                    marketplace. We will review your report as soon as possible.
                    As a matter of policy we will only follow up if we require
                    additional information.
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Flagged content is reviewed by Udemy staff to determine
                    whether it violates Terms of Service or Community
                    Guidelines.
                  </p>
                  <div>
                    If you have a question or technical issue, please contact
                    our{" "}
                    <span className="underline text-purpleStatic cursor-pointer">
                      Support team here
                    </span>
                    .
                  </div>
                </div>
              )}
              <form
                className={`flex flex-col items-start justify-start gap-[1em]`}
                onSubmit={handleSubmitReport}
              >
                {!isClicked && (
                  <>
                    <label
                      htmlFor="issue-type"
                      className="font-bold mt-[1.5em]"
                    >
                      Issue type
                    </label>
                    <select
                      name="issue-type"
                      id="issue-type"
                      required
                      className="bg-white text-black border border-black rounded-[0.2em] p-[1em] w-full"
                    >
                      <option value="">Select an issue</option>
                      <option value="harmfulVioletHateful">
                        Inappropriate Course Content - Harmful, Violent,
                        Hateful, or Criminal
                      </option>
                      <option value="courseContentOther">
                        Inappropriate Course Content - Other
                      </option>
                      <option value="inappropriateBehavior">
                        Inappropriate Behavior
                      </option>
                      <option value="udemyPolicyViolation">
                        Udemy Policy Violation
                      </option>
                      <option value="spammyContent">Spammy Content</option>
                      <option value="other">Other</option>
                    </select>
                    <label htmlFor="issue-details" className="font-bold">
                      Issue details
                    </label>
                    <Input
                      className="rounded-[0.2em] h-[4em] border border-black"
                      type="text"
                      name="issue-details"
                      id="issue-details"
                    />
                  </>
                )}
                <div className="flex flex-row items-end justify-end gap-[1em] text-end w-full">
                  {isClicked ? (
                    <Button
                      className="font-bold p-[1.3em] rounded-[0.3em]"
                      onClick={handleCloseBtn}
                    >
                      OK
                    </Button>
                  ) : (
                    <>
                      <Button
                        className="font-bold p-[1.3em] bg-white text-black hover:bg-white shadow-none"
                        onClick={handleCloseBtn}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="font-bold p-[1.3em] rounded-[0.3em]"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </>
                  )}
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogReportReview;
