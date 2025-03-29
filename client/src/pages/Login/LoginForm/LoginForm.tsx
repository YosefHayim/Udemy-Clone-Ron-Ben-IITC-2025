import loginUser from '@/api/users/loginUser';
import Loader from '@/components/Loader/Loader';
import { emailContext } from '@/routes/AppRoutes';
import { inputLoginWEmail, regFullButtonPurpleHover } from '@/utils/stylesStorage';
import { useMutation } from '@tanstack/react-query';
import { useContext, useRef, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { PiWarningOctagon } from 'react-icons/pi';
import { TextField } from '@mui/material';

const LoginForm = () => {
  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error('emailContext is not provided');
  const [emailUser, setEmailUser, userFullName, setUserFullName] = emailCtx;
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();
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
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <div className="relative flex w-full">
            <TextField
              ref={inputRef}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              inputMode="email"
              id="email"
              label="Email"
              variant="filled"
              name="email"
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
                    color: 'black',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: `${isError ? 'red' : 'black'}`,
                  fontWeight: 600,
                  fontSize: 15,
                },
              }}
              slotProps={{
                input: {
                  disableUnderline: true,
                },
              }}
            />
            {isError && (
              <PiWarningOctagon
                size={18}
                className={`${isFocused ? '' : 'left-14 top-[28%]'} absolute left-12 top-[4px] text-red-600`}
              />
            )}
          </div>
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
