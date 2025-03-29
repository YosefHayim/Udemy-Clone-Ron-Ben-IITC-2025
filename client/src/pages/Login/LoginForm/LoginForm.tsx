import loginUser from '@/api/users/loginUser';
import Loader from '@/components/Loader/Loader';
import { emailContext } from '@/routes/AppRoutes';
import { regFullButtonPurpleHover } from '@/utils/stylesStorage';
import { useMutation } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import CustomInput from '@/components/CustomInput/customInput';

const LoginForm = () => {
  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error('emailContext is not provided');
  const [emailUser, setEmailUser, userFullName, setUserFullName] = emailCtx;
  const [isLoading, setLoading] = useState(false);
  const [isError, setShowIsError] = useState(false);
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      navigate('/verify-code');
    },
    onError: (error) => {
      console.log('Error during login process:', error);
      setShowIsError(true);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    if (!email.includes('@') || !email.includes('.com')) {
      setShowIsError(true);
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
        <CustomInput isError={isError} />
      </div>
      <div>
        <button type="submit" className={`${regFullButtonPurpleHover} w-full`}>
          {isLoading ? (
            <Loader useSmallLoading={true} hSize="" />
          ) : (
            <p className="flex w-full items-center justify-center gap-2 text-base">
              <AiOutlineMail size={20} />
              Continue with email
            </p>
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
