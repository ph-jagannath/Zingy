import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import down from "../../../assets/down.png";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import italy from "../../../assets/italy.png";

export default class AddVehicle_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: false,
      make: false,
      year: false,
      color: false,
      plateNumber: "686",
      plateCode: "DHH",
    };
  }

  search = (header) => {
    this.props.navigation.navigate("SearchEditVehicle", {
      header: header,
    });
  };

  onSearch = () => {
    console.warn("State");
    this.setState();
  };
  render() {
    const { navigate } = this.props.navigation;
    const { model, color, year, make } = this.state;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="chevron-left"
                size={32}
                style={styles.leftIcon}
                color={global.COLOR.white}
              />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("vehicle_details")}</Text>
          }
        />

        <ScrollView style={styles.containerMybooking}>
          <View style={styles.underScroll}>
            <Image
              source={global.ASSETS.EMP}
              style={styles.empImg}
              resizeMode={"cover"}
            />
          </View>
          {/* Make */}
          <View style={styles.TopViewAddVecle}>
            <Text style={styles.outerText}>{t("addV_make")}</Text>
            <View style={styles.borderViewAddVehi}>
              <Text style={styles.category}>{global.ADD_VEHICLE_DATA[1]}</Text>
              <Image source={down} style={styles.imgForword} />
            </View>
          </View>
          {/* Model */}

          <View style={styles.TopViewAddVecle}>
            <Text style={styles.outerText}>{t("addV_model")}</Text>
            <View style={styles.borderViewAddVehi}>
              <Text style={styles.category}>{global.ADD_VEHICLE_DATA[3]}</Text>
              <Image source={down} style={styles.imgForword} />
            </View>
          </View>

          {/* Year */}

          <View style={styles.TopViewAddVecle}>
            <Text style={styles.outerText}>{t("addV_year")}</Text>
            <View style={styles.borderViewAddVehi}>
              <Text style={styles.category}>{global.ADD_VEHICLE_DATA[4]}</Text>
              <Image source={down} style={styles.imgForword} />
            </View>
          </View>

          {/* Color */}

          <View style={styles.TopViewAddVecle}>
            <Text style={styles.outerText}>{t("addV_color")}</Text>
            <View style={styles.borderViewAddVehi}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.category}>
                  {global.ADD_VEHICLE_DATA[5]}
                </Text>
                <Icon
                  name="fiber-manual-record"
                  size={30}
                  color={global.ADD_VEHICLE_DATA[5]}
                />
              </View>

              <Image source={down} style={styles.imgForword} />
            </View>
          </View>

          <View style={styles.borderViewEditV}>
            <Text style={styles.numText}>{global.ADD_VEHICLE_DATA[8]}</Text>
          </View>

          {/* Emirate */}
          <View style={styles.TopViewAddVecle}>
            <Text style={styles.outerText}>{t("Emirate")}</Text>
            <View style={styles.borderViewAddVehi}>
              <Text style={styles.category}>{global.ADD_VEHICLE_DATA[6]}</Text>
              <Image source={down} style={styles.imgForword} />
            </View>
          </View>
          {/* Plate Number */}
          <View style={styles.TopViewAddVecle}>
            <Text style={styles.outerText}>{t("plateNumber")}</Text>
            <View style={styles.borderViewAddVehi}>
              <Text style={styles.category}>{global.ADD_VEHICLE_DATA[8]}</Text>
              <Image source={down} style={styles.imgForword} />
            </View>
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.add_button}
          >
            <Text style={styles.add_button_Text}>{t("save")}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
