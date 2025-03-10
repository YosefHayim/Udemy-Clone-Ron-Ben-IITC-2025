import updateUserLanguage from "@/api/users/updateUserLanguage";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RootState } from "@/redux";
import { setLanguage } from "@/redux/slices/userSlice";
import { btnLanguages } from "@/utils/languages";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ChangeLanguage: React.FC<{
  isClicked?: boolean;
  setClicked?: (value: boolean) => void;
  showIcon: boolean;
}> = ({ isClicked, setClicked, showIcon = false }) => {
  const dispatch = useDispatch();

  const defaultLanguage = useSelector(
    (state: RootState) => state.user.language
  );
  const [chosenLanguage, setChosenLanguage] = useState(defaultLanguage);

  const postUserLanguage = useMutation({
    mutationFn: updateUserLanguage,
  });

  const handleChosenLanguage = (language: string) => {
    dispatch(setLanguage(language));
    setChosenLanguage(language);
    postUserLanguage.mutate(language);
  };

  return (
    <div>
      <Dialog open={isClicked} onOpenChange={setClicked}>
        <DialogTrigger open={isClicked} onOpenChange={setClicked}>
          {showIcon && (
            <div>
              <p>Language</p>
            </div>
          )}
          <div
            className={`${
              !showIcon
                ? " justify-center border border-purple-800 p-[0.33em]"
                : " gap-[0.2em] border border-btnColor py-[0.2em] px-[0.5em] pr-[2em] hover:bg-purpleHoverBtn"
            } focus:outline-none flex items-center rounded-[0.2em] hover:bg-purpleHoverBtn`}
          >
            <TbWorld size={26} className="focus:outline-none" />
            {!showIcon && <p className="hidden">{chosenLanguage}</p>}
          </div>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="focus:outline-none mb-[0.5em] font-bold">
              Choose a language
            </DialogTitle>
            <DialogDescription className="">
              <div className="grid grid-cols-3 grid-rows-3 gap-1 flex-wrap">
                {btnLanguages.map(
                  (language: { code: string; name: string }) => (
                    <div
                      onClick={() => handleChosenLanguage(language.name)}
                      className="hover:bg-white w-full"
                      key={language.code}
                    >
                      <Button
                        className={`focus:outline-none flex justify-start hover:text-btnColor bg-white shadow-none hover:hover-color-mix rounded-[0.2em] h-[3em] text-black w-full
                          ${
                            chosenLanguage === language.name &&
                            "border border-gray-500"
                          } `}
                      >
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
