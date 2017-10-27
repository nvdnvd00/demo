//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux';


// create a component
class mainBasic extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View>
            
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

function mapStateToProps(state) {
    return{
        myUser_id: state.user_id
    }
    
}

//make this component available to the app
export default connect(mapStateToProps)(mainBasic); //connect redux to component
