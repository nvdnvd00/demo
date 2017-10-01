import React, { Component, PropTypes } from "react";
import {
  LoginButton,
  AccessToken,
  GraphRequestManager,
  GraphRequest
} from "react-native-fbsdk";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CONFIG from "./config";
import Home from "./HomeScreen";
import MyStackNavigator from "./route";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount() {}

  render() {
    return <View style={styles.container}>
        <LoginButton readPermissions={["public_profile","email",]} onLoginFinished={(error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                let accessToken = data.accessToken;
                {
                  /* alert(accessToken.toString()); */
                }

                const responseInfoCallback = (error, result) => {
                  if (error) {
                    console.log(error);
                    alert("Error fetching data: " + error.toString());
                  } else {
                    fetch(CONFIG.API_URL + "/users", {
                      method: "post",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        id: result.id,
                        name: result.name,
                        email: result.email,
                        avatar: result.avatar
                      })
                    })
                      .then(response => response.json())
                      .then(res => {
                        if (res.success === true) {
                          
                        }
                      });
                  }
                  this.props.navigation.navigate("HomeScreen");
                };
                const infoRequest = new GraphRequest("/me", { accessToken: accessToken, parameters: { fields: { string: "id,email,name,picture.type(large)" } } }, responseInfoCallback);

                // Start the graph request.
                new GraphRequestManager().addRequest(infoRequest).start();
              });
            }
          }} onLogoutFinished={() => alert("logout.")} />
      </View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
