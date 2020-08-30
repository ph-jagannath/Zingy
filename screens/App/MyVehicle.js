import React, { Component } from "react";
import { FlatList, Image, Text, StatusBar, View } from "react-native";
import styles from "../../styles/app/myVehicle_styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import global from "../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import audi from "../../assets/audi.png";
const vehicleCode = [
  {
    companyLogo: "audi",
    companyName: "Audi A6",
    gadiModal: "111-222",
  },
  {
    companyLogo: "Mah",
    companyName: "Mahindra Pik-Up",
    gadiModal: "YYY-258",
  },
  {
    companyLogo: "sa",
    companyName: "SsangYong Action Sports",
    gadiModal: "6TT-855",
  },
  {
    companyLogo: "audi",
    companyName: "Audi A6",
    gadiModal: "111-222",
  },
  {
    companyLogo: "Mah",
    companyName: "Mahindra Pik-Up",
    gadiModal: "YYY-258",
  },
];

export default class MyVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderList = ({ item }) => {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.listContainerMyBook}>
        <View style={styles.rendTouch}>
          <View style={styles.horizonView}>
            <Image
              source={audi}
              style={styles.audiImg}
              resizeMode={"contain"}
            />
            <View style={styles.rightViewMyVehicle}>
              <Text style={styles.comName}>{item.companyName}</Text>
              <Text style={styles.modalName}>{item.gadiModal}</Text>
            </View>
          </View>
          <View style={styles.delEdit}>
            <TouchableOpacity onPress={() => navigate("EditVehicle")}>
              <Icon
                name={"edit"}
                type={"mdiPencil"}
                size={20}
                color="#8E0404"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={global.ASSETS.DELETE}
                resizeMode={"center"}
                style={styles.deleteIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.marRight}>
              <Icon
                name="chevron-right"
                size={32}
                color="#6ABC45"
                style={styles.rightIcon}
              />
            </TouchableOpacity>
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
              <Icon name={"menu"} type={"mdiMenu"} size={30} color="#fff" />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("myVehilced_header")}</Text>
          }
          rightComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Notification")}
            >
              <Image source={global.ASSETS.BELL} style={styles.bellS} />
            </TouchableOpacity>
          }
        />
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={vehicleCode}
          renderItem={({ item, index }) => this.renderList({ item, index })}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
