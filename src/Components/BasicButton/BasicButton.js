import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const CustomButton = styled(Button)`
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
`;

export const BasicButton = ({ onClickFunction, title }) => {
  return (
    <div>
      <CustomButton
        type="primary"
        onClick={() => {
          onClickFunction();
        }}
      >
        {title}
      </CustomButton>
    </div>
  );
};
