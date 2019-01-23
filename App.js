import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Player from './components/Player'
import { Constants } from 'expo'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Player/>
        {/* <View style={{flex:1, backgroundColor:"yellow"}}></View>
        <View style={{flex:1, backgroundColor:"blue"}}></View>
        <View style={{flex:1, backgroundColor:"orange"}}></View>
        <View style={{flex:1, backgroundColor:"purple"}}></View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  }
});
