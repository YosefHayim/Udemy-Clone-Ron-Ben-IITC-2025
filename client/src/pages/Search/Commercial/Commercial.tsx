import ContainerImg from "./ContainerImg/ContainerImg";
import CommercialRecap from "./CommercialRecap/CommercialRecap";

const Commercial = () => {
  return (
    <div className="bg-bgCommercial flex flex-row items-start justify-start  gap-[0.5em] border border-borderCommercial">
      <ContainerImg />
      <CommercialRecap />
    </div>
  );
};

export default Commercial;
