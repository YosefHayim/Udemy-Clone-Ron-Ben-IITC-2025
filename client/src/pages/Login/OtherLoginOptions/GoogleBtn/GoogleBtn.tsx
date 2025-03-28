import { isProduction, baseUrl, localhostUrl } from '@/api/configuration';
import googleLogin from '@/api/users/googleLogin';
import { setUserInformation } from '@/utils/setUserInformation';
import { continueWGoogleBtn } from '@/utils/stylesStorage';
import { Button } from '@mui/material';
import { useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GoogleBtn = () => {
  const [isError, setShowIsError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const googleMutationLogin = useMutation({
    mutationFn: googleLogin,
    onSuccess: (cookie) => {
      setUserInformation(cookie, dispatch);
      navigate('/');
    },
    onError: (error) => {
      console.log('Error during google login process:', error);
      setShowIsError(true);
    },
  });

  const handleGoogle = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      googleMutationLogin.mutate(credentialResponse.code);
    },
    onError: (error) => {
      console.log(`Error occurred durning login via google: `, error);
    },
    onNonOAuthError: (nonAuthError) => {
      console.log(nonAuthError);
    },
    flow: 'auth-code',
    ux_mode: 'popup',
    redirect_uri: isProduction ? baseUrl : localhostUrl,
  });
  return (
    <Button onClick={handleGoogle} className={`${continueWGoogleBtn}`}>
      <FcGoogle size={20} /> Continue with Google
    </Button>
  );
};

export default GoogleBtn;