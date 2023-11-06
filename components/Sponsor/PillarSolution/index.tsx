import { Grid } from '@mui/material';
import { SolutionType } from 'types/solution';
import styles from './PillarSolution.module.scss';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
const solutions: SolutionType[] = [
  {
    title: 'Streamline Capital Access',
    icon: <CachedOutlinedIcon htmlColor="#1D3150" />,
    content:
      'The CRE Club provides subscribers with direct access to brokers, investors, and service providers with private deal rooms',
  },
  {
    title: 'Advanced CRE Tech',
    icon: <KeyOutlinedIcon htmlColor="#1D3150" />,
    content:
      'BCC is the most technology advanced commercial real estate platform in the industry with access to AI tools and blockchain services.',
  },
  {
    title: 'No Middleman Fees',
    icon: <PriceCheckIcon htmlColor="#1D3150" />,
    content: 'Experience streamlined, cost-effective CRE networking and transactions. This is the way.',
  },
];

const PillarSolution = () => {
  return (
    <section id="solutions" className={styles['pillar-solution']}>
      <div className={styles['pillar-solution-header']}>
        <h3>The BCC Solution</h3>
      </div>
      <div className={styles['pillar-solution-content']}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
              <div className={styles['pillar-solution-content-item']}>
                {solution.icon}
                {/* <h6>LOREM IPSUM</h6> */}
                <h3>{solution.title}</h3>
                <p>{solution.content}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default PillarSolution;
