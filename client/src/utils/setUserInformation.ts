import {
  setFullName,
  setHeadline,
  setLanguage,
  setUserLinks,
  setProfilePic,
  setEmailAddress,
  setBio,
  setRole,
  setCoursesBought,
  setUdemyCredits,
  setIsLoggedWithGoogle,
  setCookie,
} from "@/redux/slices/userSlice";
import { DecodedTokenProps } from "@/types/types";
import { jwtDecode } from "jwt-decode";
import { AppDispatch } from "@/redux/store";

export const setUserInformation = (cookie: string, dispatch: AppDispatch) => {
  const decoded = jwtDecode<DecodedTokenProps>(cookie);
  console.log("user information has been updated: ", decoded);

  if (decoded.fullName) dispatch(setFullName(decoded.fullName));
  if (decoded.headline) dispatch(setHeadline(decoded.headline));
  if (decoded.language) dispatch(setLanguage(decoded.language));
  if (decoded.userLinks) dispatch(setUserLinks(decoded.userLinks));
  if (decoded.profilePic) dispatch(setProfilePic(decoded.profilePic));
  if (decoded.email) dispatch(setEmailAddress(decoded.email));
  if (decoded.bio) dispatch(setBio(decoded.bio));
  if (decoded.role) dispatch(setRole(decoded.role));
  if (decoded.coursesBought) dispatch(setCoursesBought(decoded.coursesBought));
  if (decoded.udemyCredits) dispatch(setUdemyCredits(decoded.udemyCredits));
  dispatch(setIsLoggedWithGoogle(true));
  dispatch(setCookie(cookie));

  if (decoded.isLoggedPreviouslyWithGoogle !== undefined) {
    dispatch(setIsLoggedWithGoogle(decoded.isLoggedPreviouslyWithGoogle));
  }
};
