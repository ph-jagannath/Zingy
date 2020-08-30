import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/app/notification_styles";
import global from "../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: 0,
      preTab: true,
      Notifications: [],
    };
  }
  renderList = () => {
    <View style={{ flex: 1 }}>
      <Text>{item.data}</Text>
    </View>;
  };

  emptyList = () => {
    return (
      <View style={{ marginVertical: "50%" }}>
        <Text style={{ alignSelf: "center", fontSize: 22 }}>{t("NoData")}</Text>
      </View>
    );
  };
  render() {
    const { preTab } = this.state;
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
              style={styles.touchLeft}
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="chevron-left" size={32} color={global.COLOR.white} />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("Notification")}</Text>
          }
        />
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          ListEmptyComponent={this.emptyList}
          data={this.state.Notifications}
          renderItem={({ item, index }) => this.renderList({ item, index })}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
