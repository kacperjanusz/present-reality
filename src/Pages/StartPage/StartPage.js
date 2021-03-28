import React from 'react';
import {
  Title,
  Box,
  Description,
  DescriptionBox,
  Author,
  CustomButton,
  CardContent,
  BoxImage,
} from './StartpageStyles';
import logo from '../../assets/StartpageImg.png';
import { useHistory } from 'react-router-dom';

export const StartPage = () => {
  let history = useHistory();
  return (
    <Box>
      <CardContent>
        <BoxImage>
          <img width={400} src={logo} />
        </BoxImage>
        <div>
          <Title level={2}>Trenuj swoją świadomość</Title>
        </div>
        <div>
          <div>
            <DescriptionBox>
              <Description>
                Tak naprawdę nigdy nie było szybszego i potężniejszego sposobu propagowania kłamstw niż opublikowanie
                ich online.
              </Description>
            </DescriptionBox>
          </div>
        </div>

        <Author>
          <Description>~ Matthew D'Ancona</Description>
        </Author>

        <CustomButton type="primary" onClick={() => history.push('/login')}>
          DALEJ
        </CustomButton>
      </CardContent>
    </Box>
  );
};
