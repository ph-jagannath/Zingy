import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  Modal,
  StyleSheet,
  StatusBar,
  View,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { signUp } from "../../../utils/Api";
import { t } from "i18n-js";
import styles from "./styles";
import { Icon, Header } from "react-native-elements";
import global from "../../../utils/global";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      modalVisible: false,
      isLoading: false,
    };
  }
  validation = () => {
    const { name, email, password, phoneNumber, check } = this.state;
    if (name == "") Alert.alert(global.CONSTANT.APPNAME, t("plzEnterYourName"));
    else if (name.length > 25)
      Alert.alert(global.CONSTANT.APPNAME, t("nameShouldLess"));
    else if (email == "") {
      Alert.alert(global.CONSTANT.APPNAME, t("plzEnterEmail"));
    } else if (email !== "") {
      let check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (check.test(email) === false)
        Alert.alert(global.CONSTANT.APPNAME, t("invalidAddress"));
      else if (phoneNumber == "")
        Alert.alert(global.CONSTANT.APPNAME, t("plzEnterPhoneNumber"));
      else if (isNaN(phoneNumber))
        Alert.alert(global.CONSTANT.APPNAME, t("NotANumber"));
      else if (password == "")
        Alert.alert(global.CONSTANT.APPNAME, t("plzEnterPassword"));
      else if (password < 6)
        Alert.alert(global.CONSTANT.APPNAME, t("passShouldLess"));
      // signUp(this.state)
      else this.props.navigation.navigate("VerifyNumber");
    }
  };
  render() {
    return (
      <View style={styles.containerMybooking}>
        <Header
          containerStyle={styles.header}
          backgroundColor={global.COLOR.newContainer}
          leftComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.leftIcon}
            >
              <Icon name="chevron-left" size={34} color={global.COLOR.gray} />
            </TouchableOpacity>
          }
        />
        <ScrollView style={styles.containerMybooking}>
          <View style={styles.imgViewSignup}>
            <Image
              style={styles.img}
              source={global.ASSETS.LOGO}
              resizeMode={"center"}
            />
          </View>
          <View style={styles.welcomeView}>
            <Text style={styles.welcomeSignup}>{t("signup_welcome")}</Text>
            <Text style={styles.pls}>{t("signup_plsSignUp")}</Text>
          </View>
          <>
            {/* name */}
            <View style={styles.nameView}>
              <Image
                source={global.ASSETS.USER}
                style={styles.sideIcon}
                resizeMode={"contain"}
              />
              <TextInput
                style={styles.nameInputSignup}
                label={t("signup_name")}
                underlineColor="transparent"
                selectionColor={global.COLOR.darkGreen}
                theme={{
                  colors: { primary: global.COLOR.PRIMARY_DARK },
                }}
                returnKeyType={"next"}
                onSubmitEditing={() => this.name.focus(this.setState)}
                value={this.state.name}
                onChangeText={(name) => this.setState({ name: name })}
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
                label={t("signup_email")}
                ref={(ref) => {
                  this.name = ref;
                }}
                onSubmitEditing={() => {
                  this.email.focus();
                }}
                returnKeyType={"next"}
                selectionColor={global.COLOR.darkGreen}
                theme={{
                  colors: { primary: global.COLOR.PRIMARY_DARK },
                }}
                underlineColor="transparent"
                value={this.state.email}
                onChangeText={(email) => this.setState({ email: email })}
              />
            </View>
            {/* phone */}
            <View style={styles.nameView}>
              <Image
                source={global.ASSETS.FLAGE}
                style={styles.flag}
                resizeMode={"contain"}
              />
              <Text style={styles.it}>{t("login_it")}</Text>
              <Icon
                name={"arrow-drop-down"}
                type={"mdiMenuDown"}
                size={18}
                color={global.COLOR.black}
              />
              <TextInput
                style={styles.phoneInput}
                ref={(ref) => {
                  this.email = ref;
                }}
                onSubmitEditing={() => this.phone.focus()}
                selectionColor={global.COLOR.darkGreen}
                theme={{
                  colors: { primary: global.COLOR.PRIMARY_DARK },
                }}
                underlineColor="transparent"
                label={t("login_phoneNumber")}
                value={this.state.phoneNumber}
                onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                maxLength={9}
                returnKeyType={"next"}
                keyboardType={"number-pad"}
              />
            </View>
            {/* pass */}
            <View style={styles.nameView}>
              <Image
                source={global.ASSETS.LOCK}
                style={styles.sideIcon}
                resizeMode={"contain"}
              />
              <TextInput
                style={styles.nameInputSignup}
                ref={(ref) => {
                  this.phone = ref;
                }}
                selectionColor={global.COLOR.darkGreen}
                theme={{
                  colors: { primary: global.COLOR.PRIMARY_DARK },
                }}
                label={t("signup_password")}
                underlineColor="transparent"
                secureTextEntry={true}
                returnKeyType={"done"}
                value={this.state.password}
                onChangeText={(password) =>
                  this.setState({ password: password })
                }
                // underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.bySign}>
              <Text style={styles.bySignText}>{t("signup_bySignUp")}</Text>
              <TouchableOpacity
                onPress={() => this.setState({ modalVisible: true })}
              >
                <Text style={styles.termText}>Terms & Policy</Text>
              </TouchableOpacity>
            </View>
          </>
          <TouchableOpacity
            onPress={() => this.validation()}
            // onPress={() => this.props.navigation.navigate("VerifyNumber")}
            style={styles.touchlogin}
          >
            <Text style={styles.loginText}>{t("login_signUP")}</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            // onRequestClose={() => {
            //     console.log("Modal has been closed.");
            //   }}
          >
            <View style={styles.modalSignUp}>
              <View style={styles.modalView}>
                <Text>This is terms and conditions you should Agree</Text>
              </View>
              <TouchableOpacity
                style={styles.agreeTouch}
                onPress={() => {
                  this.setState({
                    check: true,
                    modalVisible: !this.state.modalVisible,
                  });
                }}
              >
                <Text style={styles.iAgree}>{t("signup_agree")}</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}
