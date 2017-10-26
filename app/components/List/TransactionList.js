import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
import TransactionItem from './TransactionItem';
import TransactionHeader from './TransactionHeader';

const renderTransactionList = (transactions) => {
  const lastElementId = transactions[transactions.length - 1].id;

  return transactions.map(transaction => (
    <View key={transaction.id}>
      <TransactionItem transaction={transaction} />
      {lastElementId !== transaction.id && <View style={styles.separator} />}
    </View>
  ));
};

const TransactionList = ({ transactions }) => (
  <TouchableWithoutFeedback>
    <View style={styles.container}>
      <TransactionHeader />
      {renderTransactionList(transactions)}
    </View>
  </TouchableWithoutFeedback>
);

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionList;
