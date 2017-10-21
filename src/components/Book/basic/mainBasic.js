//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
// create a component
class mainBasic extends Component {
    render() {
        return (
            <VideoPlayer
    source={{ uri: 'https://youtu.be/-2gCppPrdQo' }}
    navigator={ this.props.navigator }
/>
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
export default mainBasic;
