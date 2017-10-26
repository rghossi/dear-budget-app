import React from 'react';
import { Text } from 'react-native';

import { Container } from '../components/Container';
import { BalanceCard } from '../components/Card';
import { NewTransactionButton } from '../components/Button';

export default () => (
  <Container>
    <Text>Hello from Home Screen</Text>
    <BalanceCard />
    <NewTransactionButton />
  </Container>
);
