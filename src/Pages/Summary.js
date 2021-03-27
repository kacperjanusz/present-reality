import React from 'react';

export const Summary = (props) => {
  const {
    location: {
      state: { questions },
    },
  } = props;

  const correctAnwsers = questions.reduce((agg, curr) => (agg += curr.isCorrect ? 1 : 0), 0);
  return (
    <div>
      <h1>Brawo </h1>
      <div>Odpowiedziałeś poprawnie na {correctAnwsers}</div>
    </div>
  );
};
