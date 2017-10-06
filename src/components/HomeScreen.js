import React, { Component, PropTypes } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


import MyStackNavigator from "./route";

export default class Home extends Component {
  constructor(props) {
    super(props);
   
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>

         <Text>WELCOME</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  
});
