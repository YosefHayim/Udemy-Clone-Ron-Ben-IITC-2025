const EnterCodeSendTo = ({ emailUser }) => {
  if (!emailUser) console.log("Email is missing in the context of send to code: ", emailUser);

  return (
    <div className="mb-6 w-full text-center text-base">
      <p>
        Enter the 6- digit code we sent to <b>{emailUser}</b> to finish your login.
      </p>
    </div>
  );
};

export default EnterCodeSendTo;
