import { AppRoutes } from './routing/AppRoutes';
import 'antd/dist/antd.css';
import { useGameData } from './hooks/useData';
import './App.less';
import React from 'react';

function App() {
  // const { data } = useGameData();
  // console.log('🚀 ~ file: App.js ~ line 7 ~ App ~ data', data);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
