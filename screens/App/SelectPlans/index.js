import React, { Component } from "react";
import {
  ScrollView,
  Modal,
  FlatList,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import styles from "./styles";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Permissions from "expo-permissions";
import Geocode from "react-geocode";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import global from "../../../utils/global";
const data = [
  {
    standard: `Standard Cars`,
    price: `52.00AUD`,
  },
  {
    standard: `Standard Cars`,
    price: `52.00AUD`,
  },
  {
    standard: `Standard Cars`,
    price: `52.00AUD`,
  },
  {
    standard: `Standard Cars`,
    price: `52.00AUD`,
  },
  {
    standard: `Standard Cars`,
    price: `52.00AUD`,
  },
  {
    standard: `Standard Cars`,
    price: `52.00AUD`,
  },
];
export default class SelectPlans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      loc: "",
      mapRegion: null,
      hasLocationPermissions: false,
      locationResult: null,
      textAddress: null,
    };
  }
  renderList = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          // onPress={() => this.props.navigation.navigate("Summary")}
          style={[
            styles.touchAppClrView,
            {
              backgroundColor:
                index === 0 ? global.COLOR.PRIMARY_LIGHT : global.COLOR.white,
            },
          ]}
        >
          <Text
            style={[
              styles.standrd,
              { color: index === 0 ? global.COLOR.white : global.COLOR.black },
            ]}
          >
            {item.standard}
          </Text>
          <Text
            style={[
              styles.priceDacwash,
              { color: index === 0 ? global.COLOR.white : global.COLOR.black },
            ]}
          >
            {item.price}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  setLoc = (data, details) => {
    this.setState({
      loc: data.description,
      modalVisible: !this.state.modalVisible,
    });
    console.log("Data and details ", data, details);
  };
  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied",
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }
    let location = await Location.getCurrentPositionAsync();
    // this.setState({ locationResult: JSON.stringify(location)});
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    });
    Geocode.setApiKey("AIzaSyCdIiqraik9uJkeLdoarnKms9voK1Q94pk");
    Geocode.setLanguage("en");
    Geocode.enableDebug();
    Geocode.fromLatLng(
      location.coords.latitude,
      location.coords.longitude
    ).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
        this.setState({ textAddress: address });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  render() {
    const { textAddress, loc } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
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
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.leftIcon}
            >
              <Icon name="chevron-left" size={30} color={global.COLOR.white} />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("dacwash_header")}</Text>
          }
        />
        <View style={styles.container}>
          <MapView region={this.state.mapRegion} style={styles.container} />
          <View style={styles.locationTView}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  check: true,
                  modalVisible: !this.state.modalVisible,
                });
              }}
              style={styles.touchRow}
            >
              <Icon
                name={"search"}
                type={"mdiMagnify"}
                style={styles.searchIcon}
                size={16}
                color="#000"
              />
              <Text style={styles.locationT}>
                {loc !== "" ? loc : textAddress}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btmViewDacWashLocation}>
            <View style={styles.apClrView}>
              <Image
                source={global.ASSETS.CAR}
                resizeMode={"contain"}
                style={styles.imgCarDacWash}
              />
              <Image
                source={global.ASSETS.CLEANING}
                resizeMode={"contain"}
                style={styles.imgCarDacWash}
              />
              <Text style={styles.inOutText}>{t("dacwash_insideOutSide")}</Text>
            </View>
          </View>
          <View style={styles.listView}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({ item, index }) => this.renderList({ item, index })}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.rowView1}>
              <TouchableOpacity
                onPress={() => navigate("Summary")}
                style={styles.washNowView}
              >
                <Text style={styles.washNow}>{t("dacwash_washNow")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigate("Summary")}
                style={styles.washLaterView}
              >
                <Text style={styles.washLText}>{t("dacwash_washlater")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigate("Summary")}
                style={styles.washLaterView}
              >
                <Text style={styles.pack}>{t("side_menu_Packages")}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
          >
            <View style={styles.container}>
              <View style={styles.searchModal}>
                <View style={styles.searchLeftIcon}>
                  <Icon
                    onPress={() =>
                      this.setState({
                        modalVisible: false,
                        loc: "",
                      })
                    }
                    type={"mdiArrowLeft"}
                    name="arrow-back"
                    size={25}
                    color="#000"
                  />
                </View>
                <View style={styles.searchRightIcon}>
                  {loc.length !== 0 ? (
                    <Icon
                      onPress={() => {
                        this.setState({ loc: "" });
                        this.textInput.clear();
                      }}
                      type={"midClose"}
                      name="clear"
                      size={25}
                      color="#000"
                    />
                  ) : null}
                </View>
              </View>
              <GooglePlacesAutocomplete
                minLength={2}
                listViewDisplayed="auto"
                autoFocus={true}
                returnKeyType={"search"}
                fetchDetails={true}
                query={{
                  key: "AIzaSyCdIiqraik9uJkeLdoarnKms9voK1Q94pk",
                  language: "en",
                }}
                textInputProps={{
                  onChangeText: (loc) => this.setState({ loc: loc }),
                  clearButtonMode: "never",
                  ref: (input) => {
                    this.textInput = input;
                  },
                }}
                onPress={(data, details = null) => {
                  console.log("data from vsdfsfdssf", data);
                  this.setLoc(data, details);
                  console.log("Details   : ", data.description);
                }}
                styles={{
                  textInputContainer: styles.geoPlacetextInputContainer,
                  textInput: styles.geoPlaceTextInput,
                  predefinedPlacesDescription: styles.geoPlaceDescrip,
                  description: styles.geoPlaceDescription,
                  listView: styles.geoPlacelistView,
                }}
              />
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
