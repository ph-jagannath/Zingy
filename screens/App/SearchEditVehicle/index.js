import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from "react-native";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
export default class SearchEditVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter_text: "",
    };
  }

  render() {
    const {
      header,
      list,
      onSelectMake,
      onSelectModel,
      onSelectYear,
      onSelectColor,
      onSelectCountry,
    } = this.props.route.params;
    const { navigation } = this.props;
    const { filter_text } = this.state;
    return (
      <View style={styles.containerMybooking}>
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="chevron-left" size={32} color={global.COLOR.white} />
            </TouchableOpacity>
          }
          centerComponent={<Text style={styles.headerText}>{header}</Text>}
        />
        {/* <ScrollView style={styles.containerMybooking}> */}
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
            returnKeyType="search"
            placeholder={t("search")}
            value={filter_text}
            onChangeText={(v) => {
              this.setState({ filter_text: v });
            }}
          />
        </View>
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={list.filter((i) =>
            i.name.toLowerCase().includes(filter_text.toLowerCase())
          )}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: d }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  if (header == "Make") {
                    onSelectMake(d);
                  }
                  if (header == "Model") {
                    onSelectModel(d);
                  }
                  if (header == "Year") {
                    onSelectYear(d);
                  }
                  if (header == "Color") {
                    onSelectColor(d);
                  }
                  if (header == "Country") {
                    onSelectCountry(d);
                  }
                  navigation.goBack();
                }}
                style={styles.list_item}
              >
                {header == "Color" && (
                  <Icon
                    name="fiber-manual-record"
                    size={28}
                    color={d.name.toLowerCase()}
                  />
                )}
                <Text style={styles.list_item_text}>{d.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
        {/* </ScrollView> */}
      </View>
    );
  }
}
