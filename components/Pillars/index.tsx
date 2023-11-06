import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import PillarCard from './components/PillarCard';
import styles from './Pillar.module.scss';

interface iPillarCards {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  path?: string;
}

const pillarCardsContent: iPillarCards[] = [
  {
    image: '/landingpage/institution-quality.png',
    title: 'Billionaire CRE Club',
    subtitle: 'Join the elite group of brokers, investors and service professionals.',
    description:
      'Discover offline deals worldwide. Verify $1 million in CRE sales as a broker or $1 million in AUM as an investor to earn a blockchain badge, granting access to private channels, events, and auctions.',
  },
  {
    image: '/landingpage/data-first.png',
    title: 'Tokenizing Assets',
    subtitle: 'Blockchain AUM',
    description:
      'Own your CRE data. We assist investors in tokenizing their portfolios, learning blockchain technology, making digital asset investments, and providing reporting and customizable analytics.',
  },
  {
    image: '/landingpage/network-driven.png',
    title: 'DIY CRE Marketing',
    subtitle: 'Subscribe & Upvote Your Property',
    description:
      'We created a new way of marketing real estate and finding the hostest properties with an affordable flat rate DIY upvoting Arvrtising campaign. The hottest properties will be featured on @creclub socials.',
  },
  {
    image: '/landingpage/capital-structure.png',
    title: 'CRE Club Linkedin',
    subtitle: 'Join us on Linkedin',
    description:
      'CRE Club subscribers can join our private LinkedIn group, where only members can post to prevent spammy CRE content on LinkedIn.',
    path: '/sponsor',
  },
];

const Pillars = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/sponsor');
  };

  return (
    <section className={styles.pillars}>
      <h3>Our Pillars</h3>
      <div className={styles['pillars-content']}>
        <Grid container>
          {pillarCardsContent.map(({ title, subtitle, description, image, path }, index) => {
            const isLast = index === pillarCardsContent.length - 1;
            return (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <div
                  onClick={isLast ? handleNavigate : undefined}
                  style={{ cursor: isLast ? 'pointer' : 'default', width: '100%' }}>
                  <PillarCard
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    imageSrc={image}
                    styles={styles}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default Pillars;
