import { Grid, useMediaQuery } from '@mui/material';
import { FinancialType } from 'types/financial';
import styles from './Financial.module.scss';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';

const financial: FinancialType[] = [
  {
    title: 'Brokers',
    icon: <PieChartOutlineOutlinedIcon htmlColor="#1D3150" />,

    content:
      'Brokers have the ability to network with other brokers, connect with investors, and engage with service providers.',
  },
  {
    title: 'Investors',
    icon: <ReceiptLongOutlinedIcon htmlColor="#1D3150" />,

    content:
      'Investors have the ability to network with other investors, connect directly with brokers, and engage with service providers.',
  },
  {
    title: 'Service Providers',
    icon: <AccessibilityNewOutlinedIcon htmlColor="#1D3150" />,
    content: 'Service providers have their own channel to promote their services to brokers and investors.',
  },
];

const Financial = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <section className={styles.financial}>
      <div className={styles['financial-header']}>
        {/* <h6>SPONSORS</h6> */}
        <h3>No Middleman Fees</h3>
      </div>
      <div className={styles['financial-content']}>
        <Grid container rowSpacing={3} columnSpacing={2}>
          {financial.map((financial, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
              <div className={styles['financial-content-item']}>
                {financial.icon}
                <h2>{financial.title}</h2>
                <p>{financial.content}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Financial;
