import React from 'react';
import { StyleSheet } from 'react-native';
import GlobalImage from '../../../component-library/Global/GlobalImage';
import AppIcon from '../../../assets/images/AppIcon.png';

const styles = StyleSheet.create({
  appLogo: {
    width: 102,
    height: 102,
    margin: 'auto',
  },
  appLogoSm: {
    width: 48,
    height: 48,
    margin: 'auto',
  },
});

const Logo = ({ size }) => {
  const logoStyle = size === 'sm' ? styles.appLogoSm : styles.appLogo;
  return (
    <>
      <h1
        style={{
          fontFamily: 'sans-serif',
          fontSize: '7rem',
          margin: 0,
          width: 'fit-content',
          alignSelf: 'center'
        }}>
        🐟
      </h1>
    </>
  );
};

export default Logo;
