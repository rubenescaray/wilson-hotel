import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking
} from 'react-native';
import { connect } from 'react-redux';
import { footerLinks } from '../actions/';

class Footer extends Component {
  componentWillMount() {
    this.props.footerLinks();
  }

  render() {
    const { Facebook, Twitter, Instagram, Web } = this.props;
    console.log(this.props)
    return (
      <View style={styles.banner}>
        <TouchableOpacity onPress={() => Linking.openURL(Facebook.url)}>
          <Image source={require('../assets/img/facebook.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(Twitter.url)}>
          <Image source={require('../assets/img/twitter.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(Instagram.url)}>
          <Image source={require('../assets/img/instagram.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(Web.url)}>
          <Image source={require('../assets/img/web.png')} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#C20000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  footerIcon: {
    width: 35,
    height: 35,
  },
});

const mapStateToProps = ({ footer }) => {
  const { Facebook, Twitter, Instagram, Web } = footer;

  return {
    Facebook,
    Twitter,
    Instagram,
    Web
  };
};

export default connect(mapStateToProps, { footerLinks })(Footer);
