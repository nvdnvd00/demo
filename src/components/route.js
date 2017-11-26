import React, { Component } from "react";
import { StackNavigator, DrawerNavigator, DrawerItems } from "react-navigation";

import CustomDrawerContentComponent from './sidebar/customDrawerContentComponent';

import {connect} from 'react-redux';



import Home from "./HomeScreen";
import formRegister from "./formLogin/register";
import formLogin from "./formLogin/login"

import mainBook from './Book/mainBook';
import mainPersonal from './Personal/mainPersonal';
import MySkill from './Personal/mySkill';


import detailsKill from './Book/detailsSkill';
import mainSlalom from './Book/slalom/mainSlalom';
import mainClub from './Club/mainClub';
import detailClub from './Club/detailClub';
import mainChat from './Chat/mainChat';



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
    },
    mainBookScreen: {
      screen: mainBook
    },
    mainPersonalScreen: {
      screen: mainPersonal
    },
    MySkillScreen: {
      screen: MySkill
    },
    detailsKillScreen:{
      screen: detailsKill
    },
    mainClubScreen: {
      screen: mainClub
    },
    detailClubScreen:{
      screen: detailClub
    },
    mainChatScreen: {
      screen: mainChat
    },

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
    },

    formRegisterScreen: {
      screen: formRegister
    },
    formLoginScreen: {
      screen: formLogin
    },
    mainBookScreen: {
      screen: mainBook
    },
    mainPersonalScreen: {
      screen: mainPersonal
    },
    MySkillScreen: {
      screen: MySkill
    },
    detailsKillScreen:{
      screen: detailsKill
    },
    mainSlalomScreen:{
      screen: mainSlalom
    },
    mainClubScreen: {
      screen: mainClub
    },
    detailClubScreen:{
      screen: detailClub
    },
    mainChatScreen: {
      screen: mainChat
    },
  
  },
  {
    drawerWidth: 220,
    drawerPosition: "left",
    contentComponent: props => <CustomDrawerContentComponent {...props} />
  }
);
export default connect()(MyDrawerNavigator);