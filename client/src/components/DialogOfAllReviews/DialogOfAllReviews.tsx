import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LuDot } from "react-icons/lu";

const DialogOfAllReviews = ({ avgRating, isClicked, setClicked }) => {
  return (
    <Dialog open={isClicked} onOpenChange={setClicked}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-row items-center justify-start">
              {avgRating} course rating <LuDot />
              3K ratings
            </div>
          </DialogTitle>

          <DialogDescription>
            <div className="flex flex-row items-center justify-center">
              <div className="bg-red-400 w-1/3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  maxime cumque aut nam debitis! Reprehenderit commodi, ducimus
                  fugit harum magni quidem, optio cumque labore possimus
                  perferendis
                </p>
              </div>
              <div className="bg-blue-400">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  maxime cumque aut nam debitis! Reprehenderit commodi, ducimus
                  fugit harum magni quidem, optio cumque labore possimus
                  perferendis
                </p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogOfAllReviews;
