//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import CONFIG from "../config";
import BackgroundImage from './backgroundImage';

import MainSlalom from "./slalom/mainSlalom";
import MainSlide from "./slide/mainSlide";
import MainBasic from "./basic/mainBasic";
// create a component
class mainBook extends Component {
  render() {
    return (
      <BackgroundImage>
        <Container style={styles.con}>
         
          <Tabs style={{height:1}} renderTabBar={() => <ScrollableTab  />}>
            <Tab heading="Cơ bản" tabStyle={{backgroundColor: 'black', borderTopLeftRadius: 20, borderBottomLeftRadius: 20,borderWidth:2,borderColor:'white' }} activeTabStyle={{backgroundColor: 'blue', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 ,borderWidth:2,borderColor:'white'}} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }}>
              <MainBasic />
            </Tab>
            <Tab heading="Slide" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>
              <MainSlide />
            </Tab>
            <Tab heading="Slalom" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>
              <MainSlalom />
            </Tab>
            <Tab heading="Combo Slide" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>

            </Tab>
            <Tab heading="Combo Slalom" tabStyle={{backgroundColor: 'black', borderTopRightRadius: 20, borderBottomRightRadius: 20 ,borderWidth:2,borderColor:'white'}} activeTabStyle={{ backgroundColor: 'blue', borderTopRightRadius: 20, borderBottomRightRadius: 20 ,borderWidth:2,borderColor:'white'}} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }}>

            </Tab>
          </Tabs>
        </Container>
      </BackgroundImage>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  con:{
    backgroundColor:'transparent'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  tabStyle: { backgroundColor: 'black',borderWidth:2,borderColor:'white'}, 
  activeTabStyle: { backgroundColor: 'blue',borderWidth:2,borderColor:'white'}, 
  textStyle: { color: 'white' }, 
  activeTextStyle: { color: 'white' }

});

//make this component available to the app
export default mainBook;
