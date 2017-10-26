import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

const Item = ({
  title, label, iconType, boldLabel, green, red,
}) => {
  const itemIconStyles = [styles.itemIcon];
  const itemTitleStyles = [styles.itemTitle];
  const itemLabelStyles = [styles.itemLabel];

  if (boldLabel) itemLabelStyles.push({ fontWeight: '600', fontSize: 20 });
  if (green) itemLabelStyles.push(styles.green);
  if (red) itemLabelStyles.push(styles.red);

  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <MaterialIcons style={itemIconStyles} name={`${iconType}`} />
        <Text style={itemTitleStyles}>{title}</Text>
      </View>
      <Text style={itemLabelStyles}>{label}</Text>
    </View>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  iconType: PropTypes.string,
  boldLabel: PropTypes.bool,
  green: PropTypes.bool,
  red: PropTypes.bool,
};

export default Item;
