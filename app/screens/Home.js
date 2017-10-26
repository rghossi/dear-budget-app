import React from 'react';

import { Container } from '../components/Container';
import { BalanceCard } from '../components/Card';
import { NewTransactionButton } from '../components/Button';
import { TransactionList } from '../components/List';

const transactions = [
  {
    id: 1,
    name: 'Frango assado',
    type: 'expenses',
    category: {
      name: 'food',
      icon: 'ios-restaurant-outline',
    },
    date: Date.now(),
    amount: 28.5,
  },
  {
    id: 2,
    name: 'Salário',
    type: 'income',
    category: {
      name: 'salary',
      icon: 'ios-cash-outline',
    },
    date: Date.now(),
    amount: 5800,
  },
  {
    id: 3,
    name: 'Remédio',
    type: 'expenses',
    category: {
      name: 'medical',
      icon: 'ios-medkit-outline',
    },
    date: Date.now(),
    amount: 12.98,
  },
];

export default () => (
  <Container>
    <BalanceCard />
    <TransactionList transactions={transactions} />
    <NewTransactionButton />
  </Container>
);
