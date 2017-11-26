//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import YouTube from 'react-native-youtube';

// create a component
class detailClub extends Component {
    render() {
        var name =this.props.navigation.state.params.name;
        var avt =this.props.navigation.state.params.avt;
        var descrip  =this.props.navigation.state.params.descrip;
        var video =this.props.navigation.state.params.video;
        var fb =this.props.navigation.state.params.fb;
        var email =this.props.navigation.state.params.email;
        var sdt =this.props.navigation.state.params.sdt;
        return (
            <View style={styles.container}>
            <YouTube
            videoId={video}   // The YouTube video ID
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
            <View  style={styles.viewnameclub}>
                <Text style={styles.nameclub}>{name}</Text>
            </View>
            <ScrollView  style={styles.viewdes}>
                {descrip==null ? <Text style={styles.des}>No Description</Text> : <Text style={styles.des}>{descrip}</Text>}
                
            </ScrollView>
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
        backgroundColor: '#cce6ff',
    },
    nameclub:{
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
        
        
        width: Dimensions.get('window').width,
        backgroundColor:'white',
    },
});

//make this component available to the app
export default detailClub;
