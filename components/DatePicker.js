import React, { Component } from 'react';
import DatePickerElement from 'react-native-datepicker';

class DatePicker extends Component {
  render() {
    return (
      <DatePickerElement
        placeholder={this.props.title}
        onDateChange={(value) => { this.props.setTargetSelected(value); }}
        date={(this.props.targetSelected) ? this.props.targetSelected : ''}
        minDate={this.props.minDate}
        style={{
          width: '100%',
          borderColor: 'transparent',
          shadowColor: '#A5A5A5',
          shadowOffset: {
            width: 0,
            height: 3
          },
          shadowRadius: 5,
          shadowOpacity: 0.5
        }}
        mode="date"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 5
          },
          dateInput: {
            borderWidth: 0,
            height: 45,
            backgroundColor: '#FFF',
            alignItems: 'flex-start',
            borderRadius: 5,
            paddingLeft: 45
          },
          placeholderText: {
            color: '#000',
            fontSize: 18
          },
          dateText: {
            color: '#000',
            fontSize: 18
          }
          // ... You can check the source to find the other keys.
        }}
        format="DD-MM-YYYY"
        cancelBtnText="Cancelar"
        confirmBtnText="Seleccionar"
        iconSource={require('../assets/img/calendar.png')}
      />
    );
  }
}

export default DatePicker;
