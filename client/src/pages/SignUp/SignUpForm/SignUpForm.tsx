import registerUser from '@/api/users/registerUser';
import { emailContext } from '@/routes/AppRoutes';
import { RegisterUserPayload } from '@/types/types';
import { useMutation } from '@tanstack/react-query';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckboxSpecialOffer from './CheckboxSpecialOffer/CheckboxSpecialOffer';
import ButtonLoader from '@/components/ButtonLoader/ButtonLoader';
import CustomInput from '@/components/CustomInput/CustomInput';

const SignUpForm = ({ isMobile }) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setShowIsError] = useState(false);
  const navigate = useNavigate();

  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error('emailContext is not provided');
  const [emailUser, setEmailUser, userFullName, setUserFullName] = emailCtx;

  const mutation = useMutation<unknown, Error, RegisterUserPayload>({
    mutationFn: registerUser,
    onSuccess: (data) => {
      if (data) navigate('/verify-code');
    },
    onError: (error) => {
      if (error.status === 500) setShowIsError(true);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;

    if (fullName.length === 0 || email.length === 0) {
      setShowIsError(true);
      return;
    }

    setEmailUser(email);
    setUserFullName(fullName);
    mutation.mutate({ fullName, email });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <form className="flex flex-col items-center justify-start space-y-4" onSubmit={handleSubmit}>
      <div className={`${isMobile && 'mb-5'}`}>
        <CheckboxSpecialOffer />
      </div>
      <CustomInput
        useErrorDisplay={false}
        isError={isError}
        setShowIsError={setShowIsError}
        nameAttribute={'fullName'}
        idAttribute={'fullName'}
        labelName={'Full name'}
        inputMode={'text'}
      />
      <CustomInput
        isError={isError}
        setShowIsError={setShowIsError}
        nameAttribute={'email'}
        idAttribute={'email'}
        labelName={'Email'}
        inputMode={'text'}
      />
      <div className="w-full">
        <ButtonLoader isLoading={isLoading} />
      </div>
    </form>
  );
};

export default SignUpForm;
