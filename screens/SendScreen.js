import React, { Component } from 'react';
import _ from 'lodash';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import firebase from 'firebase';

import {
  inputToState,
  fetchHotels,
  fetchHotelEmail,
  fetchCantidad,
  fetchTipos,
} from '../actions';


import TextInput from '../components/TextInput';

class SendScreen extends Component {
  constructor(){
    super()
    this.state = {
      nombre: '',
      correo: '',
      telefono: '',
      correoHotel: '',
    }
  }

  componentWillMount(){
    firebase.database().ref().child('/Hoteles').orderByChild('name').equalTo(this.props.hotelSelected)
    .on('value', function(snapshot) {
      console.log('CORREO DEL HOTEL = ' + snapshot.val().email)
    }) 
  }

  sendMail = () => {
    if (this.state.nombre == '' || this.state.correo == '' || this.state.telefono == '') { 
      return Alert.alert(
            'Advertencia',
            'Por favor, llenar todos los campos obligatorios',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }
    fetch('http://hotelintegracion.com/wilson/sendEmail.php', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo1: this.state.correo,
        correo2: this.props.correoHotelSelected,
        hotelSelected: this.props.hotelSelected,
        dateInSelected: this.props.dateInSelected,
        dateOutSelected: this.props.dateOutSelected,
        tipoSelected: this.props.tipoSelected,
        cantidadSelected: this.props.cantidadSelected,
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
        }).then(Alert.alert(
            'Exito',
            'Su reserva ha sido guardada!',
            [
              {text: 'OK', onPress: () => console.log('Reserva guardada')},
            ],
            { cancelable: false }
          ))
        .catch((error) => {
          console.warn(error);
        })
        .done();
  }

  render() {
    return (
      <ScrollView>
        <Text
          style={[
            styles.title,
            {
              color: '#505050',
              fontSize: 20,
              padding: 10
            }
          ]}
        >
          Confirmación del proceso
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#505050',
            lineHeight: 20,
            fontSize: 15,
            paddingHorizontal: 10,
            paddingBottom: 20
          }}
        >
          Ingrese su correo electrónico para validar su información y continuar con la pre-reservación.
          {this.state.correoHotel}
        </Text>

        <View style={{ paddingHorizontal: 20, paddingBottom: 15 }}>
          <TextInput
            title="Nombre Completo"
            onChangeText={(nombre) => this.setState({nombre})}
            img="1"
          />
        </View>

        <View style={{ paddingHorizontal: 20, paddingBottom: 25 }}>
          <TextInput
            title="Correo Electrónico"
            img="2"
            onChangeText={(correo) => this.setState({correo})}
          />
        </View>

        <View style={{ paddingHorizontal: 20, paddingBottom: 25 }}>
          <TextInput
            title="Telefono"
            img="3"
            onChangeText={(telefono) => this.setState({telefono})}
          />
        </View>

        <Button
          title={'Enviar'}
          containerViewStyle={{ borderRadius: 10 }}
          textStyle={{ textAlign: 'center', fontWeight: 'bold' }}
          buttonStyle={{ borderRadius: 10 }}
          backgroundColor='#C20000'
          raised
          onPress={this.sendMail}
        />
        <Button
          title={'Cancelar'}
          containerViewStyle={{ borderRadius: 10, marginTop: 10 }}
          textStyle={styles.title}
          buttonStyle={{ borderRadius: 10 }}
          backgroundColor='#C20000'
          raised
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

function mapStateToProps({ home }) {
  const {
    hotels,
    hotelSelected,
    correoHotelSelected,
    dateInSelected,
    dateOutSelected,
    cantidad,
    cantidadSelected,
    tipo,
    tipoSelected,
  } = home;

  const hotelsToArray = _.map(hotels, (val) => {
    return { ...val };
  });

  const cantidades = _.map(cantidad, (val) => {
    return { ...val };
  });

  const tipos = _.map(tipo, (val) => {
    return { ...val };
  });

  return {
    hotels: hotelsToArray,
    hotelSelected,
    correoHotelSelected,
    dateInSelected,
    dateOutSelected,
    cantidades,
    cantidadSelected,
    tipos,
    tipoSelected,
  };
}

export default connect(mapStateToProps, {
  inputToState,
  fetchHotels,
  fetchHotelEmail,
  fetchCantidad,
  fetchTipos,
})(SendScreen);
