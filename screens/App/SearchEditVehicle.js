import React, { Component } from "react";
import { ScrollView, Text, StatusBar, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/app/searchEdit_styles";
import global from "../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
export default class SearchEditVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const header = this.props.route.params.header;
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
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="chevron-left" size={32} color={global.COLOR.white} />
            </TouchableOpacity>
          }
          centerComponent={<Text style={styles.headerText}>{header}</Text>}
        />
        <ScrollView style={styles.containerMybooking}>
          <View style={styles.SearchEditVehicle}>
            <Icon
              name={"search"}
              type={"mdiMagnify"}
              style={styles.searchIcon}
              size={25}
              color={global.COLOR.PRIMARY_LIGHT}
            />
            <TextInput
              style={styles.inputEditV}
              keyboardType="default"
              returnKeyType="done"
              placeholder={t("search")}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
