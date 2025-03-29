import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setUserInformation } from "@/utils/setUserInformation";

const SyncUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cookie = Cookies.get("cookie");
    if (cookie) {
      setUserInformation(cookie, dispatch);
    }
  }, []);

  return null;
};

export default SyncUser;
