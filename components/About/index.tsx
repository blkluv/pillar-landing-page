import React from 'react';
import { Grid } from '@mui/material';
import { PersonType } from 'types/person';
import Person from './components/Person';
import styles from './About.module.scss';
// types/person.d.ts (or relevant type definition file)
const people: PersonType[] = [
  {
    id: 1,
    name: 'Billionaire CRE Club',
    avatar: '/people/1.png', // Provide unique avatar URLs for each person
    ctaURL: 'https://cre.arvrtise.com',
    role: 'SERVICES $44.99/M',
    summary: 'Subscribe to our premium Discord Service channel.',
    description: 'This is the way',
  },

  {
    id: 2,
    name: 'Billionaire CRE Club',
    avatar: '/people/1.png',
    ctaURL: 'https://cre.arvrtise.com',
    role: 'BROKER $44.99/M',
    summary: 'Subscribe to our premium Discord Broker channel.',
    description: 'This is the way',
  },

  {
    id: 3,
    name: 'Billionaire CRE Club',
    avatar: '/people/1.png',
    ctaURL: 'https://cre.arvrtise.com',
    role: 'INVESTOR $199.99/M',
    summary: 'Subscribe to our premium Discord Investor channel.',
    description: 'This is the way',
  },

  {
    id: 4,
    name: 'Arvrtise Real Estate',
    avatar: '/people/1.png', // Provide unique avatar URLs
    ctaURL: 'https://realestate.arvrtise.com',
    role: 'DIY REAL ESTATE AD',
    summary: 'Subscribe to our premium real estate Arvrtising platform.',
    description: 'This is the way',
  },
];

const About = () => {
  const [show, setShow] = React.useState(false);

  const toggleShow = () => {
    setShow((value) => !value);
  };

  return (
    <section id="about-us" className={styles.about}>
      <div className={styles['about-header']}>
        <h3>Subscribe To The Elite CRE Club</h3>
        <p>We made CRE simpler for everyone, starting with subscriptions..</p>
      </div>
      <div className={styles['about-content']}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          {people.map((person, index) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
              <Person person={person} styles={styles} show={show} toggleShow={toggleShow} />
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default About;
