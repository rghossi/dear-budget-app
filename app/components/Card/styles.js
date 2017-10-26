import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$lightGreen',
    marginVertical: 10,
    marginHorizontal: 20,
    alignSelf: 'stretch',
    borderRadius: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    fontSize: 23,
  },
  itemTitle: {
    fontSize: 20,
    marginLeft: 10,
  },
  itemLabel: {
    fontSize: 16,
  },
  separator: {
    marginHorizontal: 20,
    backgroundColor: '$border',
    height: StyleSheet.hairlineWidth,
  },
  green: {
    color: '$green',
  },
  red: {
    color: '$red',
  },
});

export default styles;
