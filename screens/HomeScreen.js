import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  inputToState,
  fetchHotels,
  fetchCantidad,
  fetchTipos,
  fetchHotelEmail
} from '../actions';

import DatePicker from '../components/DatePicker';
import TextArea from '../components/TextArea';
import Select from '../components/Select';

//first screen of the app

class HomeScreen extends Component {

  //functions

  //function calling action to input hotel selected into the state of the store object
  setHotelSelected = (value) => {
    this.props.inputToState({
      prop: 'hotelSelected',
      value
    });
  }

  //function calling action to input date of admission selected into the state of the store object
  setFechaInSelected = (value) => {
    this.props.inputToState({
      prop: 'dateInSelected',
      value
    });
  }

  //function calling action to input leaving date into the state of the store object
  setFechaOutSelected = (value) => {
    this.props.inputToState({
      prop: 'dateOutSelected',
      value
    });
  }

  
  setCantidadSelected = (value) => {
    this.props.inputToState({
      prop: 'cantidadSelected',
      value
    });
  }

  setTipoSelected = (value) => {
    this.props.inputToState({
      prop: 'tipoSelected',
      value
    });
  }

  setHotelCorreoSelected = (value) => {
    this.props.inputToState({
      prop: 'correoHotelSelected',
      value
    })
  }

  validateFields = () => {
    const { hotelSelected } = this.props
    if (hotelSelected == '' || this.props.dateInSelected == '' || this.props.dateOutSelected == '' || 
            this.props.cantidadSelected == '' || this.props.tipoSelected == '') {
          return Alert.alert(
                'Advertencia',
                'Por favor, llenar todos los campos obligatorios',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        }
    this.props.fetchHotelEmail(hotelSelected);
    this.props.navigation.navigate('Send');
  } 

  render() {
    console.log('*******');
    console.log(this.props);
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
          Ingrese datos de la reserva
        </Text>

        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ paddingBottom: 15 }}>
            <Select
              renderData={this.props.fetchHotels}
              setTargetSelected={this.setHotelSelected}
              target={this.props.hotels}
              targetSelected={this.props.hotelSelected}
              title='Selecciona el Hotel'
              img='1'
            />
          </View>

          <View style={{ paddingBottom: 15 }}>
            <DatePicker
              setTargetSelected={this.setFechaInSelected}
              targetSelected={this.props.dateInSelected}
              title="Fecha de Entrada"
              minDate={moment().format('DD-MM-YYYY')}
            />
          </View>

          <View style={{ paddingBottom: 15 }}>
            <DatePicker
              setTargetSelected={this.setFechaOutSelected}
              targetSelected={this.props.dateOutSelected}
              title="Fecha de Salida"
              minDate={
                (this.props.dateInSelected)
                  ? moment(this.props.dateInSelected, 'DD-MM-YYYY').add(1, 'day')
                  : moment().add(1, 'day')
              }
            />
          </View>

          <View style={{ paddingBottom: 15 }}>
            <Select
              renderData={this.props.fetchCantidad}
              setTargetSelected={this.setCantidadSelected}
              target={this.props.cantidades}
              targetSelected={this.props.cantidadSelected}
              title='Cantidad de Habitaciones'
              img='2'
            />
          </View>

          <View style={{ paddingBottom: 15 }}>
            <Select
              renderData={this.props.fetchTipos}
              setTargetSelected={this.setTipoSelected}
              target={this.props.tipos}
              targetSelected={this.props.tipoSelected}
              title='Tipo de Habitaciones'
              img='3'
            />
          </View>

          <View style={{ paddingBottom: 25 }}>
            <TextArea title="   Comentarios (Opcional)" />
          </View>

          <Button
            title={'Continuar'}
            containerViewStyle={{ borderRadius: 10, marginBottom: 25 }}
            textStyle={styles.title}
            buttonStyle={{ borderRadius: 10 }}
            backgroundColor='#C20000'
            raised
            onPress={this.validateFields}
          />
        </View>
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
})(HomeScreen);
