import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
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
      <DialogOverlay className={extraCustomClass} style={{ backgroundColor: "#1d1e27cc" }} />
      <DialogContent className={`${extraCustomClass} z-[2000]`}>
        <DialogHeader>
          {title && <DialogTitle className="font-extrabold">{title}</DialogTitle>}
          {children && <DialogDescription>{children}</DialogDescription>}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogPopup;
