import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./styles";
import { Icon, Header } from "react-native-elements";
import global from "../../../utils/global";
import { showMessage } from "react-native-flash-message";
import { api_forgot_pass } from "../../../utils/Api";

export default class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "Rachitsharma2203@gmail.com",
    };
  }

  // Validate
  validate = () => {
    if (this.state.email.trim() == "") {
      showMessage({
        message: "Please enter e-mail address.",
        type: "warning",
      });
    } else if (
      !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      showMessage({
        message: "Invalid e-mail address.",
        type: "warning",
      });
    } else {
      api_forgot_pass(this.state);
    }
  };

  render() {
    const { email } = this.state;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        {/* <View style={styles.containerMybooking}> */}
        <Header
          containerStyle={styles.header}
          backgroundColor={"transparent"}
          leftComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.leftIcon}
            >
              <Icon name="chevron-left" size={36} color={global.COLOR.gray} />
            </TouchableOpacity>
          }
        />
        <ScrollView style={styles.containerMybooking}>
          <View style={styles.imgViewSignup}>
            <Image style={styles.logo_image} source={global.ASSETS.LOGO} />
          </View>
          <View style={styles.welcomeView}>
            <Text style={styles.welcomeSignup}>Forgot your password ?</Text>
          </View>
          <>
            {/* email */}
            <View style={styles.nameView}>
              <Image
                source={global.ASSETS.EMAIL}
                style={styles.sideIcon}
                resizeMode={"contain"}
              />
              <TextInput
                style={styles.nameInputSignup}
                label="Email"
                onSubmitEditing={() => {
                  this.validate();
                }}
                returnKeyType={"next"}
                selectionColor={global.COLOR.PRIMARY_LIGHT}
                theme={{
                  colors: { primary: global.COLOR.PRIMARY_DARK },
                }}
                underlineColor="transparent"
                value={email}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
          </>
          <TouchableOpacity
            onPress={() => this.validate()}
            style={styles.touchlogin}
          >
            <Text style={styles.loginText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
}
