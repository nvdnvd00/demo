import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./src/components/app.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
export default class demo extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("demo", () => demo);

const defaultState = { user_id: "", user_name: "USER", user_avatar: "", loginStatus: false };

const reducer = (state = defaultState, action) => {
  if (action.type === "SAVE_ID") return { ...state, user_id: action.user_id };
  if (action.type === "SAVE_NAME")
    return { ...state, user_name: action.user_name };
  if (action.type === "SAVE_AVATAR")
    return { ...state, user_avatar: action.user_avatar };
  if (action.type === "CHANGE_LOGIN_STATUS")
    return { ...state, loginStatus: !loginStatus };
  return state;
};
const store = createStore(reducer);
