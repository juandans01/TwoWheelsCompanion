import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherView from './src/weather'

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>      
        <WeatherView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#fff'
  },
});
