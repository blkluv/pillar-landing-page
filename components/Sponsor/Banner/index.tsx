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
        <div className={styles['banner-content-solutions']}>
          <div className={styles['banner-content-solutions-container']}>
            <img src="/career/logo.svg"></img>
          </div>
          <h6>BCC</h6>
        </div>
        <h1>Billionaire Cre Club</h1>
        <p className={`${styles['large']} large`}>
          Discover offline deals worldwide. Verify $1 million in CRE sales as a broker or $1 million in AUM as
          an investor to earn a blockchain badge, granting access to private channels, events, and auctions.
        </p>
        <div className={styles['button-container']}>
          <a href="https://cre.arvrtise.com"></a>
          <button className="ui-button-2" onClick={() => handleMoveToId()}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
