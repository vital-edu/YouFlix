import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

const VideoInfo = props => (
  <View style={styles.container}>
    <View style={styles.box}>
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
    <View style={[styles.box, styles.imageWithText, styles.authorInfo]}>
      <Image
        source={{uri: props.author.photo}}
        style={styles.photo}
      />
      <Text style={styles.authorName}>{props.author.name}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#f8fbfd',
  },
  box: {
    flex: 0,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
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
  },
  stats: {
    marginTop: 10,
    flexDirection: 'row',
  },
  imageWithText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginRight: 15,
  },
  iconText: {
    flex: 0,
    alignSelf: 'center',
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
  },
  authorInfo: {
    alignSelf: 'stretch'
  },
  photo: {
    marginRight: 10,
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  authorName: {
    flex: 0,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default VideoInfo
