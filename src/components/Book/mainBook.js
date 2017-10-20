//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs,ScrollableTab } from 'native-base';
import CONFIG from "../config";

import MainSlalom from "./slalom/mainSlalom";
import MainSlide from "./slide/mainSlide";
import MainBasic from "./basic/mainBasic";
// create a component
class mainBook extends Component {
    render() {
        return (
          <Container>
            <Header hasTabs/>
            <Tabs renderTabBar={()=> <ScrollableTab />}>
              <Tab heading="Cơ bản">
                <MainBasic/>
              </Tab>
              <Tab heading="Slide">
               <MainSlide/>
              </Tab>
              <Tab heading="Slalom">
              <MainSlalom/>
              </Tab>
              <Tab heading="...">
               
              </Tab>
              <Tab heading="...">
              
              </Tab>
            </Tabs>
          </Container>
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
export default mainBook;
