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
import { t } from "i18n-js";
import styles from "./styles";
import { Icon, Header } from "react-native-elements";
import global from "../../../utils/global";
import CountryPicker from "react-native-country-picker-modal";
import { showMessage } from "react-native-flash-message";
import { api_update_profile } from "../../../utils/Api";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: global.USER.first_name,
      email: global.USER.email,
      password: "",
      phoneNumber: global.USER.mobile,
      modalVisible: false,
      isLoading: false,
      country: "IT",
      country_code: "39",
    };
  }

  // Validate
  validate = () => {
    if (this.state.name.trim() == "") {
      showMessage({
        message: "Please enter your name.",
        type: "warning",
      });
    } else if (this.state.email.trim() == "") {
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
    } else if (this.state.phoneNumber.trim() == "") {
      showMessage({
        message: "Please enter your phonr number.",
        type: "warning",
      });
    } else {
      api_update_profile(this.state);
    }
  };

  render() {
    const { name, email, phoneNumber, country } = this.state;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        {/* <View style={styles.containerMybooking}> */}
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="chevron-left" size={32} color={global.COLOR.white} />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("profile_header")}</Text>
          }
        />
        <ScrollView style={styles.containerMybooking}>
          <>
            {/* name */}
            <View style={styles.nameView}>
              <Image
                source={global.ASSETS.USER}
                style={styles.sideIcon}
                resizeMode={"contain"}
              />
              <TextInput
                ref={(ref) => {
                  this.name_input = ref;
                }}
                style={styles.nameInputSignup}
                label="Name"
                underlineColor="transparent"
                selectionColor={global.COLOR.PRIMARY_LIGHT}
                theme={{
                  colors: { primary: global.COLOR.PRIMARY_DARK },
                }}
                returnKeyType={"next"}
                onSubmitEditing={() => this.email_input.focus()}
                value={name}
                onChangeText={(name) => this.setState({ name })}
              />
            </View>
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
                ref={(ref) => {
                  this.email_input = ref;
                }}
                onSubmitEditing={() => {
                  this.phone_input.focus();
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
            {/* phone */}
            <View style={styles.nameView}>
              <CountryPicker
                countryCode={country}
                withFilter
                withFlag
                withFlagButton
                withCallingCode
                withCallingCodeButton
                withAlphaFilter
                onSelect={(c) => {
                  this.setState({
                    country_code: c.callingCode[0],
                    country: c.cca2,
                  });
                }}
              />
              <TextInput
                style={styles.nameInputSignup}
                ref={(ref) => {
                  this.phone_input = ref;
                }}
                onSubmitEditing={() => this.pass_input.focus()}
                selectionColor={global.COLOR.PRIMARY_LIGHT}
                theme={{
                  colors: { primary: global.COLOR.PRIMARY_DARK },
                }}
                underlineColor="transparent"
                label="Phone Number"
                value={phoneNumber}
                onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                // maxLength={9}
                returnKeyType={"next"}
                keyboardType={"number-pad"}
              />
            </View>
          </>
        </ScrollView>
        <TouchableOpacity
          onPress={() => this.validate()}
          style={styles.touchlogin}
        >
          <Text style={styles.loginText}>{t("save")}</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
