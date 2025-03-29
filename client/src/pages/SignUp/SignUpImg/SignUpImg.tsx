import signUpImage from '/images/signup.png';

const SignUpImg = () => {
  return (
    <div className=" flex h-full w-1/2 items-start justify-center bg-white">
      <img
        src="/images/signup.png"
        alt={signUpImage}
        className="mr-[2.7rem] h-auto max-h-[100%] w-[100%] max-w-[620px] object-contain p-12"
      />
    </div>
  );
};

export default SignUpImg;
