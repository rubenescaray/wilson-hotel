import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Header = () => (
  <View style={styles.banner}>
    <Image source={require('../assets/img/logo.png')} style={styles.imageCenter} />
  </View>
);

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#C20000',
    alignItems: 'center',
    padding: 10,
  },
  imageCenter: {
    width: SCREEN_WIDTH - 20,
    height: 60,
  },
});

export default Header;
