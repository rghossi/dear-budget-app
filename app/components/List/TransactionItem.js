import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const TransactionItem = () => (
  <View style={styles.itemWrapper}>
    <View style={styles.infoWrapper}>
      <View style={styles.verticalLine} />
      <Ionicons name="ios-cash-outline" size={40} />
      <View style={styles.descWrapper}>
        <Text style={styles.itemName}>Frango Assado de Ontem</Text>
        <Text style={styles.itemCategory}>Categoria</Text>
      </View>
    </View>
    <View style={styles.numbersWrapper}>
      <Text style={styles.itemNumber}>07/10</Text>
      <Text style={styles.itemNumber}>$ 2000.00</Text>
    </View>
  </View>
);

export default TransactionItem;
