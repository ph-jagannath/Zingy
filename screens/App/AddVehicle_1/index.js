import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import down from "../../../assets/down.png";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header, Overlay } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import * as ImagePicker from "expo-image-picker";

export default class AddVehicle_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plateNumber: "",
      country: "",
      vehicle_image: "",
      upload_visible: false,
    };
  }

  // Toggle camera options
  chooseUpload = () => {
    this.setState({
      upload_visible: !this.state.upload_visible,
    });
  };

  // Image Picker function
  _pickImage = async (v) => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    this.chooseUpload();
    let option =
      v == "camera"
        ? ImagePicker.launchCameraAsync
        : ImagePicker.launchImageLibraryAsync;
    let result = await option({
      quality: 0.2,
    });

    if (!result.cancelled) {
      this.setState({
        vehicle_image: result.uri,
      });
    }
  };

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
      global.ADD_VEHICLE_DATA[9] = this.state.vehicle_image;
      this.props.navigation.navigate("AddVehicle_2");
    }
  };

  render() {
    const { navigation } = this.props;
    const { plateNumber, country, vehicle_image, upload_visible } = this.state;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        {/* header */}
        <>
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
        </>
        <ScrollView style={styles.containerMybooking}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              this.chooseUpload();
            }}
          >
            <Image
              source={{
                uri:
                  vehicle_image !== ""
                    ? vehicle_image
                    : global.ASSETS.SELECT_VEHICLE_IMAGE,
              }}
              style={styles.empImg}
              resizeMode={"cover"}
            />
          </TouchableOpacity>

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
        {/* choose upload */}
        <>
          <Overlay
            overlayStyle={styles.overlay}
            containerStyle={styles.overlayContainer}
            isVisible={upload_visible}
            transparent={true}
            width={global.CONSTANT.WIDTH - 40}
            height={170}
            animationType="fade"
            onRequestClose={this.chooseUpload}
            onBackdropPress={this.chooseUpload}
          >
            <View>
              <Text style={styles.overlayTitle}>{t("choose_upload")}</Text>
              <View style={styles.distanceContainer}>
                {/* Files Button */}
                <TouchableOpacity
                  onPress={() => {
                    this._pickImage("files");
                  }}
                  style={styles.durationContainer}
                >
                  <Icon
                    iconStyle={styles.modelIcon}
                    name="file-image"
                    type="material-community"
                    color={global.COLOR.PRIMARY_DARK}
                    size={35}
                  />

                  <Text style={styles.overlayText}>Library</Text>
                </TouchableOpacity>
                {/* Camera Button */}
                <TouchableOpacity
                  onPress={() => {
                    this._pickImage("camera");
                  }}
                  style={styles.durationContainer}
                >
                  <Icon
                    iconStyle={styles.modelIcon}
                    name="camera"
                    type="material-community"
                    color={global.COLOR.PRIMARY_DARK}
                    size={35}
                  />
                  <Text style={styles.overlayText}>{"Camera"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Overlay>
        </>
      </ImageBackground>
    );
  }
}
