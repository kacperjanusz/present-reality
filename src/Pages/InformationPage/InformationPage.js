import React from 'react';
import mind from '../../assets/mind.png';
import { useHistory } from 'react-router-dom';
import {
  CustomTitle,
  CustomDescription,
  CardContent,
  DescriptionBox,
  BoxImage,
  Box,
  CustomButton,
} from './InformationPageStyle';

export const InformationPage = () => {
  let history = useHistory();

  return (
    <Box>
      <CardContent>
        <BoxImage>
          <img width={400} src={mind} alt=""/>
        </BoxImage>

        <CustomTitle>Pora poznać swój umysł</CustomTitle>
        <div>
          <DescriptionBox>
            <CustomDescription>
              PRZED TOBA QUIZ SKŁADAJĄCY SIĘ Z 10 ZADAŃ. NA KAZDE ZADANIE MASZ 10 SEKUND. PO ZAKONCZENIU QUIZU OKAŻE SIĘ
              CZY JESTEŚ WIRTUALNYM CYBORGIEM CZY JESZCZE REALNYM CZŁOWIEKIEM. JEZELI JUZ ZOSTALES KROLEM SWIATA
              WIRTUALNEGO NIE MARTW SIE POMOŻEMY CI WROCIC DO REALNEGO ŚWIATA.
            </CustomDescription>
          </DescriptionBox>
        </div>
        <CustomButton type="primary" onClick={() => history.push('/game')}>
          SPRAWDŹ SIĘ
        </CustomButton>
      </CardContent>
    </Box>
  );
};
