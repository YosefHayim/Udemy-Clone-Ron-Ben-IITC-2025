import { useState } from 'react';
import SideBarProfile from '../SideBarProfile/SideBarProfile';
import { useMutation } from '@tanstack/react-query';
import updateProfilePic from '@/api/users/updateProfilePic';
import refreshMe from '@/api/users/refreshMe';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import placeholderPhotoImg from '/images/placeholder-default-image-user-photo.png';
import { Input } from '@/components/ui/input';
import { setUserInformation } from '@/utils/setUserInformation';

const Photo = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const cookie = useSelector((state: RootState) => state.user.cookie);

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
    onSuccess: (cookie) => {
      setUserInformation(cookie, dispatch);
      location.reload();
    },
  });

  const handleUpload = () => {
    if (selectedFile) {
      uploadPhotoMutation.mutate(selectedFile);
      setTimeout(() => {
        refreshUserDataMutation.mutate();
      }, 2000);
    } else {
      alert('Please select an image first.');
    }
  };

  return (
    <div className="flex w-full p-[4.5em]">
      <SideBarProfile />
      <div className="w-full">
        <div className="flex w-full  items-center justify-center gap-4">
          <div className="flex w-full flex-col items-center justify-center border border-gray-300 p-[2em]">
            <h2 className="font-sans font-extrabold">Photo</h2>
            <p>Add a nice photo of yourself for your profile.</p>
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-[650px] flex-col items-start justify-start gap-4 bg-white">
            <b className="pt-[1em]">Image preview</b>
            <div className="w-full border border-gray-400 p-[1em]">
              <div className="flex w-full items-center justify-center bg-white">
                <div className="flex w-full items-center justify-center bg-gray-100 p-[1em]">
                  <img src={preview || placeholderPhotoImg} alt="Default user photo image" />
                </div>
              </div>
            </div>
            <div className="w-full items-start justify-start">
              <b>Add / Change Image</b>
              <form className="flex w-full flex-col items-start justify-start gap-6">
                <div className="flex w-full  items-start justify-start gap-4">
                  <Input
                    type="file"
                    className="bw-min-max g-white rounded-[0.2em] border border-gray-500 text-black"
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    className="w-min-max cursor-pointer rounded-[0.3em] border border-purple-700 hover:bg-purpleHoverBtn"
                    onClick={handleUpload}
                  >
                    Upload image
                  </button>
                </div>
                <button
                  type="button"
                  className="rounded-[0.3em] bg-btnColor p-[0.8em] px-[1.5em] font-sans font-extrabold text-white hover:bg-purple-600"
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
