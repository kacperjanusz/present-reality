import React from 'react';
import { Image } from 'antd';
import mind from '../../assets/mind.png';
import { useHistory } from 'react-router-dom';
import {
  CustomTitle,
  CustomDescription,
  CardContent,
  DescriptionBox,
  BoxImage,
  CardContentv2,
  CustomButton,
} from './InformationPageStyle';

export const InformationPage = () => {
  let history = useHistory();

  return (
    <CardContentv2>
      <CardContent>
        <BoxImage>
          <Image width={400} src={mind} />
        </BoxImage>

        <CustomTitle>Pora poznać swój umysł</CustomTitle>
        <DescriptionBox>
          <CustomDescription>
            PRZED TOBA QUIZ SKŁADAJĄCY SIĘ Z 10 ZADAŃ. NA KAZDE ZADANIE MASZ 10 SEKUND. PO ZAKONCZENIU QUIZU OKAŻE SIĘ
            CZY JESTEŚ WIRTUALNYM CYBORGIEM CZY JESZCZE REALNYM CZŁOWIEKIEM. JEZELI JUZ ZOSTALES KROLEM SWIATA
            WIRTUALNEGO NIE MARTW SIE POMOŻEMY CI WROCIC DO REALNEGO ŚWIATA.
          </CustomDescription>
        </DescriptionBox>
        <CustomButton type="primary" onClick={() => history.push('/game')}>
          SPRAWDŹ SIĘ
        </CustomButton>
      </CardContent>
    </CardContentv2>
  );
};
