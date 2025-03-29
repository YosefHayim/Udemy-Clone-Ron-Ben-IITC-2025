import ContainerImg from "./ContainerImg/ContainerImg";
import CommercialRecap from "./CommercialRecap/CommercialRecap";

const Commercial = () => {
  return (
    <div className="mb-2 flex items-start justify-between gap-[0.5em] border border-borderCommercial bg-bgCommercial text-[0.8rem]">
      <div className="flex w-full items-start justify-start">
        <ContainerImg />
        <CommercialRecap />
      </div>
    </div>
  );
};

export default Commercial;
