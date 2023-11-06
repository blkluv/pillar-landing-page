import { Grid, useMediaQuery } from '@mui/material';
import { handleMoveToId } from 'utils';
import styles from './Benefits.module.scss';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  imgSrc: string;
}

const benefits = [
  'Real Estate SEO',
  'Backlinks',
  'Advanced reporting',
  'Social media visibility to 100k monthly real estate viewers',
  'The front page of the Reddit of real estate',
];

const Benefits: React.FC<Props> = ({ imgSrc }) => {
  //const matches = useMediaQuery('(max-width:600px)');

  let listOfBenefits = benefits;

  // if (matches) {
  //   listOfBenefits = [benefits[0], benefits[1], benefits[2]];
  // }

  return (
    <section className={styles.benefits}>
      <Grid container>
        <Grid item xs={12} sm={6} sx={{}}>
          <div className={styles['benefits-hero']} style={{ backgroundImage: `url(${imgSrc})` }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={styles['benefits-content']}>
            <h1>Marketing Perks</h1>
            {listOfBenefits.map((benefit, idx) => (
              <div key={idx} className={styles['benefits-content-item']}>
                <AddIcon />
                <p>{benefit}</p>
              </div>
            ))}
            <div className={styles['button-container']}>
              <button className="ui-button-2" onClick={() => handleMoveToId()}>
                <a href="https://realestate.arvrtise.com" target="_blank" rel="noopener noreferrer">
                  GET STARTED
                </a>
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Benefits;
