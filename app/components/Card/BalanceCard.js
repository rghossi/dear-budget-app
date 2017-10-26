import React from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';

import Item from './Item';
import styles from './styles';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const MONTH_INCOME = 2400.0;
const MONTH_EXPENSES = 2300.0;

const Balance = () => (
  <View style={styles.container}>
    <Item
      title="Income"
      iconType="attach-money"
      label={`$ ${MONTH_INCOME}`}
      iconColor={ICON_COLOR}
      iconSize={ICON_SIZE}
      green
    />
    <View style={styles.separator} />
    <Item
      title="Expenses"
      iconType="money-off"
      label={`$ ${MONTH_EXPENSES}`}
      iconColor={ICON_COLOR}
      iconSize={ICON_SIZE}
      red
    />
    <View style={styles.separator} />
    <Item
      title="Balance"
      iconType="drag-handle"
      label={`$ ${MONTH_INCOME - MONTH_EXPENSES}`}
      iconColor={ICON_COLOR}
      iconSize={ICON_SIZE}
      boldLabel
    />
  </View>
);

export default Balance;
