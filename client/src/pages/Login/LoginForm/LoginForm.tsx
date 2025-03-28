import loginUser from '@/api/users/loginUser';
import Loader from '@/components/Loader/Loader';
import { emailContext } from '@/routes/AppRoutes';
import { inputLoginWEmail, regFullButtonPurpleHover } from '@/utils/stylesStorage';
import { useMutation } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { PiWarningOctagon } from 'react-icons/pi';
import { TextField } from '@mui/material';

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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    setEmailUser(email);
    loginMutation.mutate({ email });
  };

  return (
    <form className="mb-4 flex flex-col space-y-4" onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute mb-2 ml-3 mt-2 flex items-center justify-center gap-1 font-sans font-bold text-black">
          {isError && <PiWarningOctagon size={18} className="text-red-600" />}
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <TextField
            inputMode="email"
            id="email"
            label="Email"
            variant="filled"
            name="Email"
            error={isError}
            sx={{
              width: '100%',
              '& .MuiInputBase-root': {
                backgroundColor: 'white',
                border: '1px solid gray',
                borderRadius: '5px',
                transition: 'border-color 0.2s ease-in-out',
                '&:hover': {
                  borderColor: 'purple',
                },
                '&.Mui-focused': {
                  borderColor: 'purple',
                  backgroundColor: 'white',
                },
                '& input': {
                  fontWeight: 600,
                  color: 'black',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'black',
              },
            }}
            slotProps={{
              input: {
                disableUnderline: true,
              },
            }}
          />

          {isError && <p className="text-red-600">Please enter a valid email address.</p>}
        </div>
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
