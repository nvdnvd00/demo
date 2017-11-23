//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import YouTube from 'react-native-youtube';

// create a component
class detailsSkill extends Component {
    constructor(props) { super(props) }
    render() {
        var url =this.props.navigation.state.params.url;
        var name =this.props.navigation.state.params.name;
        var des =this.props.navigation.state.params.des;
        return (
            <View style={styles.container}>
                <YouTube
                videoId={url}   // The YouTube video ID
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
                <View  style={styles.viewnameskill}>
                    <Text style={styles.nameskill}>{name}</Text>
                </View>
                <View  style={styles.viewdes}>
                    {des==null ? <Text style={styles.des}>No Description</Text> : <Text style={styles.des}>{des}</Text>}
                    
                </View>
            </View>
        );
    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    nameskill:{
        fontSize: 25,
        alignSelf: 'center',
        color:'blue'
       
    },
    viewnameskill:{
        justifyContent:'center',
        height: 50,
        width: Dimensions.get('window').width,
        backgroundColor:'white',
    },
    des:{
        fontSize: 20,
        alignSelf: 'center'
       
    },
    viewdes:{
        
        height: 500,
        width: Dimensions.get('window').width,
        backgroundColor:'white',
    },
});

//make this component available to the app
export default detailsSkill;
