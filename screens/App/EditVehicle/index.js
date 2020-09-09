import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import down from "../../../assets/down.png";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import {
  api_add_vehicle,
  api_get_make,
  api_edit_vehicle,
} from "../../../utils/Api";
import { showMessage } from "react-native-flash-message";
import * as ImagePicker from "expo-image-picker";

export default class EditVehicle extends Component {
  constructor(props) {
    super(props);
    this.get_data();
    this.state = {
      make_id: "",
      model_id: "",
      country_id: "",
      vehicle_id: "",
      vehicle_type: "",
      model: "",
      make: "",
      year: "",
      color: "",
      plateNumber: "",
      country: "",
      vehicle_image: "",
      upload_visible: false,
    };
  }
  componentDidMount() {
    const { details: d } = this.props.route.params;
    this.setState({
      make_id: d.make_id,
      make: d.make_name,
      model: d.modal_name,
      model_id: d.modal_id,
      color: d.color.toLowerCase(),
      country_id: d.country_id,
      country: d.country_name,
      plateNumber: d.plate_number,
      year: d.year,
      vehicle_image: d.vehicle_picture,
      vehicle_id: d.id,
      vehicle_type: d.type,
    });
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
      country_id: d.id,
    });
  };

  set_make = (d) => {
    this.setState({
      make: d.name,
      make_id: d.id,
      model: "",
      model_id: "",
    });
  };

  set_model = (d) => {
    this.setState({
      model: d.name,
      model_id: d.id,
      vehicle_type: d.type,
    });
  };

  set_year = (d) => {
    this.setState({
      year: d.name,
    });
  };

  set_color = (d) => {
    this.setState({
      color: d.name.toLowerCase(),
    });
  };

  validate = () => {
    if (this.state.make == "") {
      showMessage({
        message: "Please choose Make.",
        type: "warning",
      });
    } else if (this.state.model == "") {
      showMessage({
        message: "Please choose Model.",
        type: "warning",
      });
    } else if (this.state.year == "") {
      showMessage({
        message: "Please choose Year.",
        type: "warning",
      });
    } else if (this.state.color == "") {
      showMessage({
        message: "Please choose Color.",
        type: "warning",
      });
    } else if (this.state.country == "") {
      showMessage({
        message: "Please choose Country.",
        type: "warning",
      });
    } else if (this.state.plateNumber == "") {
      showMessage({
        message: "Please enter plate number.",
        type: "warning",
      });
    } else {
      api_edit_vehicle(this.state);
    }
  };

  render() {
    const {
      model,
      model_id,
      color,
      year,
      make,
      make_id,
      plateNumber,
      country,
      country_id,
      vehicle_image,
      upload_visible,
    } = this.state;
    const { navigation } = this.props;
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
            <Text style={styles.headerText}>{t("editV_header")}</Text>
          }
        />

        <ScrollView style={styles.containerMybooking}>
          <View>
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
          </View>
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
                const list =
                  make == ""
                    ? []
                    : global.MAKE_MODAL.filter((i) => i.Make.id == make_id).map(
                        (e) => e.VehicleModel
                      )[0];

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
              {<Image source={global.ASSETS.DOWN} style={styles.imgForword} />}
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
                  color={color == "" ? "transparent" : color}
                />
              </View>
              <Image source={global.ASSETS.DOWN} style={styles.imgForword} />
            </TouchableOpacity>
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
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.validate()}
            style={styles.add_button}
          >
            <Text style={styles.add_button_Text}>{t("save")}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
