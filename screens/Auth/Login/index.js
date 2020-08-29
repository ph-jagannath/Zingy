import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  StatusBar,
  View,
  Alert,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import { Icon, SocialIcon } from "react-native-elements";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FBAuth, SocialLogin } from "../../../utils/Api";
import * as AppleAuthentication from "expo-apple-authentication";
import * as GoogleSignIn from "expo-google-sign-in";
import jwtDecode from "jwt-decode";
import { showMessage } from "react-native-flash-message";
import { TextInput } from "react-native-paper";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
  }
  componentDidMount() {
    this.initAsync();
  }

  initAsync = async () => {
    await GoogleSignIn.initAsync({});
  };

  GoogleAuth = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === "success") {
        const user = await GoogleSignIn.signInSilentlyAsync();
        SocialLogin(user);
      }
    } catch ({ message }) {
      showMessage({
        message: "Oops !",
        description: message,
        type: "danger",
      });
    }
  };

  handleValidation = () => {
    if (this.state.number === "")
      Alert.alert(global.CONSTANT.APPNAME, t("plzEnterPhoneNumber"));
    else if (isNaN(this.state.number))
      Alert.alert(global.CONSTANT.APPNAME, t("NotANumber"));
    // login(this.state)
    else this.props.navigation.navigate("App");
  };

  render() {
    const { email, password } = this.state;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          {/* logo image */}
          <>
            <Image
              style={styles.logo_image}
              source={global.ASSETS.LOGO}
              resizeMode={"center"}
            />
          </>
          {/* social signup button */}
          <>
            <View style={styles.social_container}>
              <Icon
                name="google"
                type="font-awesome"
                reverse
                reverseColor="#fff"
                color="#DB4437"
                size={20}
                onPress={() => {
                  this.GoogleAuth();
                }}
              />
              <Icon
                name="facebook"
                type="font-awesome"
                reverse
                reverseColor="#fff"
                color="#4267B2"
                size={20}
                onPress={() => {
                  FBAuth();
                }}
              />
              {global.CONSTANT.DEVICETYPE === "ios" && (
                <Icon
                  name="apple"
                  type="font-awesome"
                  reverse
                  reverseColor="#fff"
                  color="black"
                  size={20}
                  onPress={async () => {
                    try {
                      // let credential = await AppleAuthentication.signOutAsync();
                      let credential = await AppleAuthentication.signInAsync({
                        requestedScopes: [
                          AppleAuthentication.AppleAuthenticationScope.EMAIL,
                        ],
                      });
                      var token = credential.identityToken;
                      var decoded = await jwtDecode(token);
                      console.log(decoded.email);
                      SocialLogin({ email: decoded.email });
                    } catch (e) {
                      if (e.code === "ERR_CANCELED") {
                        // handle that the user canceled the sign-in flow
                      } else {
                        // handle other errors
                      }
                    }
                  }}
                />
              )}
            </View>
          </>

          <Text style={styles.already}>
            Already a user? Enter your registered email & password below.
          </Text>
          <View style={styles.input_container}>
            <TextInput
              label="Email *"
              style={styles.input}
              theme={{ colors: { primary: global.COLOR.PRIMARY_DARK } }}
              underlineColor={global.COLOR.PRIMARY_LIGHT}
              value={email}
              onChangeText={(v) => this.setState({ email: v })}
            />
            <TextInput
              label="Password *"
              style={styles.input}
              theme={{ colors: { primary: global.COLOR.PRIMARY_DARK } }}
              secureTextEntry
              underlineColor={global.COLOR.PRIMARY_LIGHT}
              value={password}
              onChangeText={(v) => this.setState({ password: v })}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.login_button}
            onPress={() => this.handleValidation()}
          >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
          <View style={styles.dontAcView}>
            <Text style={styles.dontAccount}>
              Don't have an account?{" "}
              <Text
                style={styles.dontAccount}
                onPress={() => {
                  this.props.navigation.navigate("Signup");
                }}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
