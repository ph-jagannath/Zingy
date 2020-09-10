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
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import * as Permissions from "expo-permissions";
import Geocode from "react-geocode";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import global from "../../../utils/global";
import {
  api_get_plan_list,
  api_get_locations,
  api_get_plan_list_zone,
} from "../../../utils/Api";
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

      marginBottom: 1,
      loading: false,
      reRender: true,
      key: 0,
      tracksViewChanges: true,
      type: "home",
      lat: "",
      lng: "",
      lat_delta: 0.006,
      lng_delta: 0.003,
      address: "",
    };
  }

  setLoc = (data, details) => {
    this.setState({
      loc: data.description,
      modalVisible: !this.state.modalVisible,
    });
    console.log("Data and details ", data, details);
  };
  componentDidMount() {
    this._getLocationAsync();
    api_get_locations();
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
    this.get_address(location.coords.latitude, location.coords.longitude);
  };

  handleOnNavigateBack = (d) => {
    this.setState({
      address: d.name + ", " + d.formatted_address,
      lat: d.geometry.location.lat,
      lng: d.geometry.location.lng,
      key: Date.now(),
      reRender: false,
      marginBottom: 1,
    });
    const region = {
      latitude: d.geometry.location.lat,
      longitude: d.geometry.location.lng,
      latitudeDelta: 0.012,
      longitudeDelta: 0.01,
    };
    this.map.animateToRegion(region, 500);
    setTimeout(() => {
      this.setState({ reRender: true });
    }, 1000);
  };

  get_address = (lat, lng) => {
    Geocode.setApiKey(global.CONSTANT.PLACESAPI);
    Geocode.setLanguage("en");
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        // console.log("address", response.results[0].formatted_address);
        this.setState({
          lat,
          lng,
          address: response.results[0].formatted_address,
        });
        const region = {
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.012,
          longitudeDelta: 0.01,
        };
        this.map.animateToRegion(region, 500);
        // console.log(global.ADD_BOOKING_4_DATA[0]);
        api_get_plan_list_zone({
          lat,
          lng,
          type: global.ADD_BOOKING_4_DATA[0].type,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  _onMapReady = () => this.setState({ marginBottom: 0 });

  render() {
    const {
      textAddress,
      loc,
      lat,
      lat_delta,
      lng,
      lng_delta,
      marginBottom,
      loading,
      reRender,
      tracksViewChanges,
      address,
    } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          leftComponent={
            <TouchableOpacity
              onPress={() => navigation.goBack()}
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
          {/* map  */}
          <>
            <MapView
              ref={(map) => (this.map = map)}
              style={{
                flex: 1,
                // marginBottom: marginBottom,
              }}
              // key={key}
              // onMapReady={this._onMapReady}
              showsUserLocation={false}
              showsCompass={false}
              moveOnMarkerPress={false}
              cacheEnabled={false}
              showsMyLocationButton={false}
              liteMode={false}
              scrollEnabled={true}
              zoomEnabled={true}
              zoomTapEnabled={true}
              pitchEnabled={true}
              provider="google"
              initialRegion={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: lat_delta,
                longitudeDelta: lng_delta,
              }}
              // onRegionChangeComplete={(region) => {
              //   reRender && this.get_address(region.latitude, region.longitude);
              // }}
            />
          </>
          {/* map pin */}
          <>
            {/* Map Marker location picker */}
            <View style={styles.map_pin_marker}>
              <Image
                source={global.ASSETS.MAP_PIN}
                onLoad={this.stopTrackingViewChanges}
                fadeDuration={0}
                style={styles.map_pin_marker_image}
              />
            </View>
          </>
          {/* my location icon */}
          {/* <>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                this._getLocationAsync();
              }}
              style={styles.map_my_location}
            >
              <Icon
                size={28}
                name="crosshairs-gps"
                type="material-community"
                color="#fff"
              />
            </TouchableOpacity>
          </> */}

          {/* search bar */}
          <View style={styles.locationTView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("location_search", {
                  onNavigateBack: this.handleOnNavigateBack,
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
              <Text style={styles.locationT}>{address}</Text>
            </TouchableOpacity>
          </View>
          {/* service bar */}
          {/* <View style={styles.btmViewDacWashLocation}>
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
          </View> */}
          <View style={styles.listView}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={global.PLANS_LIST_ZONE}
              renderItem={({ item, index }) => {
                return (
                  <View>
                    <TouchableOpacity
                      // onPress={() => this.props.navigation.navigate("Summary")}
                      style={[
                        styles.touchAppClrView,
                        {
                          backgroundColor:
                            index === 0
                              ? global.COLOR.PRIMARY_LIGHT
                              : global.COLOR.white,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.standrd,
                          {
                            color:
                              index === 0
                                ? global.COLOR.white
                                : global.COLOR.black,
                          },
                        ]}
                      >
                        {item.standard}
                      </Text>
                      <Text
                        style={[
                          styles.priceDacwash,
                          {
                            color:
                              index === 0
                                ? global.COLOR.white
                                : global.COLOR.black,
                          },
                        ]}
                      >
                        {item.price}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
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
        </View>
      </View>
    );
  }
}
