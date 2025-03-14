import { useState } from "react";
import SideBarProfile from "../SideBarProfile/SideBarProfile";
import { useMutation } from "@tanstack/react-query";
import updateProfilePic from "@/api/users/updateProfilePic";
import refreshMe from "@/api/users/refreshMe";
import { jwtDecode } from "jwt-decode";
import { DecodedTokenProps } from "@/types/types";
import { setProfilePic } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import placeholderPhotoImg from "/images/placeholder-default-image-user-photo.png";
import { Input } from "@/components/ui/input";

const Photo = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const cookie = useSelector((state: RootState) => state?.user.cookie);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadPhotoMutation = useMutation({
    mutationFn: updateProfilePic,
  });

  const refreshUserDataMutation = useMutation({
    mutationFn: refreshMe,
    onSuccess: () => {
      const decoded = jwtDecode<DecodedTokenProps>(cookie || "");
      setTimeout(() => {
        dispatch(setProfilePic(decoded.profilePic));
        location.reload();
      }, 1500);
    },
  });

  const handleUpload = () => {
    if (selectedFile) {
      uploadPhotoMutation.mutate(selectedFile);
      setTimeout(() => {
        refreshUserDataMutation.mutate();
      }, 2000);
    } else {
      alert("Please select an image first.");
    }
  };

  return (
    <div className="w-full flex p-[4.5em]">
      <SideBarProfile />
      <div className="w-full">
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <div className="p-[2em] border border-gray-300 flex flex-col w-full items-center justify-center">
            <h2 className="font-bold">Photo</h2>
            <p>Add a nice photo of yourself for your profile.</p>
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="w-[650px] bg-white flex flex-col items-start justify-start gap-4">
            <b className="pt-[1em]">Image preview</b>
            <div className="border border-gray-400 w-full p-[1em]">
              <div className="w-full bg-white flex items-center justify-center">
                <div className="bg-gray-100 p-[1em] w-full flex items-center justify-center">
                  <img
                    src={preview || placeholderPhotoImg}
                    alt="Default user photo image"
                  />
                </div>
              </div>
            </div>
            <div className="w-full items-start justify-start">
              <b>Add / Change Image</b>
              <form className="w-full flex flex-col items-start justify-start gap-6">
                <div className="w-full flex flex-row items-start justify-start gap-4">
                  <Input
                    type="file"
                    className="bw-min-max g-white text-black rounded-[0.2em] border border-gray-500"
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    className="w-min-max hover:bg-purpleHoverBtn cursor-pointer border border-purple-700 rounded-[0.3em]"
                    onClick={handleUpload}
                  >
                    Upload image
                  </button>
                </div>
                <button
                  type="button"
                  className="font-bold p-[0.8em] px-[1.5em] rounded-[0.3em] bg-btnColor hover:bg-purple-600 text-white"
                  onClick={handleUpload}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
