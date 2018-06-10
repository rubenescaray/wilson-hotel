import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from './store';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import SendScreen from './screens/SendScreen';

export default class App extends React.Component {

  //firebase connection for getting the information of the hotels.
  componentWillMount() {
    console.disableYellowBox = true;
    //Datos de conexion del proyecto en Firebase anterior
    const config = {
      apiKey: 'AIzaSyConoiGXlNhkanBVxf6Pzg-V73wp9ocFR0',
      authDomain: 'wilson-hotel-33afe.firebaseapp.com',
      databaseURL: 'https://wilson-hotel-33afe.firebaseio.com',
      projectId: 'wilson-hotel-33afe',
      storageBucket: 'wilson-hotel-33afe.appspot.com',
      messagingSenderId: '832632416792'
    }; 
    //Datos de conexion del proyecto en Firebase actual
    const config2 = {
      apiKey: "AIzaSyDIcjfqYgjQs90qFKlmN-oByXPQiTA8ZeA",
      authDomain: "wilson-hotel-935ad.firebaseapp.com",
      databaseURL: "https://wilson-hotel-935ad.firebaseio.com",
      projectId: "wilson-hotel-935ad",
      storageBucket: "wilson-hotel-935ad.appspot.com",
      messagingSenderId: "111044379710"
    };
    firebase.initializeApp(config2);
  }

  render() {
    const MainNavigator = TabNavigator({
      Home: { screen: HomeScreen, },
      Send: { screen: SendScreen, },
    }, {
      initialRouteName: 'Home',
      swipeEnabled: false,
      animationEnabled: true,
      navigationOptions: {
        tabBarVisible: false,
      },
      lazy: true
    });
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
          <MainNavigator />
          <Footer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
});
