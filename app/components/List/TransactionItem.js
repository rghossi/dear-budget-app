import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

import styles from './styles';

const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1);

const TransactionItem = ({ transaction }) => {
  const iconName = transaction.category.icon || 'ios-cash-outline';
  const verticalLineStyles = [styles.verticalLine];
  const isIncome = transaction.type === 'income';
  const currencyStr = isIncome ? '$ ' : '- $ ';

  if (isIncome) verticalLineStyles.push(styles.bgGreen);

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.infoWrapper}>
        <View style={verticalLineStyles} />
        <Ionicons style={styles.icon} name={iconName} />
        <View style={styles.descWrapper}>
          <Text style={styles.itemName}>{transaction.name}</Text>
          <Text style={styles.itemCategory}>{capitalize(transaction.category.name)}</Text>
        </View>
      </View>
      <View style={styles.numbersWrapper}>
        <Text style={styles.itemNumber}>{moment(transaction.date).format('MM/DD')}</Text>
        <Text style={[styles.itemNumber, styles.amount]}>
          {currencyStr + transaction.amount.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.object,
};

export default TransactionItem;
