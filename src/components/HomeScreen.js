import React, { Component, PropTypes } from "react";
import {
  LoginButton,
  AccessToken,
  GraphRequestManager,
  GraphRequest
} from "react-native-fbsdk";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


import MyStackNavigator from "./route";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
{/*         <LoginButton
          readPermissions={["public_profile", "email"]}
          onLoginFinished={(error, result) => {
            if (error) {
              alert("Lỗi đăng nhập " + result.error);
            } else if (result.isCancelled) {
              alert("Đã hủy đăng nhập");
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                let accessToken = data.accessToken;
                const responseInfoCallback = (error, result) => {
                  if (error) {
                    console.log(error);
                    alert("Error fetching data: " + error.toString());
                  } else {
                    fetch(CONFIG.API_URL + "/users/login", {
                      method: "post",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        id: result.id,
                        name: result.name,
                        email: result.email,
                        avatar: result.picture.data.url
                      })
                    })
                      .then(response => response.json())
                      .then(res => {
                        if (res.success === true) {
                        }
                      });
                  }
                };
                const infoRequest = new GraphRequest(
                  "/me",
                  {
                    accessToken: accessToken,
                    parameters: {
                      fields: { string: "id,email,name,picture.type(large)" }
                    }
                  },
                  responseInfoCallback
                );
                new GraphRequestManager().addRequest(infoRequest).start();
              });
            }
          }}
          onLogoutFinished={() => alert("Đăng xuất thành công")}
        />  */}
         <Text>WELCOME</Text>
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
  }
});
