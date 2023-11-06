import { handleMoveToId } from 'utils';
import styles from './Banner.module.scss';
interface Props {
  imgSrc: string;
}

const Banner: React.FC<Props> = ({ imgSrc }) => {
  return (
    <section
      className={`${styles.banner} padding-wrapper complete`}
      style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className={styles['banner-content']}>
        <div className={styles['banner-content-careers']}>
          <div className={styles['banner-content-careers-container']}>
            <img src="/career/logo.svg"></img>
          </div>
          <h6>DIY</h6>
        </div>
        <h1>CRE Ad Campaign</h1>
        <p>
          Post a link to your CRE PR article, property, or portfolio to share your latest developments and
          insights with your target audience{' '}
        </p>
        <div className={styles['button-container']}>
          <button className="ui-button-2" onClick={() => handleMoveToId()}>
            <a href="https://realestate.arvrtise.com" target="_blank" rel="noopener noreferrer">
              GET STARTED
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
