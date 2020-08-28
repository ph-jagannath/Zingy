import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/auth/welcomeDacwash_styles";
import global from "../../utils/global";
import { t } from "i18n-js";
import { Header } from "react-native-elements";
export default class WelcomeDacwash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusView}>
          <StatusBar
            translucent
            backgroundColor={global.COLOR.AppColor}
            barStyle="light-content"
          />
        </View>
        <Header
          containerStyle={styles.header}
          backgroundColor={global.COLOR.AppColor}
          centerComponent={
            <Text style={styles.headerText}>{t("wel_dacwash")}</Text>
          }
        />
        <ScrollView style={styles.container}>
          <View style={styles.imgViewWelcome}>
            <Image
              style={styles.img}
              source={global.ASSETS.LOGO}
              resizeMode={"center"}
            />
          </View>

          <Text style={styles.dacWash}>{t("wel_DACWASH")}</Text>
          <Text style={styles.welcome}>{t("wel_WELCOME")}</Text>
          <View style={styles.marTop}>
            <Text style={styles.letsStart}>{t("wel_letsStart")}</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AddVehicle")}
              style={styles.touchlogin}
            >
              <Text style={styles.loginText}>{t("wel_AddVehicle")}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
