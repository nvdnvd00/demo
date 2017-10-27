//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MySkill from './mySkill';

// create a component
class mainPersonal extends Component {
    render() {
        return (
            <MySkill/>
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
export default mainPersonal;
