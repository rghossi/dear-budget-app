import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$primaryColor',
    marginVertical: 10,
    marginHorizontal: 20,
    alignSelf: 'stretch',
    borderRadius: 10,
  },
  separator: {
    marginHorizontal: 9,
    backgroundColor: '$border',
    height: StyleSheet.hairlineWidth,
  },
  green: {
    color: '$green',
  },
  red: {
    color: '$red',
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingLeft: 0,
    backgroundColor: '$lightGreen',
    borderRadius: 10,
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descWrapper: {
    marginLeft: 10,
  },
  itemName: {
    fontWeight: '600',
  },
  itemNumber: {
    fontSize: 13,
    alignSelf: 'flex-end',
  },
  amount: {
    fontSize: 18,
    fontWeight: '500',
  },
  verticalLine: {
    backgroundColor: '$red',
    width: 2,
    height: 50,
    marginHorizontal: 10,
  },
  icon: {
    fontSize: 40,
    minWidth: 40,
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '$lightGreen',
    marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '$border',
  },
  headerTitle: {
    fontWeight: '500',
  },
  bgGreen: {
    backgroundColor: '$green',
  },
});

export default styles;
