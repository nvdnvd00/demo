import React, { Component } from "react";
import { StackNavigator, DrawerNavigator, DrawerItems } from "react-navigation";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button
} from "react-native";
import CONFIG from "./config";
import {
  LoginButton,
  AccessToken,
  GraphRequestManager,
  GraphRequest
} from "react-native-fbsdk";

import Home from "./HomeScreen";
import formRegister from "./formLogin/register";
import formLogin from "./formLogin/login"
import CustomDrawerContentComponent from './sidebar/customDrawerContentComponent';
import {connect} from 'react-redux';
const MyStackNavigator = StackNavigator(
  {
    HomeScreen: {
      screen: Home
    },
    formRegisterScreen: {
      screen: formRegister
    },
    formLoginScreen: {
      screen: formLogin
    }
  },
  {
    headerMode: "none"
  }
);

const MyDrawerNavigator = DrawerNavigator(
  {
    Stack: {
      screen: MyStackNavigator
    },
    HomeScreen: {
      screen: Home
    }
  },
  {
    drawerWidth: 220,
    drawerPosition: "left",
    contentComponent: props => <CustomDrawerContentComponent {...props} />
  }
);
export default connect()(MyDrawerNavigator);