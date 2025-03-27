import { LoaderProps } from '@/types/types';
import styles from './Loader.module.css';
import smallStyles from './SmallLoader.module.css';
import blackSmallStyle from './SmallLoaderBlack.module.css';
import purpleLightExtraSmallStyle from './smallLoaderLightPurple.module.css';

const Loader: React.FC<LoaderProps> = ({
  hSize = '1000px',
  useSmallLoading = false,
  paddingSetTo = '25em',
  useSmallBlackLoading = false,
  purpleLightSmallStyle = false,
}) => {
  return (
    <div
      className={`flex h-[100vh] flex-row items-center justify-center h-[${hSize}] p-[${paddingSetTo}]`}
    >
      <div className={useSmallLoading ? smallStyles.loader : styles.loader}></div>
      <div className={useSmallBlackLoading ? blackSmallStyle.loader : ''}></div>
      <div className={purpleLightSmallStyle ? purpleLightExtraSmallStyle.loader : ''}></div>
    </div>
  );
};

export default Loader;
