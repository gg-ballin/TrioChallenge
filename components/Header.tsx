import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

const Header = () => {
  const logo = require('../assets/logo.png');
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} resizeMode="contain" />
      </View>
      <View style={styles.separator} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    width: Dimensions.get('screen').width,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    height: 2,
    backgroundColor: '#E5E5E5',
    shadowOpacity: 0.6,
    shadowRadius: 16.0,
  },
});
export default Header;
