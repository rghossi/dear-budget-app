import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryColor: '#00BD9D',

  $lightGreen: '#f7fff8',
  $green: '#00BD9D',
  $red: '#f44242',

  $border: 'black',
  $white: '#fff',
});

export default () => <Home />;
