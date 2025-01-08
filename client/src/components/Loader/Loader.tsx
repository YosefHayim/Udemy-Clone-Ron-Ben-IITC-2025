import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className="flex flex-row items-center justify-center h-[1000px]">
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
