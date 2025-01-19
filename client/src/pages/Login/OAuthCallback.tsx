import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import googleAuth from "@/api/users/googleAuth";
import { useEffect } from "react";
import { GoogleAuthResponse } from "@/types/types";

const OAuthCallback = () => {
  const navigate = useNavigate();

  const mutation = useMutation<GoogleAuthResponse, unknown, void>({
    mutationFn: googleAuth, // Correctly pass the function
    onSuccess: (data) => {
      console.log("Google Auth Success:", data);
      // Handle tokens and user data
      localStorage.setItem("accessToken", data.accessToken);
      navigate("/"); // Redirect after successful auth
    },
    onError: (err) => {
      console.error("Google Auth Failed:", err);
    },
  });

  useEffect(() => {
    mutation.mutate(); // Trigger the mutation on component mount
  }, [mutation]);

  return (
    <div>
      {mutation.isPending && "Processing authentication..."}
      {mutation.isError && "Authentication failed"}
    </div>
  );
};

export default OAuthCallback;
