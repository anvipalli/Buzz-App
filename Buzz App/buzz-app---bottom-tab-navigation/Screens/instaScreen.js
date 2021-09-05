import React from 'react';
import { Text, View, Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Searchscreen extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={require('../assets/insta.png')}
          style={{
            width: '70',
            height: '70'
          }}
        />
        <View>
          {' '}
          <AppHeader />{' '}
        </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
          <Image
            source={require('../assets/insta.png')}
            style={{
              marginTop: 150,
              width: 70,
              height: 70,
            }}
          />
          <Text style={{ textAlign: 'center', fontSize: 30 }}> Instagram </Text>
        </View>
      </View>
    );
  }
}