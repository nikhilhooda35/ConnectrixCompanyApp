import * as React from 'react';
import {Surface, Text} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const Box = content => (
  <Surface style={styles.surface} elevation={4}>
    <Text>Surface</Text>
  </Surface>
);

export default Box;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
