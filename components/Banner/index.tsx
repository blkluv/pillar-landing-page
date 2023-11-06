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
        <h1>Own Your Commercial Real Estate Data</h1>
        <p className={`${styles['large']} large`}>
          We expedited the CRE transition time through the implementation of tokenization technology,
          complemented by AI and blockchain technology. Subscribe to our Billionaire CRE Club.
        </p>
        <div className={styles['button-container']}>
          <a href="https://cre.arvrtise.com"></a>
          <button className="ui-button-2 primary" onClick={() => handleMoveToId()}>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
