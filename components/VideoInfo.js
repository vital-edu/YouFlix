import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

const VideoInfo = props => (
  <View style={styles.container}>
    <View style={styles.videoInfo}>
      <Text style={styles.title}>
        {props.title}
      </Text>
      <View style={styles.stats}>
        <View style={styles.imageWithText}>
          <Image
            source={require('./img/views.png')}
            style={styles.icon}
          />
          <Text style={styles.iconText}>{props.views}</Text>
        </View>
        <View style={styles.imageWithText}>
          <Image
            source={require('./img/likes.png')}
            style={[styles.icon, styles.likes]}
          />
          <Text style={styles.iconText}>{props.likes}</Text>
        </View>
      </View>
    </View>
    <View>
      <View styles={{ backgroundColor: 'blue' }}></View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fbfd',
  },
  videoInfo: {
    flex: 1,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    paddingTop: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    paddingBottom: 10,
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
  },
  imageWithText: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginRight: 15,
  },
  iconText: {
    flex: 0,
    alignSelf: 'baseline',
  },
  icon: {
    alignSelf: 'center',
    marginRight: 5,
    height: 18,
    width: 18,
  },
  likes: {
    height: 14,
    width: 14,
  }
});

export default VideoInfo
