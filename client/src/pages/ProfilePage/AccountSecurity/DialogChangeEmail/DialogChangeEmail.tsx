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

const DialogChangeEmail: React.FC<DialogChangeEmailProps> = ({
  isDialogOpen,
  setIsDialogOpen,
}) => {
  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex flex-row items-center justify-between w-full">
            <div>
              <AlertDialogTitle className="text-black font-bold">
                Change your email
              </AlertDialogTitle>
            </div>
            <div
              onClick={() => setIsDialogOpen(false)}
              className="cursor-pointer p-[1em] text-gray-500
              hover:bg-purpleHoverBtn rounded-[0.2em]"
            >
              <IoClose size={20} />
            </div>
          </div>
          <AlertDialogDescription className="text-black w-min-max">
            <form className=" w-full flex flex-col items-start justify-start gap-[0.5em]">
              <p>
                Please enter the new email address you want to use. We will send
                you a confirmation code to confirm the address
              </p>
              <label htmlFor="email" className="font-bold">
                Enter your email
              </label>
              <input
                required
                type="text"
                id="new-password"
                name="new-password"
                className="hover:bg-gray-100 border border-gray-500 rounded-[0.3em] p-[0.5em] w-full overflow-hidden bg-white focus-within:border-[#6d28d2] focus-within:ring-1 focus-within:ring-[#6d28d2]"
                placeholder={"Enter the new email address"}
              />
              <p>
                For your security, if you change your email address your saved
                credit card information will be deleted.
              </p>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <button className="font-bold p-[0.8em] rounded-[0.3em] bg-btnColor hover:bg-purple-600 text-white">
            Verify my new email
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogChangeEmail;
