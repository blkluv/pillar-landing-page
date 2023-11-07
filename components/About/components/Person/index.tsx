import React from 'react';
import { PersonType } from 'types/person';

interface Props {
  person: PersonType;
  styles: any;
  show?: boolean;
  toggleShow?: () => void;
}

const Person: React.FC<Props> = ({ person, styles, show, toggleShow }) => {
  return (
    <div className={styles['person']}>
      <img src={person.avatar} alt={person.name} />
      <h4>{person.name}</h4>
      <p>{person.role}</p>
      <p>{person.summary}</p>
      <p>{person.description}</p>
      <a href={person.ctaURL} target="_blank" rel="noopener noreferrer">
        Click here to learn more
      </a>
      <button onClick={toggleShow}>{show ? 'Show Less' : 'Show More'}</button>
    </div>
  );
};

export default Person;
