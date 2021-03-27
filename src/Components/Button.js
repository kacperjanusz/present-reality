import React from 'react';
import { Button } from 'antd';

export const ButtonX = ({ title, onClickFunction }) => {
  return (
    <Button type="primary" onClick={() => onClickFunction()}>
      {title}
    </Button>
  );
};
