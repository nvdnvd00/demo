import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const FBSDK = require("react-native-fbsdk");
const { LoginManager } = FBSDK;

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  _login() {
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          alert("Login cancelled");
        } else {
          alert(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      },
      function(error) {
        alert("Login fail with error: " + error);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this._login()} >
          <Text>LOGIN FACEBOOK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
