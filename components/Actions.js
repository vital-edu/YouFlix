import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default class Actions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button style={{flex: 1}} title='A'/>
        <Button style={{flex: 1}} title='B'/>
        <Button style={{flex: 1}} title='C'/>
        <Button style={{flex: 1}} title='D'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  }
})
