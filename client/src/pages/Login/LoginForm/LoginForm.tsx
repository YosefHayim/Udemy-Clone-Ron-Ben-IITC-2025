import loginUser from "@/api/users/loginUser";
import { emailContext } from "@/routes/AppRoutes";
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "@/components/CustomInput/CustomInput";
import ButtonLoader from "@/components/ButtonLoader/ButtonLoader";

const LoginForm = () => {
  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error("emailContext is not provided");
  const [emailUser, setEmailUser, userFullName, setUserFullName] = emailCtx;
  const [isLoading, setLoading] = useState(false);
  const [isError, setShowIsError] = useState(false);
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      navigate("/verify-code");
    },
    onError: (error) => {
      console.log("Error during login process:", error);
      setShowIsError(true);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (email.length > 1) {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.(com|co\.il)$/.test(email);
      setShowIsError(!isValidEmail);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setEmailUser(email);
      loginMutation.mutate({ email });
      setLoading(false);
    }, 2000);
  };

  return (
    <form className="mb-4 flex flex-col space-y-4" onSubmit={handleSubmit}>
      <div className="relative">
        <CustomInput
          isError={isError}
          setShowIsError={setShowIsError}
          labelName={"Email"}
          idAttribute={`email`}
          nameAttribute={`email`}
          inputMode={`email`}
        />
      </div>
      <ButtonLoader isLoading={isLoading} />
    </form>
  );
};

export default LoginForm;
