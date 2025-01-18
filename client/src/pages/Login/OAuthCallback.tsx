import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import googleAuth from "@/api/users/googleAuth";

const OAuthCallback = () => {
  const navigate = useNavigate();

  const {
    mutate: handleGoogleAuth,
    isLoading,
    error,
  } = useMutation(googleAuth, {
    onSuccess: (data) => {
      console.log("Google Auth Success:", data);
      // Handle the tokens and user data (e.g., save to Redux or localStorage)
      navigate("/"); // Redirect to the homepage or dashboard
    },
    onError: (error) => {
      console.error("Google Auth Failed:", error);
    },
  });

  useEffect(() => {
    handleGoogleAuth();
  }, [handleGoogleAuth]);

  return (
    <div>
      {isLoading
        ? "Processing authentication..."
        : error
        ? "Authentication failed"
        : null}
    </div>
  );
};

export default OAuthCallback;
