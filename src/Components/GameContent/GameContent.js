import _ from 'lodash';
import React, { useRef, useState } from 'react';
import News from '../News/News';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../routing/AppRoute';
import { UrgeWithPleasureComponent } from '../Timer/Timer';
import { NewsWrapper, Root } from './GameContent.styles';
import { Carousel } from 'antd';

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
  const sliderRef = useRef(null);
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
    sliderRef.current.next();
  };

  return (
    <Root>
      <UrgeWithPleasureComponent key={currentQuestionIndex} onComplete={() => {}} />
      <Carousel dotPosition="top" ref={sliderRef}>
        {questions.map(({ left, right }, i) => (
          <div key={i}>
            <NewsWrapper>
              <News {...left} handleClick={goNext}></News>
              <News {...right} handleClick={goNext}></News>
            </NewsWrapper>
          </div>
        ))}
      </Carousel>
    </Root>
  );
};

export default GameContent;
