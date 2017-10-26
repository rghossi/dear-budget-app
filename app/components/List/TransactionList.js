import React from 'react';
// import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
import TransactionItem from './TransactionItem';
import TransactionHeader from './TransactionHeader';

const TransactionList = () => (
  <TouchableWithoutFeedback>
    <View style={styles.container}>
      <TransactionHeader />
      <TransactionItem />
      <View style={styles.separator} />
      <TransactionItem />
      <View style={styles.separator} />
      <TransactionItem />
    </View>
  </TouchableWithoutFeedback>
);

TransactionList.propTypes = {};

export default TransactionList;
