import React, { Component } from "react";
import { ScrollView, Image, Text, TouchableOpacity, View } from "react-native";
import global from "../../utils/global";
import { t } from "i18n-js";
import styles from "./styles";
import { Icon } from "react-native-elements";
import { api_logout } from "../../utils/Api";
export default class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    const active_route = this.props.state.routes[this.props.state.index].name;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Profile")}
        >
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
            {/* home */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Home")}
              style={[
                styles.contentTop,
                active_route == "Home" && styles.active_tab,
              ]}
            >
              <Text
                style={[
                  styles.content,
                  active_route == "Home" && styles.active_content,
                ]}
              >
                {t("side_menu_home")}
              </Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            {/* two wheeler */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("two_wheeler")}
              style={[
                styles.contentTop,
                active_route == "two_wheeler" && styles.active_tab,
              ]}
            >
              <Text
                style={[
                  styles.content,
                  active_route == "two_wheeler" && styles.active_content,
                ]}
              >
                {t("side_menu_two_wheeler")}
              </Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("MyVehicle")}
              style={[
                styles.contentTop,
                active_route == "MyVehicle" && styles.active_tab,
              ]}
            >
              <Text
                style={[
                  styles.content,
                  active_route == "MyVehicle" && styles.active_content,
                ]}
              >
                {t("side_menu_MyVehicle")}
              </Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("MyBookings")}
              style={[
                styles.contentTop,
                active_route == "MyBookings" && styles.active_tab,
              ]}
            >
              <Text
                style={[
                  styles.content,
                  active_route == "MyBookings" && styles.active_content,
                ]}
              >
                {t("side_menu_MyBookings")}
              </Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Package")}
              style={[
                styles.contentTop,
                active_route == "Package" && styles.active_tab,
              ]}
            >
              <Text
                style={[
                  styles.content,
                  active_route == "Package" && styles.active_content,
                ]}
              >
                {t("side_menu_Packages")}
              </Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Location")}
              style={[
                styles.contentTop,
                active_route == "Location" && styles.active_tab,
              ]}
            >
              <Text
                style={[
                  styles.content,
                  active_route == "Location" && styles.active_content,
                ]}
              >
                {t("side_menu_Locations")}
              </Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Faqs")}
              style={[
                styles.contentTop,
                active_route == "Faqs" && styles.active_tab,
              ]}
            >
              <Text
                style={[
                  styles.content,
                  active_route == "Faqs" && styles.active_content,
                ]}
              >
                {t("side_menu_FAQs")}
              </Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Message")}
              style={[
                styles.contentTop,
                active_route == "Message" && styles.active_tab,
              ]}
            >
              <Text
                style={[
                  styles.content,
                  active_route == "Message" && styles.active_content,
                ]}
              >
                {t("side_menu_Messages")}
              </Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Contact")}
              style={[
                styles.contentTop,
                active_route == "Contact" && styles.active_tab,
              ]}
            >
              <Text
                style={[
                  styles.content,
                  active_route == "Contact" && styles.active_content,
                ]}
              >
                {t("side_menu_Contact")}
              </Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("ChangeLanguage")}
              style={[
                styles.contentTop,
                active_route == "ChangeLanguage" && styles.active_tab,
              ]}
            >
              <Text
                style={[
                  styles.content,
                  active_route == "ChangeLanguage" && styles.active_content,
                ]}
              >
                {t("changeLanguage_header")}
              </Text>
              <Icon name="chevron-right" size={32} color="#ccc" />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
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
