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
import { useState } from "react";
import { TbWorld } from "react-icons/tb";

const ChangeLanguage: React.FC<{
  isClicked?: boolean;
  setClicked?: (value: boolean) => void;
  showIcon: boolean;
}> = ({ isClicked, setClicked, showIcon = false }) => {
  const [chosenLanguage, setChosenLanguage] = useState("English");

  const handleChosenLanguage = (language: string) => {
    setChosenLanguage(language);
  };

  return (
    <div>
      <Dialog open={isClicked} onOpenChange={setClicked}>
        <DialogTrigger open={isClicked} onOpenChange={setClicked}>
          {showIcon ? (
            <div>
              <p>Language</p>
            </div>
          ) : (
            <div className="flex flex-row items-center gap-[0.2em] border border-[#6d28d2] py-[0.2em] px-[0.5em] rounded-[0.2em] pr-[2em] hover:bg-purpleHoverBtn">
              <TbWorld />
              {chosenLanguage}
            </div>
          )}
        </DialogTrigger>
        <DialogContent className="w-[600px]">
          <DialogHeader>
            <DialogTitle className="mb-[0.5em] font-bold">
              Choose a language
            </DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-3 grid-rows-3 gap-4 p-[1em] w-full">
                {btnLanguages.map(
                  (language: { code: string; name: string }) => (
                    <div
                      onClick={() => handleChosenLanguage(language.name)}
                      className="hover:text-[#6d28d2] hover:bg-white w-full"
                      key={language.code}
                    >
                      <Button className=" bg-white shadow-none hover:hover-color-mix rounded-[0.2em] h-[3em] text-black w-full">
                        {language.name}
                      </Button>
                    </div>
                  )
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChangeLanguage;
