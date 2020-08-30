import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import { api_get_make } from "../../../utils/Api";
import { showMessage } from "react-native-flash-message";

export default class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.get_data();
    this.state = {
      model: "",
      make: "",
      year: "",
      color: "",
    };
  }

  get_data() {
    api_get_make().then((r) => {
      this.update();
    });
  }
  update() {
    this.setState({
      update: Date.now(),
    });
  }

  set_make = (d) => {
    this.setState({
      make: d.name,
      model: "",
    });
    global.ADD_VEHICLE_DATA[0] = d.id;
    global.ADD_VEHICLE_DATA[1] = d.name;
    global.ADD_VEHICLE_DATA[2] = "";
    global.ADD_VEHICLE_DATA[3] = "";
  };

  set_model = (d) => {
    this.setState({
      model: d.name,
    });
    global.ADD_VEHICLE_DATA[2] = d.id;
    global.ADD_VEHICLE_DATA[3] = d.name;
  };

  set_year = (d) => {
    this.setState({
      year: d.name,
    });
    global.ADD_VEHICLE_DATA[4] = d.name;
  };

  set_color = (d) => {
    this.setState({
      color: d.name,
    });
    global.ADD_VEHICLE_DATA[5] = d.name;
  };

  render() {
    const { model, color, year, make } = this.state;
    const { navigation } = this.props;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="chevron-left" size={32} color={global.COLOR.white} />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("addV_AddVehicle")}</Text>
          }
        />

        <ScrollView
          style={styles.containerMybooking}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container2}>
            <Text style={styles.addText}>Please Add Your Vehicle Details</Text>
            {/* Make */}
            <View style={styles.TopViewAddVecle}>
              <Text style={styles.outerText}>{t("addV_make")}</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.borderViewAddVehi}
                onPress={() => {
                  const list = global.MAKE_MODAL.map((e) => e.Make);
                  if (list.length > 0) {
                    navigation.navigate("SearchVehicle", {
                      header: "Make",
                      list,
                      onSelectMake: this.set_make,
                    });
                  } else {
                    showMessage({
                      message: "No Make available. Try again Later.",
                      type: "warning",
                    });
                  }
                }}
              >
                <Text style={styles.category}>
                  {make == "" ? "Select Make" : make}
                </Text>

                <Image source={global.ASSETS.DOWN} style={styles.imgForword} />
              </TouchableOpacity>
            </View>
            {/* Model */}

            <View style={styles.TopViewAddVecle}>
              <Text style={styles.outerText}>{t("addV_model")}</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.borderViewAddVehi}
                onPress={() => {
                  const list = global.MAKE_MODAL.filter(
                    (i) => i.Make.id == global.ADD_VEHICLE_DATA[0]
                  ).map((e) => e.VehicleModel)[0];

                  if (list.length > 0) {
                    navigation.navigate("SearchVehicle", {
                      header: "Model",
                      list,
                      onSelectModel: this.set_model,
                    });
                  } else {
                    showMessage({
                      message: "No Model available. Try again Later.",
                      type: "warning",
                    });
                  }
                }}
              >
                <Text style={styles.category}>
                  {model == "" ? "Select Model" : model}
                </Text>
                {
                  <Image
                    source={global.ASSETS.DOWN}
                    style={styles.imgForword}
                  />
                }
              </TouchableOpacity>
            </View>

            {/* Year */}

            <View style={styles.TopViewAddVecle}>
              <Text style={styles.outerText}>{t("addV_year")}</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.borderViewAddVehi}
                onPress={() => {
                  const list = global.ALL_YEARS.map((i) => {
                    return { name: i };
                  }).sort((a, b) => b.name - a.name);
                  navigation.navigate("SearchVehicle", {
                    header: "Year",
                    list,
                    onSelectYear: this.set_year,
                  });
                }}
              >
                <Text style={styles.category}>
                  {year == "" ? "Select Year" : year}
                </Text>

                <Image source={global.ASSETS.DOWN} style={styles.imgForword} />
              </TouchableOpacity>
            </View>

            {/* Color */}

            <View style={styles.TopViewAddVecle}>
              <Text style={styles.outerText}>{t("addV_color")}</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.borderViewAddVehi}
                onPress={() => {
                  const list = global.ALL_COLORS.map((i) => {
                    return { name: i };
                  });
                  navigation.navigate("SearchVehicle", {
                    header: "Color",
                    list,
                    onSelectColor: this.set_color,
                  });
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.category}>
                    {color == "" ? "Select Color" : color}
                  </Text>
                  <Icon
                    name="fiber-manual-record"
                    size={30}
                    color={color == "" ? "transparent" : color.toLowerCase()}
                  />
                </View>
                <Image source={global.ASSETS.DOWN} style={styles.imgForword} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View style={styles.touchVIewAddVeh}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("App")}
            style={styles.touchNext}
          >
            <Text style={styles.loginText}>{t("addV_next")}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
