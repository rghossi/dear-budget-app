import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '$secondaryColor',
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 10,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  text: {
    color: '$white',
    fontSize: 20,
    paddingVertical: 20,
    fontWeight: '400',
  },
});

export default styles;
