import React from 'react';

import { Container } from '../components/Container';
import { BalanceCard } from '../components/Card';
import { NewTransactionButton } from '../components/Button';
import { TransactionList } from '../components/List';

export default () => (
  <Container>
    <BalanceCard />
    <TransactionList />
    <NewTransactionButton />
  </Container>
);
