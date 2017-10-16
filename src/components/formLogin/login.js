//import liraries
import React, { Component } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Container, Input, Text, Button } from 'native-base';

import BackgroundImage from './backgroundImage';

// create a component
class formLogin extends Component {
    render() {
        return (
            <BackgroundImage>
            <Container style={styles.container}>

                <View style={{ height: 50 }}>
                    <Input style={styles.input} placeholder="Tên đăng nhập" />
                </View>
                <View style={{ height: 10 }}></View>
                <View style={{ height: 50 }}>
                    <Input style={styles.input} placeholder="Mật khẩu" />
                </View>
                
                <View style={{ height: 10 }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <Button rounded style={{ alignSelf: 'center' }}>
                        <Text style={{ width: 150, textAlign: 'center', fontWeight: 'bold' }}>Đăng nhập</Text>

                    </Button>
                    <View style={{ width: 10 }}></View>
                    <Button rounded danger style={{ alignSelf: 'center' }} onPress={() => { this.props.navigation.goBack() }}>
                        <Text style={{ width: 150, textAlign: 'center', fontWeight: 'bold' }}>Hủy</Text>
                    </Button>
                </View>

            </Container>
            </BackgroundImage>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    input: {
        backgroundColor: 'white', borderRadius: 30, width: 300, textAlign: 'center'

    }


});

//make this component available to the app
export default formLogin;
