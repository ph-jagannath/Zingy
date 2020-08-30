import React, { Component } from "react";
import { ScrollView, Image, Text, StatusBar, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/app/profile_styles";
import global from "../../utils/global";
import { Icon, Header } from "react-native-elements";
import { t } from "i18n-js";

export default class Profile extends Component {
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
            <Text style={styles.headerText}>{t("profile_header")}</Text>
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
          <View style={styles.horizonViewProfile}>
            <View style={styles.HorizonRowViewProfile}>
              <Image
                source={global.ASSETS.USER}
                style={styles.imgStyle}
                resizeMode={"center"}
              />
              <View style={styles.profileRightView}>
                <Text style={styles.nameText}>{t("signup_name")}</Text>
                <Text style={styles.usrName}>Nakul</Text>
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
                <Text style={styles.usrName}>nakulsharma0298@gmail.com</Text>
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
                <Text style={styles.nameText}>{t("login_phoneNumber")}</Text>
                <Text style={styles.usrName}>+971656565656</Text>
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
                onPress={() => this.props.navigation.navigate("ChangePassword")}
                style={styles.profileRightView}
              >
                <Text style={styles.nameText}>
                  {t("profile_changePassword")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
