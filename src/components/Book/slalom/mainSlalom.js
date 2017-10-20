//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Container, Header, Tab, Tabs,ScrollableTab } from 'native-base';


// create a component
class mainSlalom extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentWillMount() {
        /* fetch(CONFIG.API_URL + "/user") */
        fetch("https://randomuser.me/api/?results=3")
        
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
           data:responseJson.results})
          
        })
        .catch((error) => {
            console.error(error);
          });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item})=> <Text>{item.name.first} {item.name.last}</Text>}
                    keyExtractor={(x,i)=>i }
                >

                </FlatList>
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
export default mainSlalom;
