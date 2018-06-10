import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';

const IMAGES = {
  image1: require('../assets/img/nombre.png'),
  image2: require('../assets/img/correo.png'),
  image3: require('../assets/img/telefono.png')
};

class TextInputElement extends Component {
  getImg() {
    return IMAGES['image' + this.props.img];
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 45,
          borderColor: 'transparent',
          shadowColor: '#A5A5A5',
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 5,
          shadowOpacity: 0.5,
          backgroundColor: '#FFF',
          borderRadius: 5,
        }}
      >
        <Image
          source={this.getImg()}
          style={{
            width: 32,
            height: 32,
            marginLeft: 5,
            marginRight: 8,
          }}
        />
        <TextInput
          {...this.props}
          style={{ fontSize: 16, paddingLeft: 0, width: '87%' }}
          placeholder={this.props.title}
          underlineColorAndroid='transparent'
          editable
          maxLength={50}
        />
      </View>
    );
  }
}

export default TextInputElement;
