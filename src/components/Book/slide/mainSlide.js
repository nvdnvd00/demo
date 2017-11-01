//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList,TouchableOpacity, ScrollView } from 'react-native';
import {  } from 'native-base';
import CONFIG from '../config';
import BackgroundImage from "../backgroundImage";
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';

// create a component
class mainSlide extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentWillMount() {
        fetch(CONFIG.API_URL + "/skill/slide")    
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
           data:responseJson})
          
        })
        .catch((error) => {
            console.error(error);
          });
    }
    
    render() {
        return (
            
           <View >
               {/* <AnimatedLinearGradient customColors={presetColors.instagram} speed={500}/> */}
                <ScrollView style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                
                    <FlatList
                    
                        data={this.state.data}
                        renderItem={({ item }) => 
                            <View>
                                
                                <View style={{ height: 10 }} ></View>
                                
                                <TouchableOpacity style={{borderWidth: 2, borderRadius: 20, borderColor: 'white',backgroundColor:'#4775d1'}} >
                                
                                    <Text style={{  color: 'white', fontSize: 20, fontFamily: "Crabmeal",left:20 }}>{item.name}</Text>
                                    <Text style={{  color: 'white', fontSize: 20, fontFamily: "Crabmeal",textAlign:'right',right:20 }}>{item.level}</Text>
                                </TouchableOpacity>
                            </View>
                        }                      
                        keyExtractor={item => item.id}
                    />

                   
                </ScrollView>
                </View>
                
        );
    }
}



//make this component available to the app
export default mainSlide;
