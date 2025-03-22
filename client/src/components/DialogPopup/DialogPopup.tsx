import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface DialogPopupProps {
  isClicked: boolean;
  setClicked: (clicked: boolean) => void;
  title?: string;
  children?: ReactNode;
  extraCustomClass?: string;
}

const DialogPopup: React.FC<DialogPopupProps> = ({
  isClicked,
  setClicked,
  title,
  children,
  extraCustomClass,
}) => {
  return (
    <Dialog open={isClicked} onOpenChange={setClicked}>
      <DialogContent className={extraCustomClass}>
        <DialogHeader>
          {title && (
            <DialogTitle className="font-extrabold">{title}</DialogTitle>
          )}
          {children && <DialogDescription>{children}</DialogDescription>}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogPopup;
