import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const DialogReportReview = ({ isOpenReportDrawer, setReportDrawer }) => {
  return (
    <div>
      <Dialog open={isOpenReportDrawer} onOpenChange={setReportDrawer}>
        <DialogContent className="w-max-none w-[600px]">
          <DialogHeader>
            <DialogTitle className="mb-[1em] font-bold">
              Report abuse
            </DialogTitle>
            <DialogDescription className="text-black">
              <p>
                Flagged content is reviewed by Udemy staff to determine whether
                it violates Terms of Service or Community Guidelines. If you
                have a question or technical issue, please contact our{" "}
                <span className="underline text-purpleStatic">
                  Support team here
                </span>
                .
              </p>
              <form className="flex flex-col items-start justify-start gap-[1em]">
                <label htmlFor="issue-type" className="font-bold mt-[1.5em]">
                  Issue type
                </label>
                <select
                  name="issue-type"
                  id="issue-type"
                  className="bg-white text-black border border-black rounded-[0.2em] p-[1em] w-full"
                >
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
                <label htmlFor="issue-details" className="font-bold">
                  Issue details
                </label>
                <Input
                  className="rounded-[0.2em] h-[4em] border border-black"
                  type="text"
                  name="issue-details"
                  id="issue-details"
                ></Input>
                <div className="flex flex-row items-end justify-end gap-[1em] text-end w-full">
                  <Button className="font-bold p-[1.5em]">Cancel</Button>
                  <Button className="font-bold p-[2em] rounded-[0.3em] text-[1.2em]">
                    Submit
                  </Button>
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
