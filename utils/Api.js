import React from "react";
import Axios from "axios";
import Loading from "../components/Loading";
import { showMessage, hideMessage } from "react-native-flash-message";
import * as RootNavigation from "./RootNavigation";
import AsyncStorage from "@react-native-community/async-storage";
// import NetInfo from "@react-native-community/netinfo";
// import * as Linking from "expo-linking";
import global from "./global";
import { Icon } from "react-native-elements";
import * as SplashScreen from "expo-splash-screen";
// import * as Contacts from "expo-contacts";
import * as Facebook from "expo-facebook";

// Network listener

// base url
Axios.defaults.baseURL = "http://amnesty.zedejewelry.com/public/api/v1/";

// log request
Axios.interceptors.request.use((request) => {
  console.log("Starting Request :", request.baseURL + request.url);
  console.log("Request Data :", request.data);
  console.log("Request Header :", request.headers.Authorization);
  return request;
});

// log response
Axios.interceptors.response.use((response) => {
  console.log("Response: \n", response.status, response.data);
  return response;
});

// store auth token in storage
function StoreToken(responseData) {
  // console.log(responseData);
  AsyncStorage.setItem(global.API_TOKEN, responseData, (err) => {
    if (err) {
      console.log("an error");
      throw err;
    }
    console.log("Token Stored");
    global.AUTHTOKEN = responseData;
  }).catch((err) => {
    console.log("error is: " + err);
  });
}

//  get user token
export async function ValidateUser() {
  try {
    let accessToken = await AsyncStorage.getItem(global.API_TOKEN).then(
      (value) => {
        if (value) {
          return value;
        }
      }
    );

    if (!accessToken) {
      console.log("no access token");
      console.log("navigate to Auth");
      Loading.hide();
      RootNavigation.navigate("Auth");
      // hide splash screen
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 200);
    } else {
      global.AUTHTOKEN = accessToken;

      let userData = await AsyncStorage.getItem(global.USER_DATA).then(
        (value) => {
          if (value) {
            return value;
          }
        }
      );

      global.USER = JSON.parse(userData);

      console.log("navigate to app");
      Loading.hide();

      RootNavigation.navigate("App");
      // hide splash screen
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 200);
    }
  } catch (error) {
    console.log("Something went wrong");
  }
}
//  get user token
export async function GetToken(data) {
  try {
    let accessToken = await AsyncStorage.getItem(global.API_TOKEN).then(
      (value) => {
        if (value) {
          return value;
        }
      }
    );

    if (!accessToken) {
      console.log("no access token");
      console.log("navigate to Auth");
      Loading.hide();
      RootNavigation.navigate("Auth");
    } else {
      global.AUTHTOKEN = accessToken;

      // store user data
      AsyncStorage.setItem(global.USER_DATA, JSON.stringify(data), (err) => {
        if (err) {
          console.log("an error");
          throw err;
        }
        console.log("User Data Stored");
      }).catch((err) => {
        console.log("error is: " + err);
      });
      let userData = await AsyncStorage.getItem(global.USER_DATA).then(
        (value) => {
          if (value) {
            return value;
          }
        }
      );

      global.USER = JSON.parse(userData);

      console.log("navigate to app");
      Loading.hide();

      RootNavigation.navigate("App");
    }
  } catch (error) {
    console.log("Something went wrong");
  }
}

//  store user data in storage
export async function StoreUserData(data) {
  try {
    // store user data
    AsyncStorage.setItem(global.USER_DATA, JSON.stringify(data), (err) => {
      if (err) {
        console.log("an error");
        throw err;
      }
      console.log("User Data Stored");
    }).catch((err) => {
      console.log("error is: " + err);
    });
    let userData = await AsyncStorage.getItem(global.USER_DATA).then(
      (value) => {
        if (value) {
          return value;
        }
      }
    );

    global.USER = JSON.parse(userData);
  } catch (error) {
    console.log("Something went wrong");
  }
}

// login api
export async function Signin(d) {
  Loading.show();
  Axios({
    method: "post",
    url: "login",
    data: {
      username: d.email,
      password: d.password,
      role_id: 3,
      device_token: global.CONSTANT.DEVICETOKEN,
    },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.data.status_code == 200) {
        StoreToken(response.data.data.api_token);
        GetToken(response.data.data);
      } else {
        Loading.hide();

        Popup.show({
          type: "Danger",
          title: global.CONSTANT.APPNAME + " Alert❗",
          button: false,
          textBody: response.data.error_message,
          buttontext: "Ok",
          callback: () => Popup.hide(),
        });
      }
    }.bind(this)
  );
}

// signup api
export async function Signup(d) {
  Loading.show();
  Axios({
    method: "post",
    url: "register",
    data: {
      first_name: d.first_name,
      last_name: d.last_name,
      username: d.email,
      number: d.number,
      password: d.password,
      device_type: global.CONSTANT.DEVICETYPE,
      device_token: global.CONSTANT.DEVICETOKEN,
    },
    validateStatus: () => {
      return true; // I'm always returning true, you may want to do it depending on the status received
    },
  }).then(
    function (response) {
      if (response.data.status_code == 200) {
        Loading.hide();
        Popup.show({
          type: "Success",
          title: "Congratulations 🎉🎉",
          button: false,
          textBody: response.data.success_message,
          buttonText: "Welcome",
          callback: () => {
            Popup.hide();
            StoreToken(response.data.data.api_token);
            StoreUserData(response.data.data);

            RootNavigation.navigate("Welcome");
          },
        });
      } else {
        Loading.hide();
        Popup.show({
          type: "Danger",
          title: global.CONSTANT.APPNAME + " Alert❗",
          button: false,
          textBody: response.data.error_message,
          buttontext: "Ok",
          callback: () => Popup.hide(),
        });
      }
    }.bind(this)
  );
}

/**
 * Facebook Auth
 */
export async function FBAuth() {
  const appId = global.CONSTANT.FB_APP_ID;
  try {
    await Facebook.initializeAsync(appId);

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      appId,
      {
        permissions: ["public_profile", "email"],
      }
    );
    if (type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?fields=id,name,email,friends,birthday,picture.type(large)&access_token=${token}`
      );
      let data = await response.json();
      return data;
    } else {
      return false;
      // type === 'cancel'
    }
  } catch ({ message }) {
    Popup.show({
      type: "Danger",
      title: global.CONSTANT.APPNAME + " Alert❗",
      button: false,
      textBody: "We couldnt connect with Facebook.",
      buttontext: "Ok",
      callback: () => Popup.hide(),
    });
  }
}

// Social Login api
export async function SocialLogin(d) {
  Loading.show();
  Axios({
    method: "post",
    url: "ischeck",
    data: {
      email: d.email,
      device_token: global.CONSTANT.DEVICETOKEN,
    },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.data.status_code == 200) {
        StoreToken(response.data.data.api_token);
        GetToken(response.data.data);
      } else {
        Loading.hide();

        Popup.show({
          type: "Danger",
          title: global.CONSTANT.APPNAME + " Alert❗",
          button: false,
          textBody: response.data.error_message,
          buttontext: "Ok",
          callback: () => Popup.hide(),
        });
      }
    }.bind(this)
  );
}

// ForgotPassword api
export async function ForgotPassword(d) {
  Loading.show();
  const DATA = await Axios({
    method: "post",
    url: "forgotpassword",
    data: {
      email: d.email,
    },
    headers: { Authorization: "Bearer " + global.AUTHTOKEN },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.status == 200) {
        // StoreUserData(response.data.data);
        Loading.hide();
        Popup.show({
          type: "Success",
          title: global.CONSTANT.APPNAME + " Alert❗",
          button: false,
          textBody: response.data.success_message,
          buttonText: "Reset Now",
          callback: () => {
            Popup.hide();
            Linking.openURL(response.data);
            // NavigationService.navigate("Login");
          },
        });
        // return global.USER;
      } else {
        Loading.hide();
        Popup.show({
          type: "Danger",
          title: global.CONSTANT.APPNAME + " Alert❗",
          button: false,
          textBody: response.data.error_message,
          buttontext: "Ok",
          callback: () => Popup.hide(),
        });
      }
    }.bind(this)
  );
  return DATA;
}

// Logout api
export async function Logout() {
  Loading.show();
  const DATA = await Axios({
    method: "get",
    url: "users/logout",
    headers: { Authorization: "Bearer " + global.AUTHTOKEN },
    validateStatus: () => {
      return true;
    },
  }).then(
    async function () {
      await AsyncStorage.multiRemove([global.API_TOKEN, global.USER_DATA]);
      Loading.hide();
      RootNavigation.navigate("Auth");
    }.bind(this)
  );
  return DATA;
}
