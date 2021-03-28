import React from 'react';
import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
import {Box, CardContent} from './ScoreStyles'

const { Column } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    value: 32,
  },
  {
    key: '2',
    firstName: 'Jim',
    value: 42,
  },
  {
    key: '3',
    firstName: 'Joe',
    value: 32,
  },
];

export const Score = () => {
  return (
    <Box>
      <CardContent>
        <Table dataSource={data}>
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Space size="large" />
          <Column title="Value" dataIndex="value" key="value" />
        </Table>
      </CardContent>
    </Box>
  )
}
