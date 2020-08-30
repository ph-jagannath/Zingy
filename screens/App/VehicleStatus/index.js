import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Header, Icon } from "react-native-elements";
import styles from "./styles";
import audi from "../../../assets/audi.png";
import { t } from "i18n-js";
import global from "../../../utils/global";
import { api_get_vehicle } from "../../../utils/Api";

const statusCode = [
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
  {
    companyLogo: "sa",
    companyName: "SsangYong Action Sports",
    gadiModal: "6TT-855",
  },
];
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
          contentContainerStyle={styles.flatListContainer}
          data={global.MY_VEHICLES}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: d }) => {
            return (
              <View style={styles.listContainerMyBook}>
                <TouchableOpacity
                  style={styles.rendTouch}
                  onPress={() => navigation.navigate("Dacwash")}
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
