import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import down from "../../../assets/down.png";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import italy from "../../../assets/italy.png";
import { showMessage } from "react-native-flash-message";

export default class AddVehicle_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plateNumber: "",
      country: "",
    };
  }

  set_country = (d) => {
    this.setState({
      country: d.name,
    });
    global.ADD_VEHICLE_DATA[6] = d.name;
    global.ADD_VEHICLE_DATA[7] = d.id;
  };

  validate = () => {
    if (this.state.plateNumber == "") {
      showMessage({
        message: "Please enter plate number.",
        type: "warning",
      });
    } else if (this.state.country == "") {
      showMessage({
        message: "Please choose country.",
        type: "warning",
      });
    } else {
      global.ADD_VEHICLE_DATA[8] = this.state.plateNumber;
      this.props.navigation.navigate("AddVehicle_2");
    }
  };

  render() {
    const { navigation } = this.props;
    const { plateNumber, country } = this.state;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          leftComponent={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-left"
                size={32}
                style={styles.leftIcon}
                color={global.COLOR.white}
              />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("addV_AddVehicle")}</Text>
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

          <View style={styles.borderViewEditV}>
            <Text style={styles.numText}>{plateNumber}</Text>
          </View>

          {/* Emirate */}
          <View style={styles.TopViewAddVecle}>
            <Text style={styles.outerText}>{t("Emirate")}</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.borderViewAddVehi}
              onPress={() => {
                const list = global.MAKE_COUNTRY.map((e) => e.Country);
                console.log(list);

                if (list.length > 0) {
                  navigation.navigate("SearchVehicle", {
                    header: "Country",
                    list,
                    onSelectCountry: this.set_country,
                  });
                } else {
                  showMessage({
                    message: "No Country available. Try again Later.",
                    type: "warning",
                  });
                }
              }}
            >
              <Text style={styles.category}>
                {country == "" ? "Select Country" : country}
              </Text>
              <Image source={down} style={styles.imgForword} />
            </TouchableOpacity>
          </View>

          {/* Plate Number */}
          <View style={styles.TopViewAddVecle}>
            <Text style={styles.outerText}>{t("plateNumber")}</Text>
            <View style={styles.borderViewAddVehi}>
              <TextInput
                style={styles.inputSearchV}
                // autoFocus={true}
                ref={(ref) => {
                  this.plateNumber = ref;
                }}
                value={plateNumber}
                onChangeText={(v) => this.setState({ plateNumber: v })}
                maxLength={10}
                keyboardType="default"
                returnKeyType="done"
                placeholder={"Enter plate number"}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.touchVIewEditV}>
          <TouchableOpacity
            onPress={() => this.validate()}
            style={styles.add_button}
          >
            <Text style={styles.add_button_Text}>{t("addV_next")}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
