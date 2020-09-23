import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import global from "../../../utils/global";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Header, Icon } from "react-native-elements";
import { t } from "i18n-js";
import { WebView } from "react-native-webview";
import { api_get_pages } from "../../../utils/Api";
export default class Terms extends Component {
  constructor(props) {
    super(props);
    this.get_data();
    this.state = {};
  }

  get_data = async () => {
    const r = await api_get_pages("privacy_policy");
    this.update();
  };

  update() {
    this.setState({
      update: Date.now(),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          leftComponent={
            <TouchableOpacity
              style={styles.leftIcon}
              onPress={() => {
                global.AUTHTOKEN == "AUTH"
                  ? this.props.navigation.goBack()
                  : this.props.navigation.toggleDrawer();
              }}
            >
              <Icon
                name={global.AUTHTOKEN == "AUTH" ? "chevron-left" : "menu"}
                size={30}
                color={global.COLOR.white}
              />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("Privacy")}</Text>
          }
        />
        <WebView
          originWhitelist={["*"]}
          scalesPageToFit={true}
          automaticallyAdjustContentInsets={true}
          style={{ flex: 1 }}
          source={{
            html: `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0"></head><body>${global.PAGE_CONTENT}</body></html>`,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    borderBottomColor: global.COLOR.white,
  },
  container: {
    flex: 1,
  },
  touchLeft: {
    marginTop: 5,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(5),
  },

  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
  },
  containerMybooking: {
    flex: 1,
    backgroundColor: global.COLOR.newContainer,
  },
  msg_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    // minHeight: hp(5),
  },
  msg_text: {
    width: wp(83),
    color: global.COLOR.PRIMARY_DARK,
  },
});
