import styles from "./Loader.module.css";
import smallStyles from "./SmallLoader.module.css";

const Loader = ({ hSize = "1000px", useSmallLoading = false }) => {
  return (
    <div className={`flex flex-row items-center justify-center h-[${hSize}]`}>
      <div
        className={useSmallLoading ? smallStyles.loader : styles.loader}
      ></div>
    </div>
  );
};

export default Loader;
