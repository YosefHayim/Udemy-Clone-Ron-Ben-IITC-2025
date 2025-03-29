import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { IoClose } from "react-icons/io5";

interface DialogChangeEmailProps {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogChangeEmail: React.FC<DialogChangeEmailProps> = ({ isDialogOpen, setIsDialogOpen }) => {
  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex w-full  items-center justify-between">
            <div>
              <AlertDialogTitle className="font-sans font-extrabold text-black">
                Change your email
              </AlertDialogTitle>
            </div>
            <div
              onClick={() => setIsDialogOpen(false)}
              className="cursor-pointer rounded-[0.2em] p-[1em]
              text-gray-500 hover:bg-purpleHoverBtn"
            >
              <IoClose size={20} />
            </div>
          </div>
          <AlertDialogDescription className="w-min-max text-black">
            <form className=" flex w-full flex-col items-start justify-start gap-[0.5em]">
              <p>
                Please enter the new email address you want to use. We will send you a confirmation
                code to confirm the address
              </p>
              <label htmlFor="email" className="font-sans font-extrabold">
                Enter your email
              </label>
              <input
                required
                type="text"
                id="new-password"
                name="new-password"
                className="w-full overflow-hidden rounded-[0.3em] border border-gray-500 bg-white p-[0.5em] focus-within:border-btnColor focus-within:ring-1 focus-within:ring-btnColor hover:bg-gray-100"
                placeholder={"Enter the new email address"}
              />
              <p>
                For your security, if you change your email address your saved credit card
                information will be deleted.
              </p>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <button className="rounded-[0.3em] bg-btnColor p-[0.8em] font-sans font-extrabold text-white hover:bg-purple-600">
            Verify my new email
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogChangeEmail;
