import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import global from "../../utils/global";
import { t } from "i18n-js";
import styles from "./styles";
import { Icon } from "react-native-elements";
import { api_logout } from "../../utils/Api";
const userName = "Hi,Nakul";
export default class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={global.ASSETS.LOGO}
            style={styles.logoS}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
        <Text style={styles.Username}>Hi, {global.USER.first_name}</Text>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.TopViewDrawer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.contentTop}
            >
              <Text style={styles.content}>{t("side_menu_home")}</Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("MyVehicle")}
              style={styles.contentTop}
            >
              <Text style={styles.content}>{t("side_menu_MyVehicle")}</Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("MyBookings")}
              style={styles.contentTop}
            >
              <Text style={styles.content}>{t("side_menu_MyBookings")}</Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Package")}
              style={styles.contentTop}
            >
              <Text style={styles.content}>{t("side_menu_Packages")}</Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Location")}
              style={styles.contentTop}
            >
              <Text style={styles.content}>{t("side_menu_Locations")}</Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Faqs")}
              style={styles.contentTop}
            >
              <Text style={styles.content}>{t("side_menu_FAQs")}</Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Message")}
              style={styles.contentTop}
            >
              <Text style={styles.content}>{t("side_menu_Messages")}</Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Contact")}
              style={styles.contentTop}
            >
              <Text style={styles.content}>{t("side_menu_Contact")}</Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChangeLanguage")}
              style={styles.contentTop}
            >
              <Text style={styles.content}>{t("changeLanguage_header")}</Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => api_logout()}
              style={styles.contentTop}
            >
              <Text style={styles.content}>{t("side_menu_Logout")}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
