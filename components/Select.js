import React, { Component } from 'react';
import { View, Image, Platform, StatusBar } from 'react-native';

import { Icon } from 'react-native-elements';
import { Select, Option } from 'react-native-chooser';

const IMAGES = {
  image1: require('../assets/img/hotel.png'),
  image2: require('../assets/img/habitaciones.png'),
  image3: require('../assets/img/tipos.png'),
};

class SelectElement extends Component {
  componentWillMount() {
    this.props.renderData();
  }

  getImg() {
    return IMAGES['image' + this.props.img];
  }

  renderOption() {
    if (this.props.target) {
      return this.props.target.map((n, i) => {
        return (
          <Option
            key={i}
            value={n.name}
            style={{ borderBottomWidth: 1 }}
            styleText={{ fontSize: 25 }}
          >
            {n.name}
          </Option>
        );
      });
    }

    return {};
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
        <Select
          defaultText={this.props.title}
          selected={(this.props.targetSelected) ? this.props.targetSelected : ''}
          onSelect={(value) => { this.props.setTargetSelected(value); }}
          style={{
            borderWidth: 0,
            padding: 0,
            width: '100%',
          }}
          textStyle={{
            color: '#000',
            fontSize: 18,
            width: '93%',
          }}
          backdropStyle={{}}
          optionListStyle={{
            flex: 1,
            width: '100%',
            marginTop: Platform.OS === 'ios' ? 20 : 0,
          }}
        >
          {this.renderOption()}
        </Select>
        <Icon
          name='arrow-drop-down'
          color='#C20000'
          style={{ position: 'absolute', right: 10, }}
        />
      </View>
    );
  }
}

export default SelectElement;
