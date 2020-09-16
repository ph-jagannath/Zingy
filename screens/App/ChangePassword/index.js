import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
  Alert,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";

import { Icon, Header } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import { api_update_password } from "../../../utils/Api";

export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: false,
      make: false,
      year: false,
      color: false,
      plateNumber: "686",
      plateCode: "DHH",
      oldPassword: "",
      newPassword: "",
      conPassword: "",
      isActive: false,
    };
  }
  search = (header) => {
    this.props.navigation.navigate("SearchEditVehicle", {
      header: header,
    });
  };
  handleValidation = async () => {
    if (this.state.oldPassword == "") {
      showMessage({
        message: t("plzEnterCurrentPass"),
        type: "warning",
      });
    } else if (this.state.newPassword == "") {
      showMessage({
        message: t("plzEnterNewPass"),
        type: "warning",
      });
    } else if (this.state.newPassword.length < 6) {
      showMessage({
        message: t("passShouldLess"),
        type: "warning",
      });
    } else if (this.state.newPassword !== this.state.conPassword) {
      showMessage({
        message: t("passAndConPassNotMatch"),
        type: "warning",
      });
    } else {
      const r = await api_update_password(this.state);
      r && this.props.navigation.goBack();
    }
  };
  render() {
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <Header
          containerStyle={styles.header}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="chevron-left" size={32} color={global.COLOR.white} />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("changePassword_header")}</Text>
          }
        />

        <ScrollView style={styles.containerMybooking}>
          <View style={styles.nameView}>
            <Image
              source={global.ASSETS.LOCK}
              style={styles.sideIcon}
              resizeMode={"contain"}
            />
            <TextInput
              style={styles.nameInputSignup}
              selectionColor={global.COLOR.PRIMARY_LIGHT}
              theme={{ colors: { text: "#000", primary: "#fff" } }}
              placeholder={"Enter old Password"}
              underlineColor="#fff"
              returnKeyType={"next"}
              autoFocus
              secureTextEntry={true}
              value={this.state.oldPassword}
              onChangeText={(oldPassword) =>
                this.setState({ oldPassword: oldPassword })
              }
              // underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.nameView}>
            <Image
              source={global.ASSETS.LOCK}
              style={styles.sideIcon}
              resizeMode={"contain"}
            />
            <TextInput
              style={styles.nameInputSignup}
              selectionColor={global.COLOR.PRIMARY_LIGHT}
              theme={{ colors: { text: "#000", primary: "#fff" } }}
              placeholder={"Enter New Password"}
              underlineColor="#fff"
              secureTextEntry={true}
              returnKeyType={"next"}
              value={this.state.newPassword}
              onChangeText={(newPassword) =>
                this.setState({ newPassword: newPassword })
              }
            />
          </View>
          <View style={styles.nameView}>
            <Image
              source={global.ASSETS.LOCK}
              style={styles.sideIcon}
              resizeMode={"contain"}
            />
            <TextInput
              style={styles.nameInputSignup}
              selectionColor={global.COLOR.PRIMARY_LIGHT}
              theme={{ colors: { text: "#000", primary: "#fff" } }}
              placeholder={"Enter Confirm Password"}
              underlineColor="#fff"
              secureTextEntry={true}
              returnKeyType={"done"}
              value={this.state.conPassword}
              onChangeText={(conPassword) =>
                this.setState({ conPassword: conPassword })
              }
            />
          </View>
          <View style={styles.touchVIewChangePass}>
            <TouchableOpacity
              onPress={() => this.handleValidation()}
              style={styles.touchNext}
            >
              <Text style={styles.loginText}>{t("save")}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
