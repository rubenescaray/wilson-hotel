import React, { Component } from 'react';
import { TextInput } from 'react-native';

class TextAreaElement extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        style={{ backgroundColor: '#FFF', width: '100%', borderRadius: 5, height: 100, borderColor: 'transparent', shadowColor: '#A5A5A5', shadowOffset: { width: 0, height: 3 }, shadowRadius: 5, shadowOpacity: 0.5, fontSize: 16 }}
        multiline
        placeholder={this.props.title}
        underlineColorAndroid='transparent'
        numberOfLines={4}
        editable
        maxLength={225}
      />
    );
  }
}

export default TextAreaElement;
