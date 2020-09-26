import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import { Icon, Header } from "react-native-elements";
import global from "../../../utils/global";
import { FBAuth, SocialLogin, api_login } from "../../../utils/Api";
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
      const { type } = await GoogleSignIn.signInAsync();
      if (type === "success") {
        const user = await GoogleSignIn.signInSilentlyAsync();
        SocialLogin({
          email: user.email,
          name: user.firstName + " " + user.lastName,
          social_type: "Google",
          social_id: user.uid,
        });
      }
    } catch ({ message }) {
      showMessage({
        message: "Oops !",
        description: message,
        type: "danger",
      });
    }
  };

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
    } else if (this.state.password.trim() == "") {
      showMessage({
        message: "Please enter password.",
        type: "warning",
      });
    } else if (this.state.password.length < 6) {
      showMessage({
        message: "Password field should not be less than 6 characters.",
        type: "warning",
      });
    } else {
      api_login(this.state);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <Header
          backgroundColor={"transparent"}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
        />
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
                          AppleAuthentication.AppleAuthenticationScope
                            .FULL_NAME,
                        ],
                      });
                      var token = credential.identityToken;
                      var decoded = await jwtDecode(token);
                      SocialLogin({
                        email: decoded.email,
                        name: decoded.email.split("@")[0],
                        social_type: "Apple",
                        social_id: decoded.c_hash,
                      });
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

          {/* email */}
          <View style={styles.nameView}>
            <Image
              source={global.ASSETS.EMAIL}
              style={styles.sideIcon}
              resizeMode={"contain"}
            />
            <TextInput
              style={styles.nameInputSignup}
              textContentType="emailAddress"
              keyboardType="email-address"
              label="Email"
              ref={(ref) => {
                this.email = ref;
              }}
              onSubmitEditing={() => {
                this.password.focus();
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

          {/* pass */}
          <View style={styles.nameView}>
            <Image
              source={global.ASSETS.LOCK}
              style={styles.sideIcon}
              resizeMode={"contain"}
            />
            <TextInput
              style={styles.nameInputSignup}
              label="Password"
              secureTextEntry
              ref={(ref) => {
                this.password = ref;
              }}
              onSubmitEditing={() => {
                this.validate();
              }}
              returnKeyType="done"
              selectionColor={global.COLOR.PRIMARY_LIGHT}
              theme={{
                colors: { primary: global.COLOR.PRIMARY_DARK },
              }}
              underlineColor="transparent"
              value={password}
              onChangeText={(v) => this.setState({ password: v })}
            />
          </View>

          {/* forgot password  */}
          <>
            <Text
              style={styles.forgot_pass}
              onPress={() => {
                this.props.navigation.navigate("Forgot");
              }}
            >
              Forgot Password ?
            </Text>
          </>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.login_button}
            onPress={() => this.validate()}
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
