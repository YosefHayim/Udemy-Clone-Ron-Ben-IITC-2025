import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserProfile: React.FC = () => {
  return (
    <div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-black font-extrabold text-white">
            CN
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default UserProfile;
