import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserProfile = () => {
  return (
    <div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-black font-bold text-white">
            CN
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default UserProfile;
