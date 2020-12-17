import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import * as Linking from "expo-linking";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.containerMybooking}>
        <View style={styles.statusView}>
          <StatusBar
            translucent
            backgroundColor={global.COLOR.PRIMARY_LIGHT}
            barStyle="light-content"
          />
        </View>
        <Header
          containerStyle={styles.header}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          leftComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Icon
                name={"menu"}
                type={"mdiMenu"}
                size={30}
                color={global.COLOR.white}
              />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("contact_header")}</Text>
          }
          rightComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Notification")}
            >
              <Image source={global.ASSETS.BELL} style={styles.bellS} />
            </TouchableOpacity>
          }
        />
        <ScrollView style={styles.containerMybooking}>
          <View style={styles.inquContac}>
            <Text style={styles.welcomeSignup}>{t("contact_forAnyInq")}</Text>
            <Text style={styles.welcomeSignup}>{t("contact_contactUs")}</Text>
          </View>
          <View style={styles.topcContact}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.facebook.com/dacwashapp");
              }}
              style={styles.radiousContact}
            >
              <Image
                source={global.ASSETS.FB}
                style={styles.imgContact}
                // resizeMode={"center"}
              />
            </TouchableOpacity>
            <Text style={styles.numberContact}>Facebook</Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.facebook.com/dacwashapp");
              }}
              style={styles.radiousContact}
            >
              <Image
                source={global.ASSETS.INSTA}
                style={styles.imgContact}
                // resizeMode={"center"}
              />
            </TouchableOpacity>
            <Text style={styles.numberContact}>Instagram</Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("mailto:info@DacWash.com");
              }}
              style={styles.radiousContact}
            >
              <Image
                source={global.ASSETS.EMAIL}
                style={styles.imgContact}
                // resizeMode={"center"}
              />
            </TouchableOpacity>
            <Text style={styles.numberContact}>info@DacWash.com</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
