import { useState } from "react";
import SideBarProfile from "../SideBarProfile/SideBarProfile";
import { useMutation } from "@tanstack/react-query";
import updateProfilePic from "@/api/users/updateProfilePic";
import refreshMe from "@/api/users/refreshMe";
import { jwtDecode } from "jwt-decode";
import { DecodedTokenProps } from "@/types/types";
import { setProfilePic } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

const Photo = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const cookie = Cookies.get("cookie");

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
    <div className="flex min-h-screen bg-gray-100">
      <SideBarProfile />

      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Photo</h2>
          <p className="text-gray-600 mb-4">
            Add a nice photo of yourself for your profile.
          </p>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image preview
            </label>
            <div className="w-full h-64 border rounded-lg flex items-center justify-center bg-gray-50">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                <div className="text-gray-400 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  No image selected
                </div>
              )}
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add / Change Image
            </label>
            <div className="flex space-x-4 items-center">
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
                className="flex-1 text-sm text-gray-700 border rounded-md px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="submit"
                onClick={handleUpload}
                className="px-4 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Upload image
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="button"
              className="px-6 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Save
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Photo;
