import React, { Component, PropTypes } from "react";
import {
  LoginButton,
  AccessToken,
  GraphRequestManager,
  GraphRequest,
  LoginManager
} from "react-native-fbsdk";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CONFIG from "./config";
import { connect } from "react-redux";
import { saveUserId } from "../redux/action";

class CustomDrawerContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fb_id: "",
      fb_name: "USER",
      fb_avatar: ""
    };
  }

  componentDidMount() {
    LoginManager.logOut();
  }

  render() {
    return (
      /* View bao trum */

      <View style={styles.container}>
        {/*  View info User */}
        <View style={styles.infoUser}>
          {/* View avatar (absolute) */}
          <View style={styles.avatar}>
            {this.state.fb_avatar !== "" ? (
              <Image
                source={{ uri: this.state.fb_avatar }}
                style={styles.image_avatar}
              />
            ) : (
              <Image
                source={require("../images/avatarUnknown.png")}
                style={styles.image_avatar}
              />
            )}
          </View>
          <View style={styles.user_name}>
            <Text style={{ fontWeight: "bold" }}> {this.state.fb_name}</Text>
          </View>
          <View style={styles.buttonLoginfb}>
            <LoginButton
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
                        alert(
                          "Lỗi khi lấy dữ liệu từ facebook: " + error.toString()
                        );
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
                              //action khi có thông báo success từ sv trả về
                              this.setState({ fb_id: result.id });
                              this.setState({ fb_name: result.name });
                              this.setState({
                                fb_avatar: result.picture.data.url
                              });
                              //this.props.saveUserId(this.state.idd);
                            }
                          });
                      }
                    };
                    const infoRequest = new GraphRequest(
                      "/me",
                      {
                        accessToken: accessToken,
                        parameters: {
                          fields: {
                            string: "id,email,name,picture.type(large)"
                          }
                        }
                      },
                      responseInfoCallback
                    );

                    // Start the graph request.
                    new GraphRequestManager().addRequest(infoRequest).start();
                  });
                }
              }}
              onLogoutFinished={() => {
                this.setState({ fb_id: "" });
                this.setState({ fb_name: "USER" });
                this.setState({ fb_avatar: "" });
              }}
            />
          </View>
        </View>
        <View style={{ flex: 3 }}>
          
        </View>
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
  infoUser: {
    flex: 1,
    backgroundColor: "#F5F5"
  },
  avatar: {
    flex: 1,

    position: "absolute",
    alignSelf: "center"
  },
  image_avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFF"
  },

  user_name: {
    alignItems: "center",
    flex: 3,
    justifyContent: "flex-end"
  },
  buttonLoginfb: {
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center"
  }
});
function mapStateToProps(state) {
  return {
    myUserId: state.userId
  };
}
export default connect(mapStateToProps, { saveUserId })(
  CustomDrawerContentComponent
); //connect redux to component
