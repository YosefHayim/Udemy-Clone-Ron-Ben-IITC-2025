import { Button } from "@/components/ui/button";

const CloseAccount = () => {
  return (
    <div className="p-[3em]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-[1.3em]">Close Account</h1>
        <p className="text-[1.2em]">Close your account permanently.</p>
        <hr className="w-full my-[1em]" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-start w-[500px]">
          <p className="mb-[1em]">
            <b className="text-[#d51c0f]">Warning:</b> If you close your
            account, you will be unsubscribed from all 0 of your courses and
            will lose access to your account and data associated with your
            account forever, even if you choose to create a new account using
            the same email address in the future.
          </p>
          <p>
            Please note, if you want to reinstate your account after submitting
            a deletion request, you will have 14 days after the initial
            submission date to reach out to privacy@udemy.com to cancel this
            request.
          </p>
          <div className="mt-[1em]">
            <Button className="px-[1em] py-[1.5em] bg-[#6d28d2] text-white rounded-[0.2em] shadow-md hover:bg-[#892de1] focus:outline-none focus:ring-2 focus:ring-purple-500 mr-4 font-bold">
              Close account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloseAccount;
