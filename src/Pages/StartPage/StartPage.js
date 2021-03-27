import React from 'react';
import { Typography, Space } from 'antd';
import { Image } from 'antd';
import { Title } from './StartpageStyles';
import logo from '../../assets/StartpageImg.png';

const { Link } = Typography;

export const StartPage = () => {
  return (
    <div>
      <Image width={400} src={logo} />
      <Title level={2}>Trenuj swoją świadomość</Title>
    </div>
  );
};
