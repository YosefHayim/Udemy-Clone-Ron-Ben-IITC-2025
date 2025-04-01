import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import updateProfilePic from "@/api/users/updateProfilePic";
import refreshMe from "@/api/users/refreshMe";
import { useDispatch } from "react-redux";
import placeholderPhotoImg from "/images/placeholder-default-image-user-photo.png";
import { setUserInformation } from "@/utils/setUserInformation";

const Photo = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

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
    onSuccess: (data) => {
      setUserInformation(data.token, dispatch);
      location.reload();
    },
  });

  const handleSave = () => {
    if (selectedFile) {
      uploadPhotoMutation.mutate(selectedFile, {
        onSuccess: () => {
          setTimeout(() => {
            refreshUserDataMutation.mutate();
          }, 1000);
        },
      });
    } else {
      alert("Please select an image first.");
    }
  };

  return (
    <div className="min-h-screen w-full flex-1 border-l">
      <div className="flex w-full items-center justify-center gap-4">
        <div className="flex w-full flex-col items-center justify-center border-gray-300 p-[2em]">
          <h2 className="font-sans text-2xl font-bold">Photo</h2>
          <p className="pt-2 text-sm">Add a nice photo of yourself for your profile.</p>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="flex w-[600px] flex-col items-start justify-start gap-4 bg-white">
          <b className="pt-[1em] text-[0.9rem]">Image preview</b>
          <div className="w-full border border-gray-400 p-[1.3em]">
            <div className="flex w-full items-center justify-center bg-white">
              <div className="flex w-full items-center justify-center bg-gray-100 p-[0.5em]">
                <img src={preview || placeholderPhotoImg} alt="Default user photo image" />
              </div>
            </div>
          </div>
          <div className="w-full items-start justify-start">
            <b className="text-[0.85rem] font-bold">Add / Change Image</b>
            <form className="flex w-full flex-col items-start justify-start gap-6">
              <div className="mt-2 flex w-full items-start justify-start gap-4">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange}
                />

                <label
                  htmlFor="file-upload"
                  className="flex-grow cursor-pointer rounded-[0.3em] border border-gray-500 bg-white px-4 py-2 text-start text-[1rem] font-medium text-black text-opacity-80 hover:bg-gray-100"
                >
                  {selectedFile ? selectedFile.name : "No file selected"}
                </label>

                <label
                  htmlFor="file-upload"
                  className="cursor-pointer whitespace-nowrap rounded-[0.3em] border border-purple-700 px-4 py-2 text-[1rem] font-bold text-purple-700 hover:bg-purpleHoverBtn"
                >
                  Upload image
                </label>
              </div>

              <button
                type="button"
                className="rounded-[0.3em] bg-btnColor p-[0.8em] px-[1.5em] font-sans text-[0.875rem] font-extrabold text-white hover:bg-purple-600"
                onClick={handleSave}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
