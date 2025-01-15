import reportUserReviewByReviewId from "@/api/reviews/reportUserReviewByReviewId";
import Loader from "@/components/Loader/Loader";
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

const DialogReportReview = ({
  reviewId,
  isOpenReportDrawer,
  setReportDrawer,
}) => {
  if (!reviewId) {
    return;
  }

  const [isClicked, setIsClicked] = useState(false);
  const [isSubmit, setSubmit] = useState(false);

  const handleClickSubmit = () => {
    setIsClicked((prev) => !prev);
  };

  // const mutation = useMutation(reportUserReviewByReviewId, {
  //   onSuccess: () => {
  //     setIsClicked(true);
  //   },
  //   onError: (error) => {
  //     console.error("Error reporting review:", error);
  //   },
  // });

  const handleSubmitReport = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const issueType = formData.get("issue-type");
    const issueDetails = formData.get("issue-details");

    if (!issueType || !issueDetails) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // mutation.mutate({ reviewId, issueType, issueDetails });
  };

  return (
    <div>
      <Dialog open={isOpenReportDrawer} onOpenChange={setReportDrawer}>
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
                    Guidelines. If you have a question or technical issue,
                    please contact our{" "}
                    <span className="underline text-purpleStatic cursor-pointer">
                      Support team here
                    </span>
                    .
                  </p>
                </div>
              )}
              <form
                className={` flex flex-col items-start justify-start gap-[1em]`}
                onSubmit={handleSubmitReport}
              >
                <label
                  htmlFor="issue-type"
                  className={`${
                    isClicked ? "hidden" : "block"
                  } font-bold mt-[1.5em]`}
                >
                  Issue type
                </label>
                <select
                  name="issue-type"
                  id="issue-type"
                  className={`${
                    isClicked ? "hidden" : "block"
                  } bg-white text-black border border-black rounded-[0.2em] p-[1em] w-full`}
                >
                  <option value="" disabled selected>
                    Select an issue
                  </option>
                  <option value="harmful-violent-hateful-criminal">
                    Inappropriate Course Content - Harmful, Violent, Hateful, or
                    Criminal
                  </option>
                  <option value="course-content-other">
                    Inappropriate Course Content - Other
                  </option>
                  <option value="inappropriate-behavior">
                    Inappropriate Behavior
                  </option>
                  <option value="udemy-policy-violation">
                    Udemy Policy Violation
                  </option>
                  <option value="spammy-content">Spammy Content</option>
                  <option value="other">Other</option>
                </select>
                <label
                  htmlFor="issue-details"
                  className={`${isClicked ? "hidden" : "block"} font-bold`}
                >
                  Issue details
                </label>
                <Input
                  className={`${
                    isClicked ? "hidden" : "block"
                  } rounded-[0.2em] h-[4em] border border-black`}
                  type="text"
                  name="issue-details"
                  id="issue-details"
                ></Input>

                {isClicked ? (
                  <div className="flex flex-row items-end justify-end text-end w-full">
                    <Button className="font-bold p-[1.3em] rounded-[0.3em]">
                      OK
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-row items-end justify-end gap-[1em] text-end w-full">
                    <Button className="font-bold p-[1.3em] bg-white text-black hover:bg-white shadow-none">
                      Cancel
                    </Button>
                    <Button
                      onClick={handleClickSubmit}
                      className="font-bold p-[1.3em] rounded-[0.3em]"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                )}
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogReportReview;

//Thank you for helping maintain the integrity of our marketplace.
// We will review your report as soon as possible.
// As a matter of policy we will only follow up if
// we require additional information.
