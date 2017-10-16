//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';

// create a component
class MenuHomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MenuHomeScreen</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top: Dimensions.get("window").height /4,
        height: Dimensions.get("window").width,
        width: null,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
});

//make this component available to the app
export default MenuHomeScreen;
