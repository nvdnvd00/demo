//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs,ScrollableTab } from 'native-base';

// create a component
class mainSlide extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>mainSlide</Text>
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
export default mainSlide;
