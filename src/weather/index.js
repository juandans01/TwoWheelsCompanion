import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

export default class WeatherView extends React.Component {


  componentWillMount(){
    this.fetchWeather()
  }

  fetchWeather = async() => { 
    //FIXME TESTING SHIT
    res = await axios.get("http://samples.openweathermap.org/data/2.5/forecast?lat=12&lon=100&appid=8b30e2394e747a45ac4502151b65495f")
    // console.log(res.data.city)
    const city = res.data
    console.log(city)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>on Weather</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
  },
});
