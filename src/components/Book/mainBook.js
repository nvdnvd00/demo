//import liraries
import React, { Component } from 'react';
import { View,  StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab,TabHeading, Left, Body, Right,Button, Icon,Title,Text } from 'native-base';
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
          <Tabs>
            <Tab heading={<TabHeading><Icon name="pulse" /><Text>Cơ bản</Text></TabHeading>}>
              <MainBasic />
            </Tab>
            <Tab heading={<TabHeading><Text>Slalom</Text></TabHeading>}>
            <MainSlalom />
            </Tab>
            <Tab heading={<TabHeading><Icon name="apps" /><Text>Slide</Text></TabHeading>}>
            <MainSlide />
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
