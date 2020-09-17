import React, { Component } from "react";
import {
  FlatList,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import styles from "./styles";
import global from "../../../utils/global";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon, Header } from "react-native-elements";
import emp from "../../../assets/emp.png";
import { t } from "i18n-js";

const userMesege = [
  {
    img: emp,
    msg: `namo`,
    frindName: `Rachit Sharma`,
    online: true,
  },
  {
    img: emp,
    msg: `namo`,
    frindName: `Shubham Parihar`,
    online: false,
  },
  {
    img: emp,
    msg: `namo`,
    frindName: `Shubham Parihar`,
    online: true,
  },
  {
    img: emp,
    msg: `namo`,
    frindName: `Shubham Parihar`,
    online: true,
  },
];

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderItem = ({ item }) => {
    return (
      <View style={styles.listContainerMyBook}>
        <View style={styles.btmViewMessage}>
          <View style={styles.SimplerowView}>
            <Image style={styles.imgMessage} source={item.img} />
            {item.online && <View style={styles.onlineView} />}
          </View>
          <View style={styles.rightViewMessage}>
            <Text style={styles.FName}>{item.frindName}</Text>
            <Text>{item.msg}</Text>
          </View>
        </View>
      </View>
    );
  };

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
            // onPress={() => { this.props.navigation.toggleDrawer() }}
            <TouchableOpacity
              style={styles.leftIcon}
              onPress={() => {
                this.props.navigation.toggleDrawer();
              }}
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
            <Text style={styles.headerText}>{t("message_header")}</Text>
          }
          rightComponent={
            <TouchableOpacity
              style={styles.notiTouch}
              onPress={() => this.props.navigation.navigate("Notification")}
            >
              <Image source={global.ASSETS.BELL} style={styles.bellS} />
              <View style={styles.notiView}>
                <Text style={styles.notiText}>16</Text>
              </View>
            </TouchableOpacity>
          }
        />

        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={userMesege}
          renderItem={({ item, index }) => this.renderItem({ item, index })}
          keyExtractor={(item, key) => key.toString()}
        />
      </View>
    );
  }
}
