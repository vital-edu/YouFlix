import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PlayerHUD from './PlayerHUD'

export default class Player extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PlayerHUD/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  }
});
