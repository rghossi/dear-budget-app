import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryColor: '#00BD9D',
  $secondaryColor: 'F21B3F',

  $lightGreen: '#f7fff8',
  $green: '#00BD9D',
  $red: '#f44242',
  $white: '#fff',
  $tangerine: '#FF9914',
  $greenYellow: '#ABFF4F',
  $blueBell: '#A7A5C6',

  $border: 'black',
});

export default () => <Home />;
