import React from 'react';
// import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const NewTransactionButton = () => (
  <TouchableOpacity activeOpacity={0.6} style={styles.container}>
    <View style={styles.wrapper}>
      <Text style={styles.text}>NEW TRANSACTION</Text>
    </View>
  </TouchableOpacity>
);

NewTransactionButton.propTypes = {};

export default NewTransactionButton;
