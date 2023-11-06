import { Grid } from '@mui/material';
import styles from './Values.module.scss';
import { ValueType } from 'types/value';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import BorderClearIcon from '@mui/icons-material/BorderClear';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

const values: ValueType[] = [
  {
    title: 'Verified',
    icon: <LocalPoliceIcon htmlColor="#1D3150" />,
    subTitle: 'Subscribe to premium for a verified badge',
  },
  {
    title: 'TikTok',
    icon: <BorderClearIcon htmlColor="#1D3150" />,
    subTitle:
      'Post your Ad on our CRE Club <a href="https://www.tiktok.com/@creclub" target="_blank">TikTok</a>',
  },
  {
    title: 'DIY',
    icon: <EmojiPeopleIcon htmlColor="#1D3150" />,
    subTitle: 'No middleman needed',
  },
  {
    title: 'Up Vote',
    icon: <StackedLineChartIcon htmlColor="#1D3150" />,
    subTitle: 'Tell everyone to upvote your ad',
  },
];

const Values = () => {
  return (
    <section className={styles.values}>
      <div className={styles['values-header']}>
        <h3>Value</h3>
        <p>Promote your CRE content to your target real estate demographic</p>
      </div>
      <div className={styles['values-content']}>
        <Grid container rowSpacing={2}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={12} md={3} lg={3} key={index}>
              <div className={styles['value-item']}>
                {value.icon}
                {/* <img src={value.icon} alt={value.title} /> */}
                <h3>{value.title}</h3>
                <p>{value.subTitle}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Values;
