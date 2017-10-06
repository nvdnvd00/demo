import React, { Component, PropTypes } from "react";
import {
  LoginButton,
  AccessToken,
  GraphRequestManager,
  GraphRequest,
  LoginManager
} from "react-native-fbsdk";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Thumbnail,
  Button
} from "native-base";
import CONFIG from "../config";
import { connect } from "react-redux";

class CustomDrawerContentComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    LoginManager.logOut();
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Content>
            {this.props.myUser_avatar !== "" ? (
              <Thumbnail
                style={styles.avatar}
                large
                source={{ uri: this.props.myUser_avatar }}
              />
            ) : (
              <Thumbnail
                style={styles.avatar}
                large
                source={require("./images/avatarUnknown.png")}
              />
            )}
            {this.props.myUser_name !== "" ? (
              <Text style={styles.username}>{this.props.myUser_name}</Text>
            ) : (
              <Text style={styles.username}>USER</Text>
            )}
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
                            "Lỗi khi lấy dữ liệu từ facebook: " +
                              error.toString()
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
                                this.props.dispatch({
                                  type: "SAVE_ID",
                                  user_id: result.id
                                });
                                this.props.dispatch({
                                  type: "SAVE_NAME",
                                  user_name: result.name
                                });
                                this.props.dispatch({
                                  type: "SAVE_AVATAR",
                                  user_avatar: result.picture.data.url
                                });
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
                  this.props.dispatch({ type: "SAVE_ID", user_id: "" });
                  this.props.dispatch({
                    type: "SAVE_NAME",
                    user_name: "USER"
                  });
                  this.props.dispatch({
                    type: "SAVE_AVATAR",
                    user_avatar: ""
                  });
                }}
              />
            </View>
          </Content>
        </Header>

        <Content>
          <List>
            <Button
              transparent
              dark
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}
            >
              <Icon name="home" />
              <Text style={styles.text}>Trang chủ</Text>
            </Button>

            {this.props.myUser_id !== "" ? (
              <Button
                transparent
                dark
                onPress={() => {
                  this.props.navigation.navigate("HomeScreen");
                }}
              >
                <Icon name="home" />
                <Text style={styles.text}>Cá nhân</Text>
              </Button>
            ) : null}

            <Button
              transparent
              dark
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}
            >
              <Icon name="unlock" />
              <Text style={styles.text}>Kĩ thuật cơ bản</Text>
            </Button>
            <Button
              transparent
              dark
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}
            >
              <Icon name="star" />
              <Text style={styles.text}>Kĩ thuật nâng cao</Text>
            </Button>
            <Button
              transparent
              dark
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}
            >
              <Icon name="home" />
              <Text style={styles.text}>Hội nhóm</Text>
            </Button>
            <Button
              transparent
              dark
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}
            >
              <Icon name="home" />
              <Text style={styles.text}>Góc tư vấn</Text>
            </Button>
            <Button
              transparent
              dark
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}
            >
              <Icon name="heart" />
              <Text style={styles.text}>Liên hệ</Text>
            </Button>
          </List>
        </Content>
        <Footer style={styles.footer}>
          <Text style={styles.footer_text}>Ver 1.0</Text>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 150,
    backgroundColor: "#404040"
  },
  avatar: {
    alignSelf: "center",
    top: 7,
    borderWidth: 3,
    borderColor: "#FFF"
  },
  username: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
    padding: 7
  },
  buttonLoginfb: {
    alignSelf: "center"
  },
  footer: {
    height: 30,
    backgroundColor: "#404040"
  },
  footer_text: {
    fontFamily: "carbon bl",
    color: "white"
  },
  text: {
    fontFamily: "Crabmeal"
  }
});
function mapStateToProps(state) {
  return {
    myUser_id: state.user_id,
    myUser_name: state.user_name,
    myUser_avatar: state.user_avatar
  };
}
export default connect(mapStateToProps)(CustomDrawerContentComponent); //connect redux to component
