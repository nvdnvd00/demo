import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./src/components/app.js";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
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
