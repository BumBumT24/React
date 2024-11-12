import React from 'react';

const Card = ({ Imie, Nazwisko, Rok_rozpoczecia}) => {
  return (
    <div>
      <h2>{Imie}</h2>
      <p >{Nazwisko}</p>
      <p >{Rok_rozpoczecia}</p>
    </div>
  );
};

export default Card;
