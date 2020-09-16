import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  StatusBar,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import global from "../../../utils/global";
import { Icon, Header } from "react-native-elements";
import { t } from "i18n-js";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let d = global.USER;
    console.log("d", d);
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
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
            <Text style={styles.headerText}>{t("profile_header")}</Text>
          }
          // rightComponent={
          //   <TouchableOpacity
          //     onPress={() => this.props.navigation.navigate("Notification")}
          //   >
          //     <Image source={global.ASSETS.BELL} style={styles.bellS} />
          //   </TouchableOpacity>
          // }
        />
        <ScrollView style={styles.containerMybooking}>
          <View style={styles.horizonViewProfile}>
            <View style={styles.HorizonRowViewProfile}>
              <Image
                source={global.ASSETS.USER}
                style={styles.imgStyle}
                resizeMode={"center"}
              />
              <View style={styles.profileRightView}>
                <Text style={styles.nameText}>{t("signup_name")}</Text>
                <Text style={styles.usrName}>{d.first_name}</Text>
              </View>
            </View>
          </View>
          <View style={styles.horizonViewProfile}>
            <View style={styles.HorizonRowViewProfile}>
              <Image
                source={global.ASSETS.EMAIL}
                style={styles.imgStyle}
                resizeMode={"center"}
              />
              <View style={styles.profileRightView}>
                <Text style={styles.nameText}>{t("signup_email")}</Text>
                <Text style={styles.usrName}>{d.email}</Text>
              </View>
            </View>
          </View>
          <View style={styles.horizonViewProfile}>
            <View style={styles.HorizonRowViewProfile}>
              <Image
                source={global.ASSETS.MOBAIL}
                style={styles.MimgStyle}
                resizeMode={"cover"}
              />
              <View style={styles.profileRightView}>
                <Text style={styles.nameText}>{t("signup_phone")}</Text>
                <Text style={styles.usrName}>{d.mobile}</Text>
              </View>
            </View>
          </View>
          <View style={styles.horizonViewProfile}>
            <View style={styles.HorizonRowViewProfile}>
              <Image
                source={global.ASSETS.LOCK}
                style={styles.imgStyle}
                resizeMode={"center"}
              />
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("profile_password")
                }
                style={styles.profileRightView}
              >
                <Text style={styles.nameText}>
                  {t("profile_changePassword")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {/* add button */}
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("profile_edit")}
            style={styles.add_button}
          >
            <Text style={styles.add_button_Text}>{t("edit_profile")}</Text>
          </TouchableOpacity>
        </>
      </ImageBackground>
    );
  }
}
