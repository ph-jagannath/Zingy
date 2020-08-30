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
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import down from "../../assets/down.png";
import styles from "../../styles/app/editVehicle_styles";
import global from "../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import italy from "../../assets/italy.png";

export default class EditVehicle extends Component {
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
              <Icon
                name="chevron-left"
                size={32}
                style={styles.leftIcon}
                color={global.COLOR.white}
              />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("editV_header")}</Text>
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
          <KeyboardAvoidingView enabled style={styles.container3}>
            {/* Make */}
            <View style={styles.TopViewAddVecle}>
              <Text style={styles.outerText}>{t("addV_make")}</Text>
              <TouchableOpacity
                style={styles.borderViewAddVehi}
                onPress={() => this.search(t("addV_make"))}
              >
                <Text style={styles.category}>Alfa Romeo</Text>
                {<Image source={down} style={styles.imgForword} />}
              </TouchableOpacity>
            </View>
            {/* Model */}

            <View style={styles.TopViewAddVecle}>
              <Text style={styles.outerText}>{t("addV_model")}</Text>
              <TouchableOpacity
                style={styles.borderViewAddVehi}
                onPress={() => this.search(t("addV_model"))}
              >
                <Text style={styles.category}>Alfa Romeo Giulietta</Text>
                {<Image source={down} style={styles.imgForword} />}
              </TouchableOpacity>
            </View>

            {/* Year */}

            <View style={styles.TopViewAddVecle}>
              <Text style={styles.outerText}>{t("addV_year")}</Text>
              <TouchableOpacity
                style={styles.borderViewAddVehi}
                // onPress={() => this.setState({ year: !year })}
              >
                <Text style={styles.category}>2019</Text>
                {<Image source={down} style={styles.imgForword} />}
              </TouchableOpacity>
            </View>

            {/* Color */}

            <View style={styles.TopViewAddVecle}>
              <Text style={styles.outerText}>{t("addV_color")}</Text>
              <TouchableOpacity
                style={styles.borderViewAddVehi}
                // onPress={() => this.setState({ color: !color })}
              >
                <Text style={styles.categoryClr}>Clear</Text>
                {<Image source={down} style={styles.imgForword} />}
              </TouchableOpacity>
            </View>

            <View style={styles.borderViewEditV}>
              <Text style={styles.codeText}>{this.state.plateCode}</Text>

              <Image
                source={italy}
                style={styles.itlyEditV}
                resizeMode={"cover"}
              />
              <Text style={styles.numText}>{this.state.plateNumber}</Text>
            </View>

            {/* Emirate */}
            <View style={styles.TopViewAddVecle}>
              <Text style={styles.outerText}>{t("Emirate")}</Text>
              <View
                style={styles.borderViewAddVehi}
                // onPress={() => this.setState({ make: !make })}
              >
                <Text style={styles.category}>Italy</Text>
                {<Image source={down} style={styles.imgForword} />}
              </View>
            </View>
            {/* Plate Code*/}

            <View style={styles.TopViewAddVecle}>
              <Text style={styles.outerText}>{t("plateCode")}</Text>
              <View style={styles.borderViewAddVehi}>
                <TextInput
                  style={styles.inputSearchV}
                  // autoFocus={true}
                  value={this.state.plateCode}
                  ref={(ref) => {
                    this.plateCode = ref;
                  }}
                  onChangeText={(text) => this.setState({ plateCode: text })}
                  maxLength={3}
                  keyboardType="default"
                  returnKeyType="next"
                  placeholder={this.state.plateCode}
                />
                {<Image source={down} style={styles.imgForword} />}
              </View>
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
                  value={this.state.plateNumber}
                  onChangeText={(text) => this.setState({ plateNumber: text })}
                  maxLength={3}
                  keyboardType="default"
                  returnKeyType="done"
                  placeholder={this.state.plateNumber}
                />
                {<Image source={down} style={styles.imgForword} />}
              </View>
            </View>
          </KeyboardAvoidingView>

          <View style={styles.touchVIewEditV}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.touchNext}
            >
              <Text style={styles.loginText}>{t("save")}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
