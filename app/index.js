import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryColor: '#00BD9D',
});

export default () => <Home />;
