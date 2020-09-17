import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
} from "react-native";
import { Header, Icon } from "react-native-elements";
import styles from "./styles";
import { t } from "i18n-js";
import global from "../../../utils/global";
import { api_get_vehicle } from "../../../utils/Api";
import { showMessage } from "react-native-flash-message";

export default class VehicleStatus extends Component {
  constructor(props) {
    super(props);
    this.get_data();
    this.state = {};
  }

  get_data() {
    api_get_vehicle().then(() => {
      this.update();
    });
  }
  update() {
    this.setState({
      update: Date.now(),
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <Header
          containerStyle={styles.header}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          leftComponent={
            <TouchableOpacity
              onPress={() => {
                navigation.toggleDrawer();
              }}
            >
              <View>
                <Icon name={"menu"} type={"mdiMenu"} size={30} color="#fff" />
              </View>
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("VehicleStatus_header")}</Text>
          }
        />
        <FlatList
          style={styles.flatListContainer}
          data={global.MY_VEHICLES}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {
                this.get_data();
              }}
            />
          }
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: d }) => {
            return (
              <View style={styles.listContainerMyBook}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.rendTouch}
                  onPress={() => {
                    // if (d.is_booked == 1) {
                    //   showMessage({
                    //     message: "Vehicle already Booked.",
                    //     type: "danger",
                    //   });
                    // } else {
                    global.ADD_BOOKING_4_DATA[16] = "";
                    global.ADD_BOOKING_4_DATA[0] = d;
                    navigation.navigate("select_plans");
                    // }
                  }}
                >
                  <View style={styles.touchBtmView}>
                    <Image
                      source={{ uri: d.make_picture }}
                      style={styles.audiImgV}
                    />
                    <View style={styles.rightViewStatus}>
                      <Text style={styles.companyNames}>{d.modal_name}</Text>
                      <Text style={styles.modelName}>{d.plate_number}</Text>
                      <Text style={styles.modelName}>{d.type}</Text>
                      <Text style={styles.modelName}>{d.country_name}</Text>
                    </View>
                  </View>
                  <Icon
                    name="chevron-right"
                    size={32}
                    style={styles.rightIcon}
                    color={global.COLOR.PRIMARY_LIGHT}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ImageBackground>
    );
  }
}
