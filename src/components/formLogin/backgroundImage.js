//import liraries
import React, { Component } from 'react';
import { Image } from 'react-native';

// create a component
class BackgroundImage extends Component {
    render() {
        return (
            <Image source={require('./images/main_bg.jpg')}
                  style={{ flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
        }}>

                  {this.props.children}

            </Image>
        );
    }
}



//make this component available to the app
export default BackgroundImage;
