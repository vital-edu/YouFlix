import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Player from './components/Player'
import VideoInfo from './components/VideoInfo'
import Playlist from './components/Playlist'
import { VIDEOS } from './data.js'

export default class App extends React.Component {

  render() {
    const currentVideo = VIDEOS[0]

    return (
      <View style={styles.container}>
        <Player videoUrl={currentVideo.url} />
        <VideoInfo
          title={currentVideo.title}
          views={currentVideo.views}
          likes={currentVideo.likes}
          author={currentVideo.author}
        />
        <Playlist
          videos={VIDEOS}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  }
});
