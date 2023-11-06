import { Grid, useMediaQuery } from '@mui/material';
import classNames from 'classnames';
import styles from './Until.module.scss';

const untilNow = [
  'Many CRE networking platforms traditionally offer limited accessibility to investors',
  'High subscription costs hinder access for smaller businesses and independent brokers',
  'Limited platform access with strict data sharing regulations',
  'Inaccurate or outdated property listings leading to a negative platform ROI',
];

const withPillar = [
  'You tokenize and own all of your CRE data securely in your blockcahin wallet',
  'Access to private member only events around the world, held once a month',
  'Reduce asset management fees and long-term broker costs while enhancing transparency',
  'Access the latest AI and blockchain technology along with advisory services for digital assets',
];

const Until: React.FC = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <section className={styles.until}>
      <Grid container>
        <Grid item xs={12} sm={6} sx={{}}>
          <div className={styles['until-now']}>
            {/* <div className={styles['until-now-tag']}>
              <div>
                <img src="/sponsor/users.svg"></img>
              </div>
              <p>Then</p>
            </div> */}
            <h1>Status Quo</h1>
            {untilNow.map((el, idx) => (
              <div key={idx} className={styles['until-now-item']}>
                <img src={`/sponsor/${matches ? 'remove.svg' : 'arrow-left.svg'}`} alt="plus-icon" />
                <p>{el}</p>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classNames(styles['until-now'], styles['right'])}>
            {/* <div className={styles['until-now-tag']}>
              <div>
                <img src="/sponsor/users.svg"></img>
              </div>
              <p>Now</p>
            </div> */}
            <h1 className={styles['right']}>With BCC</h1>
            {withPillar.map((el, idx) => (
              <div key={idx} className={styles['until-now-item']}>
                <img src={`/sponsor/check.svg`} alt="check" />
                <p className={styles['right']}>{el}</p>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Until;
