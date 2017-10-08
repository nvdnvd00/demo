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
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return <Container>
        <Header style={styles.header} hasTabs>
          <Left>
            <Button transparent onPress={() => {
                this.props.navigation.navigate("DrawerOpen");
              }}>
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
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Tab1" style={styles.tab} />
          <Tab heading="Tab2" />
          <Tab heading="Tab3" />
          <Tab heading="Tab4" />
          <Tab heading="Tab5" />
        </Tabs>
      </Container>;
  }
}
const styles = StyleSheet.create({
  header: {
    height: 300,
    backgroundColor: "#404040"
  },
  tab: {
    height: 50,
    backgroundColor: "green"
  }
});
