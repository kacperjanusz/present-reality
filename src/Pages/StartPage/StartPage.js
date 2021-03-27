import React from 'react';
import { Image } from 'antd';
import { Title, Box, Description, DescriptionBox, Author, CustomButton } from './StartpageStyles';
import logo from '../../assets/StartpageImg.png';
import { useHistory } from 'react-router-dom';

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
      <Author>
        <Description>~ Matthew D'Ancona</Description>
      </Author>

      <CustomButton type="primary" onClick={() => history.push('/login')}>
        DALEJ
      </CustomButton>
    </Box>
  );
};
