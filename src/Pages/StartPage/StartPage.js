import React from 'react';
import { Image } from 'antd';
import { Title, Box, Description, DescriptionBox } from './StartpageStyles';
import logo from '../../assets/StartpageImg.png';
import { useHistory } from 'react-router-dom';
import { BasicButton } from '../../Components/BasicButton/BasicButton';

export const StartPage = () => {
  let history = useHistory();
  return (
    <Box>
      <Image width={400} src={logo} />
      <Title level={2}>Trenuj swoją świadomość</Title>
      <DescriptionBox>
        <Description>
          Tak naprawdę nigdy nie było szybszego i potężniejszego sposobu propagowania kłamstw niż opublikowanie ich
          online.
        </Description>
      </DescriptionBox>
      <Description>~ Matthew D'Ancona</Description>
      <BasicButton title="DALEJ" onClickFunction={() => history.push('/login')} />
    </Box>
  );
};
