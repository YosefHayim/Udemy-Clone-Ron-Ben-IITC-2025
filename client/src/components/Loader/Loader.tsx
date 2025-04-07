import smallStyles from "./SmallLoader.module.css";
import blackSmallStyle from "./SmallLoaderBlack.module.css";
import purpleLightExtraSmallStyle from "./smallLoaderLightPurple.module.css";

const Loader: React.FC<{
  hSize: string;
  useSmallLoading?: boolean;
  paddingSetTo?: string;
  usePurpleLoading?: boolean;
  useSmallBlackLoading?: boolean;
  purpleLightSmallStyle?: boolean;
}> = ({
  hSize = "100",
  useSmallLoading = false,
  paddingSetTo = "25em",
  useSmallBlackLoading = false,
  purpleLightSmallStyle = false,
}) => {
  return (
    <div className={`flex items-center justify-center h-[${hSize}vh] p-[${paddingSetTo}]`}>
      <div className={useSmallLoading && smallStyles.loader}></div>
      <div className={useSmallBlackLoading && blackSmallStyle.loader}></div>
      <div className={purpleLightSmallStyle && purpleLightExtraSmallStyle.loader}></div>
    </div>
  );
};

export default Loader;
