import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PlayerHUD from './PlayerHUD'
import Script from 'react-load-script'
import { WebView } from 'react-native';

export default class Player extends Component {
  handleScriptCreate() {
    this.player = new SambaPlayer("player", { //player é o ID do elemento html que ele vai inserir o iframe
      height: 360,
      width: 640,
      ph: "f8a0041cfa9b4783095c333892184a65",//Player Hash do projeto
      m: "a635b94483d1d527d36545fd31437299",//MidiaID
      playerParams: { //Veja a lista de Parâmetros suportados
        enableShare: true
      },
      events: { //Funcoes que escutam os eventos do player
        "onLoad": "eventListener", //Sendo que eventListener deve ser uma função já presente na página
        "onStart": "eventListener",
        "onFinish": "eventListener"
      }
    });
  }

  handleScriptError() {
    this.setState({ scriptError: true })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

  render() {
    return (
      <View style={styles.container}>
        <Script
          url="https://player.sambatech.com.br/v3/samba.player.api.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
          attributes={{'samba-player-api': 'player'}}
        />
        <WebView
          originWhitelist={['*']}
          source={{ html: '<h1>Hello World</h1><div id="player"></div>' }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});
