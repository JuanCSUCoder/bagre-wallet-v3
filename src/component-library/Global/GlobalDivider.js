import React from 'react';
import { StyleSheet } from 'react-native';

import GlobalImage from './GlobalImage';
import DividerM from '../../assets/images/DividerM.png';

const styles = StyleSheet.create({
  divider: {
    marginBottom: 32,
    width: 100,
    height: 4,
    backgroundColor: 'blue',
    border: 0
  },
});

const GlobalDivider = () => (
  <hr style={styles.divider}></hr>
);
export default GlobalDivider;
