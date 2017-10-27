//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab, Left, Body, Right,Button, Icon,Title } from 'native-base';
import CONFIG from "../config";
import BackgroundImage from './backgroundImage';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';

import MainSlalom from "./slalom/mainSlalom";
import MainSlide from "./slide/mainSlide";
import MainBasic from "./basic/mainBasic";
// create a component
class mainBook extends Component {
  render() {
    return (
      <BackgroundImage>
        <Header>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.goBack() }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Cẩm nang</Title>
                    </Body>
                    {/* <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right> */}
                </Header>
        <Container style={styles.con}>
        <AnimatedLinearGradient customColors={presetColors.instagram} speed={500}/>
          <Tabs style={{height:1}} renderTabBar={() => <ScrollableTab  /> }>
          
            <Tab heading="Cơ bản" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>        
              <AnimatedLinearGradient customColors={presetColors.instagram} speed={500}/>
              <MainBasic />
            </Tab>
            <Tab heading="Slide" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>
              <AnimatedLinearGradient customColors={presetColors.instagram} speed={500}/>
              <MainSlide />
            </Tab>
            <Tab heading="Slalom" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>
              
              <AnimatedLinearGradient customColors={presetColors.instagram} speed={500}/>
              <MainSlalom />
            </Tab>
            <Tab heading="Combo Slide" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>
            <AnimatedLinearGradient customColors={presetColors.instagram} speed={500}/>
            {/* code */}
            </Tab>
            <Tab heading="Combo Slalom" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>
            <AnimatedLinearGradient customColors={presetColors.instagram} speed={500}/>
            {/* code */}
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
