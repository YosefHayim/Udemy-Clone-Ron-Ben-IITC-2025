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
  setCreatedAt,
  setAuthActivate,
  setUpdatedAt,
  setUserLoaded, // ✅ Importado
} from "@/redux/slices/userSlice";

import { DecodedTokenProps } from "@/types/types";
import { jwtDecode } from "jwt-decode";
import { AppDispatch } from "@/redux/store";
import Cookies from "js-cookie";

export const setUserInformation = (cookie: string, dispatch: AppDispatch) => {
  const reduxCookie = Cookies.get("cookie");

  if (!reduxCookie || !cookie) {
    console.log("Cookie or redux cookie is not provided: ", cookie);
  }

  const decoded = jwtDecode<DecodedTokenProps>(reduxCookie || cookie);
  console.log("🔐 user information decoded: ", decoded);

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
  if (decoded.createdAt) dispatch(setCreatedAt(decoded.createdAt));
  if (decoded.updatedAt) dispatch(setUpdatedAt(decoded.updatedAt));
  if (decoded.isAuthActivated) dispatch(setAuthActivate(decoded.isAuthActivated));
  if (decoded.isLoggedPreviouslyWithGoogle !== undefined) {
    dispatch(setIsLoggedWithGoogle(decoded.isLoggedPreviouslyWithGoogle));
  }

  dispatch(setCookie(cookie));

  // ✅ Marca que os dados do usuário foram carregados
  console.log("✅ setUserInformation finalizou. Disparando setUserLoaded...");
  dispatch(setUserLoaded(true));
};
