import _ from 'lodash';
import React, { useState } from 'react';
import News from '../News/News';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../routing/AppRoute';
import { UrgeWithPleasureComponent } from '../Timer/Timer';
import { NewsWrapper } from './GameContent.styles';

const createQuestions = (data) => {
  const questions = [];
  for (let i = 0; i < data.real.length; i++) {
    const [left, right] = _.shuffle([data.real[i], data.fake[i]]);
    questions.push({
      left,
      right,
      isCorrect: false,
    });
  }

  return questions;
};

const GameContent = ({ data }) => {
  const [questions] = useState(createQuestions(data));
  const history = useHistory();
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);

  const goNext = (isReal) => () => {
    if (currentQuestionIndex >= questions.length - 1) {
      history.push(AppRoute.Summary, { questions });
      return;
    }
    if (isReal) questions[currentQuestionIndex].isCorrect = true;
    setcurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const { left, right } = questions[currentQuestionIndex];

  return (
    <div>
      <UrgeWithPleasureComponent key={currentQuestionIndex} onComplete={goNext} />
      <NewsWrapper>
        <News {...left} handleClick={goNext}></News>
        <News {...right} handleClick={goNext}></News>
      </NewsWrapper>
    </div>
  );
};

export default GameContent;
