import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import PlaylistItem from './PlaylistItem'

export default class Playlist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      done: 'no',
      casa: 0,
    }
  }

  _renderItem = ({ item }) => (
    <PlaylistItem
      id={item.id}
      title={item.title}
      image={item.url}
      url={item.url}
    />
  )

  _keyExtractor = (item) => item.id

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.box}
          data={this.props.videos}
          renderItem={this._renderItem}
          horizontal={true}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#f8fbfd',
  },
  box: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  }
});
