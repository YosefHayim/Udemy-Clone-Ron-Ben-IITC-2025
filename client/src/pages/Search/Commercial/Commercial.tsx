import ContainerImg from "./ContainerImg/ContainerImg";
import CommercialRecap from "./CommercialRecap/CommercialRecap";
import InteractionBtn from "./InteractionBtn/InteractionBtn";

const Commercial = () => {
  return (
    <div className="bg-bgCommercial flex flex-row items-start justify-start text-[0.8em] gap-[0.5em] border border-borderCommercial">
      <ContainerImg />
      <CommercialRecap />
      <InteractionBtn />
    </div>
  );
};

export default Commercial;
