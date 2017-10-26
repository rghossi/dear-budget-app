import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const TransactionHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Last transactions</Text>
  </View>
);

export default TransactionHeader;
