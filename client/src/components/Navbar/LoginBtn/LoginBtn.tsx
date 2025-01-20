import { Button } from "@/components/ui/button";

const LoginBtn = () => {
  return (
    <Button className="text-sm font-bold hover:text-black bg-white border-solid hover:border-black font-Sans border-[0.01rem] border-purple-700 text-purple-700 rounded-[0.2rem] px-[1.2rem] py-[1.2rem] hover:bg-purple-100 focus:outline-none">
      Log in
    </Button>
  );
};

export default LoginBtn;
