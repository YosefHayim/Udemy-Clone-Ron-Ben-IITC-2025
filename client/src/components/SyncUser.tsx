import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setUserInformation } from "@/utils/setUserInformation";
import { AppDispatch } from "@/redux/store";

const SyncUser = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const timer = setTimeout(() => {
            const cookie = Cookies.get("cookie");
            if (cookie) {
                setUserInformation(cookie, dispatch); // <== aqui dentro já tem o dispatch(setUserLoaded(true))
            }
        }, 200); // atraso pequeno pra garantir leitura do cookie

        return () => clearTimeout(timer);
    }, [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const cookie = Cookies.get("cookie");
            console.log("🍪 Cookie lido no SyncUser:", cookie);

            if (cookie) {
                console.log("📥 Chamando setUserInformation com cookie...");
                setUserInformation(cookie, dispatch);
            }
        }, 200);

        return () => clearTimeout(timer);
    }, []);


    return null;
};

export default SyncUser;
