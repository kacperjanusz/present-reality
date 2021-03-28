import React from 'react';

export const AnswearsPage = (props) => {
  const {
    location: {
      state: { questions },
    },
  } = props;

  return (
    <div>
      <div> {questions}</div>
    </div>
  );
};
