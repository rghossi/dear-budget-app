import React from 'react';
import { Text } from 'react-native';

import { Container } from '../components/Container';
import { Balance } from '../components/Balance';

export default () => (
  <Container>
    <Balance />
    <Text>Hello from Home Screen</Text>
  </Container>
);
