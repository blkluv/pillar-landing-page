import styles from './HowItWorks.module.scss';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HowItWorks: React.FC = () => {
  return (
    <section className={styles['how-it-works']}>
      <h3>How it Works</h3>
      <h6>Our process for BCC members</h6>
      <p>Levels</p>

      <div className={styles['how-it-works-cards']}>
        <div className={styles['how-it-works-cards-small']}>
          <WarningAmberOutlinedIcon htmlColor="#FFD130" />
          <h4>General</h4>
          <p>
            <span>BCC</span> members are ranked using a leaderboard based on their activity to gamify our
            annual awards.
          </p>
        </div>
        <div className={styles['how-it-works-cards-icon']}>
          <ArrowForwardIosIcon htmlColor="#00838F" />
        </div>
        <div className={styles['how-it-works-cards-large']}>
          <CheckCircleOutlineIcon htmlColor="#00838F" />
          <h4>Verified</h4>
          <div className={styles['how-it-works-cards-large-row']}>
            <p>Subscribe and onboard onto the platform</p>

            <div className={styles['how-it-works-cards-large-row-icon']}>
              <ArrowForwardIosIcon />
            </div>

            <p>Investors can verify $1M+ AUM for a members badge to exclusive events</p>

            <div className={styles['how-it-works-cards-large-row-icon']}>
              <ArrowForwardIosIcon />
            </div>
            <p>Brokers can verify $1M+ in CRE assets sold for a members badge to exclusive events</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
