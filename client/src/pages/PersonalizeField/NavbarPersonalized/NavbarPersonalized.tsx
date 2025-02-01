import Logo from "@/components/Logo/Logo";

const NavbarPersonalized = () => {
  return (
    <div>
      <div className="p-[1em] w-full flex flex-row items-center justify-between">
        <div>
          <Logo />
        </div>
        <div>
          <button className="text-[#6d28d2] font-bold">Save & Exit</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavbarPersonalized;
