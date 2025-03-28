import loginUser from '@/api/users/loginUser';
import Loader from '@/components/Loader/Loader';
import { RootState } from '@/redux/store';
import { emailContext } from '@/routes/AppRoutes';
import { inputLoginWEmail, regFullButtonPurpleHover } from '@/utils/stylesStorage';
import { useMutation } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error('emailContext is not provided');
  const [emailUser, setEmailUser, userFullName, setUserFullName] = emailCtx;

  const [isLoading, setLoading] = useState(false);
  const [isError, setShowIsError] = useState(false);
  const navigate = useNavigate();
  const globalEmail = useSelector((state: RootState) => state?.user?.email);

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      navigate('/verify-code');
    },
    onError: (error) => {
      console.log('Error during login process:', error);
      setShowIsError(true);
      return;
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string) || globalEmail;

    setEmailUser(email);
    loginMutation.mutate({ email });
  };

  return (
    <form className="mb-4 flex flex-col space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        className={`${inputLoginWEmail}`}
      />
      <button
        type="submit"
        className={`${regFullButtonPurpleHover} flex w-full items-center justify-center font-sans font-extrabold`}
      >
        {isLoading ? (
          <Loader useSmallLoading={true} hSize="" />
        ) : (
          <div className="flex items-center">
            <AiOutlineMail size={20} />
            Continue with email
          </div>
        )}
      </button>
    </form>
  );
};

export default LoginForm;
