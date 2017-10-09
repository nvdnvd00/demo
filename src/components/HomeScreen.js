import React, { Component, PropTypes } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title
} from "native-base";
import { StyleSheet, Text, View, TouchableOpacity,Image,Dimensions } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Container>
        {/* background */}
        <Image style={{position:'absolute',width: Dimensions.get('screen').width,height:Dimensions.get('screen').height, opacity: 0.7 }}source={require('../images/main_bg.jpg')}/> 
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.navigate("DrawerOpen");
              }}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Click</Text>
            </Button>
          </Right>
        </Header>
        
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 40,
    backgroundColor: "transparent",
    borderRadius:50,
    marginTop:5, marginLeft: 5, marginRight: 5
  },
  tab: {
    height: 50,
    backgroundColor: "green"
  }
});
