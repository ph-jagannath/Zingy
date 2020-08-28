import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import MainNavigator from "./navigators/MainNavigator";
console.disableYellowBox = true;
// import * as Font from "expo-font";
import Loading from "./components/Loading";
import global from "./utils/global";
import * as SplashScreen from "expo-splash-screen";
export default class App extends Component {
  constructor(props) {
    super(props);
    Text.defaultProps = { allowFontScaling: false };
    this.token();
    this.state = {
      loading: true,
    };
  }

  token = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== "granted") {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== "granted") {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    global.CONSTANT.DEVICETOKEN = token;
  };

  // load custom font function
  async componentDidMount() {
    await SplashScreen.preventAutoHideAsync();
    // await Font.loadAsync({
    //   Celias_Bold: require("./assets/fonts/Celias_Bold.ttf"),
    //   Celias_Light: require("./assets/fonts/Celias_Light.ttf"),
    //   Celias_Medium: require("./assets/fonts/Celias_Medium.ttf"),
    //   Celias_Regular: require("./assets/fonts/Celias_Regular.ttf"),
    // });
    this.setState({
      loading: false,
    });
  }
  render() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    return (
      <>
        <MainNavigator />
        <Loading />
      </>
    );
  }
}
