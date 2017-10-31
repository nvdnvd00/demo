//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions,TouchableOpacity,Image } from 'react-native';

// create a component
class MenuHomeScreen extends Component {
    render() {
        return (
            <View style={styles.menu}>
                {/* <View style={styles.octagon}>
                    <View style={[styles.octagonUp, styles.octagonBar]} />
                    <View style={[styles.octagonFlat, styles.octagonBar]} />
                    <View style={[styles.octagonLeft, styles.octagonBar]} />
                    <View style={[styles.octagonRight, styles.octagonBar]} />
                </View> */}
                {/* button */}
                <View style={{ position: 'absolute', left: 40, backgroundColor: 'transparent' }}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}
                       >
                        <View style={{ justifyContent:'center',alignItems:'center', width: 60,height: 60,borderRadius: 40, borderColor: 'white', borderWidth: 5,backgroundColor: 'white' }}>
                            <Image style={{



                                width: 40,
                                height: 40,
                                

                            }}
                                source={require("./sidebar/images/book_btn.png")}
                            />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.text}>Cẩm nang</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    text: {
    fontFamily: "Crabmeal" ,
    color:'white',
    fontSize:25
  },
    menu: {
       
        position:'absolute',
        top: Dimensions.get("window").height /2-250,
        height: 530,
        width: Dimensions.get("window").width,
        backgroundColor: 'transparent',
    },
    octagon: {
        left: -150,
        position:'absolute'
        
    },
    octagonBar: {
      width: 210,  
      height: 500,
      backgroundColor: 'transparent'
    },
    octagonUp: {
        borderTopWidth:5,
        borderBottomWidth:5,
        borderColor:'white'
    },
    octagonFlat: {
      position: 'absolute',
      top: 0,
      left: 0,
      transform: [
        {rotate: '90deg'}
      ],
      borderTopWidth:5,
      borderColor:'white'
    },
    octagonLeft: {
      position: 'absolute',
      top: 0,
      left: 0,
      transform: [
        {rotate: '-45deg'}
      ],
      borderBottomWidth:5,
      borderColor:'white'
    },
    octagonRight: {
      position: 'absolute',
      top: 0,
      left: 0,
      transform: [
        {rotate: '45deg'}
      ],
      borderTopWidth:5,
      borderColor:'white'
    }
});

//make this component available to the app
export default MenuHomeScreen;
