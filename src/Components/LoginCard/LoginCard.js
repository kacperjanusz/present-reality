import React from 'react';
import { loginTitle, next } from '../../constants';
import { CardWrapper, Title, CustomInput, CustomButton } from './LoginCardStyles';

export const LoginCard = () => {
  const [value, setValue] = React.useState(localStorage.getItem('myValueInLocalStorage') || '');

  React.useEffect(() => {
    localStorage.setItem('userName', value);
  }, [value]);

  const onChange = (event) => setValue(event.target.value);

  return (
    <CardWrapper>
      <Title>{loginTitle}</Title>
      <CustomInput style={{width: '50%'}} value={value} type="text" onChange={onChange} placeholder="Name" />
      <CustomButton type="primary">{next}</CustomButton>
    </CardWrapper>
  );
};
