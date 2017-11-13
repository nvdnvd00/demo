//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube';

// create a component
class detailsSkill extends Component {
    constructor(props) { super(props) }
    render() {
        var name =this.props.navigation.state.params.url;
        return (
            <View style={styles.container}>
                <YouTube
                videoId={name}   // The YouTube video ID
                apiKey='AIzaSyBJGlWw5ceWMs2z692aDTcyfwvyHKUQ_CI'
                play={true}             // control playback of video with true/false
                fullscreen={false}       // control whether the video should play in fullscreen or inline
                loop={true}             // control whether the video should loop when ended
               
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
               
                style={{ alignSelf: 'stretch', height: 300 }}
              />
                <Text>{name}</Text>
            </View>
        );
    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default detailsSkill;
