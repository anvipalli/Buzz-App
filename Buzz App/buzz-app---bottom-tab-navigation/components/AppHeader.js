import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>  Social Buzz </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'turquoise',
  },
  text:{
    color: 'white',
    padding: 10,
    fontSize: 25,
    textAlign: 'center',
  }
});

export default AppHeader;