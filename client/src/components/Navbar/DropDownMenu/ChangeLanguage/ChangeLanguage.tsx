import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { btnLanguages } from "@/utils/languages";

const ChangeLanguage = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className="w-[600px] h-[400px]">
          <DialogHeader>
            <DialogTitle>Choose a language</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-6 grid-rows-6 gap-4">
                {btnLanguages.map((language) => (
                  <Button
                    key={language.code}
                    className="font-bold text-[#6d28d2] bg-white hover:bg-white shadow-none hover:hover-color-mix rounded-[0.2em] h-[3em]"
                  >
                    {language.name}
                  </Button>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChangeLanguage;
