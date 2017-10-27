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
import formLogin from "../formLogin/login";

class CustomDrawerContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenn: "~"
    };
  }
  componentWillMount() {
    
    AccessToken.getCurrentAccessToken().then(data => {
      if (data == null) {
        return;
      }
      if (data !== undefined) this.setState({ tokenn: data.accessToken });
      const infoRequest_mount = new GraphRequest(
        "/me",
        {
          httpMethod: "GET",
          version: "v2.10",
          parameters: {
            fields: {
              string: "id,email,name,picture.type(large)"
            }
          },
          accessToken: this.state.tokenn
        },
        (err, result) => {
          if (err) {
            alert("lỗi");
          } else {
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
            this.props.dispatch({
              type:"CHANGE_LOGIN_STATUS" ,
              loginStatus: true
            });
          }
        }
      );
      new GraphRequestManager().addRequest(infoRequest_mount).start();
    });
  }

  /* _loginFb() {
    LoginManager.logInWithReadPermissions(["public_profile", "email"]);
    AccessToken.getCurrentAccessToken().then(data => {

      this.setState({ tokenn: data.accessToken });
      const infoRequest_mount = new GraphRequest(
        "/me",
        {
          httpMethod: "GET",
          version: "v2.10",
          parameters: {
            fields: {
              string: "id,email,name,picture.type(large)"
            }
          },
          accessToken: this.state.tokenn
        },
        (err, result) => {
          if (err) {
            alert("lỗi");
          } else {
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
        }
      );
      new GraphRequestManager().addRequest(infoRequest_mount).start();
    });
  } */

  render() {
    return <Container>
      <Header style={styles.header}>
        <Image style={{ position: "absolute", width: 220, height: 150 }} source={require("./images/sidebar_header_bg.png")} />
        <Content>
          {this.props.myUser_avatar !== "" ? <Thumbnail style={styles.avatar} large source={{ uri: this.props.myUser_avatar }} /> : <Thumbnail style={styles.avatar} large source={require("./images/avatarUnknown.png")} />}
          {this.props.myUser_name !== "" ? <Text style={styles.username}>
            {this.props.myUser_name}
          </Text> : <Text style={styles.username}>USER</Text>}
          <View style={styles.buttonLoginfb}>
            <LoginButton readPermissions={["public_profile", "email"]} onLoginFinished={(error, result) => {
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
                      alert("Lỗi khi lấy dữ liệu từ facebook: " + error.toString());
                    } else {
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
                      this.props.dispatch({
                        type: "CHANGE_LOGIN_STATUS",
                        loginStatus: true
                      });
                      
                      fetch(CONFIG.API_URL + "/user/login", {
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
                      });
                    }
                  };
                  const infoRequest = new GraphRequest("/me", { accessToken: accessToken, parameters: { fields: { string: "id,email,name,picture.type(large)" } } }, responseInfoCallback);

                  // Start the graph request.

                  new GraphRequestManager()
                    .addRequest(infoRequest)
                    .start();
                });
              }
            }} onLogoutFinished={() => {
              this.props.dispatch({ type: "SAVE_ID", user_id: "" });
              this.props.dispatch({
                type: "SAVE_NAME",
                user_name: "USER"
              });
              this.props.dispatch({
                type: "SAVE_AVATAR",
                user_avatar: ""
              });
              this.props.dispatch({
              type:"CHANGE_LOGIN_STATUS",
              loginStatus: false
            });
            }} />
          </View>
        </Content>
      </Header>

      <Content>
       
        <View style={{ paddingTop:20 ,flex: 1, flexDirection: 'row' }}>
          {this.props.myUser_id !== "" ? <View style={{ flex: 1 }}>
            <TouchableOpacity 
              onPress={() => {
                this.props.navigation.navigate("mainPersonalScreen");
              }}>
              <Image style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                alignSelf: 'center'
              }}
                source={require("./images/user_btn.png")}
              />
              <Text style={styles.text}>Hồ sơ</Text>
            </TouchableOpacity>
          </View> : null}

          <View style={{ flex: 1 }}>
            <TouchableOpacity 
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}>
              <Image style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                alignSelf: 'center'
              }}
                source={require("./images/home_btn.png")}
              />
              <Text style={styles.text}>Trang chủ</Text>
            </TouchableOpacity>
          </View>
        </View>



        <View style={{ paddingTop:20,flex: 1, flexDirection: 'row' }}>
         <View style={{ flex: 1 }}>
            <TouchableOpacity 
              onPress={() => {
                this.props.navigation.navigate("mainBookScreen");
              }}>
              <Image style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                alignSelf: 'center'
              }}
                source={require("./images/book_btn.png")}
              />
              <Text style={styles.text}>Cẩm nang</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}>
              <Image style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                alignSelf: 'center'
              }}
                source={require("./images/club_btn.png")}
              />
              <Text style={styles.text}>CLB</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={{ paddingTop:20,flex: 1, flexDirection: 'row' }}>
         <View style={{ flex: 1 }}>
            <TouchableOpacity 
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}>
              <Image style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                alignSelf: 'center'
              }}
                source={require("./images/chat_btn.png")}
              />
              <Text style={styles.text}>Trò chuyện</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}>
              <Image style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                alignSelf: 'center'
              }}
                source={require("./images/ask_btn.png")}
              />
              <Text style={styles.text}>Tư vấn</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingTop:20,flex: 1, flexDirection: 'row' }}>
         <View style={{ flex: 1 }}>
            <TouchableOpacity 
              onPress={() => {
                this.props.navigation.navigate("HomeScreen");
              }}>
              <Image style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                alignSelf: 'center'
              }}
                source={require("./images/sale_btn.png")}
              />
              <Text style={styles.text}>Chợ trời</Text>
            </TouchableOpacity>
          </View>

          
        </View>


      </Content>
      {!this.props.myLogin_status? 
      <View style={styles.footer}>
        <Image style={{ position: "absolute", width: 220, height: 150 }} source={require("./images/sidebar_header_bg.png")} />
        <View style={{flex:1,justifyContent:'center'}}>
        <TouchableOpacity style={{borderWidth: 2,borderColor:"white",backgroundColor:'#2e2eb8',borderRadius:25,padding:5,margin:20}} onPress={ () => {this.props.navigation.navigate("formLoginScreen")}}>
          <Text style={{textAlign:'center',color:'white'}}>Đăng nhập</Text>
        </TouchableOpacity>
        </View>
        <View style={{flex:0.8,justifyContent:'center'}}>
        <TouchableOpacity style={{borderWidth: 2,borderColor:"white",backgroundColor:'grey',borderRadius:25,padding:5,margin:20}} onPress={() => { this.props.navigation.navigate("formRegisterScreen") }}>
          <Text style={{textAlign:'center',color:'white'}}>Đăng kí</Text>
        </TouchableOpacity>
        </View>
      </View>
:
      <View style={styles.footer}>
        <Image style={{ position: "absolute", width: 220, height: 150 }} source={require("./images/sidebar_header_bg.png")} />
        <View style={{flex:1,justifyContent:'center'}}>
        <TouchableOpacity style={{borderWidth: 2,borderColor:"white",backgroundColor:'grey',borderRadius:25,padding:5,margin:20}} onPress={ () => {this.props.navigation.navigate("formLoginScreen")}}>
          <Text style={{textAlign:'center',color:'white'}}>Đăng xuất</Text>
        </TouchableOpacity>
        </View>
       
      </View>}

    </Container>
  }

}



const styles = StyleSheet.create({
  header: {
    height: 150,
    //backgroundColor: "#404040"
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
    
    height: 100,
    backgroundColor: "#404040",
   
    
  },

  text: {
    fontFamily: "Crabmeal" ,
    textAlign:'center'
  }
});
function mapStateToProps(state) {
  return {
    myUser_id: state.user_id,
    myUser_name: state.user_name,
    myUser_avatar: state.user_avatar,
    myLogin_status: state.loginStatus
  };
}
export default connect(mapStateToProps)(CustomDrawerContentComponent); //connect redux to component

