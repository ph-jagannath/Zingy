import React, { Component } from "react";
import { ValidateUser } from "../../utils/Api";
import { View } from "react-native";

export default class AuthLoading extends Component {
  constructor(props) {
    super(props);
    ValidateUser();
    this.state = {};
  }

  render() {
    return <View />;
  }
}
