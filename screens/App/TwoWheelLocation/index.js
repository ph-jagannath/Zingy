import React, { Component } from "react";
import { FlatList, Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { t } from "i18n-js";
import { Icon, Header, Overlay } from "react-native-elements";
import * as Permissions from "expo-permissions";
import Geocode from "react-geocode";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import global from "../../../utils/global";
import {
  api_get_locations,
  api_get_plan_list_zone,
  api_get_nearby_sp,
  api_get_package_avail,
  api_get_scooter_price,
} from "../../../utils/Api";
import { showMessage } from "react-native-flash-message";
export default class TwoWheelLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLocationPermissions: false,
      locationResult: null,

      marginBottom: 1,
      loading: false,
      reRender: true,
      key: 0,
      tracksViewChanges: true,
      type: "home",
      lat: global.CONSTANT.LAT,
      lng: global.CONSTANT.LNG,
      lat_delta: 0.006,
      lng_delta: 0.003,
      address: "",
      selected_plan: "",
      add_location_popup: false,
      package_avail: false,
    };
  }

  componentDidMount() {
    api_get_locations();
  }

  toggle_add_location_popup() {
    this.setState({
      add_location_popup: !this.state.add_location_popup,
    });
  }

  handleOnNavigateBack = (d) => {
    this.setState({
      address: d.name + ", " + d.formatted_address,
      lat: d.geometry.location.lat,
      lng: d.geometry.location.lng,
      key: Date.now(),
      // reRender: false,
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

  get_address = async (lat, lng) => {
    api_get_nearby_sp({
      lat,
      lng,
    }).then(() => this.update());
    Geocode.setApiKey(global.CONSTANT.PLACESAPI);
    Geocode.setLanguage("en");
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        this.setState({
          lat,
          lng,
          address: response.results[0].formatted_address,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  _onMapReady = () => this.setState({ marginBottom: 0 });

  update() {
    this.setState({
      update: Date.now(),
    });
  }

  validate(t) {
    const { selected_plan, address, lat, lng } = this.state;
    const { navigation } = this.props;
    if (global.NEARBY_SP.length == 0) {
      showMessage({
        message: "No Nearby Service Provider Available.",
        type: "danger",
      });
    } else {
      global.ADD_BOOKING_4_DATA[2] = address;
      global.ADD_BOOKING_4_DATA[3] = lat;
      global.ADD_BOOKING_4_DATA[4] = lng;
      global.ADD_BOOKING_4_DATA[8] = t;
      api_get_scooter_price().then((r) => {
        if (r) {
          global.ADD_BOOKING_4_DATA[16] = global.SCOOTER_WASH_PRICE;
          navigation.navigate("Summary");
        }
      });
    }
  }

  render() {
    const {
      lat,
      lat_delta,
      lng,
      lng_delta,
      reRender,
      address,
      selected_plan,
      add_location_popup,
      package_avail,
    } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* header */}
        <>
          <Header
            containerStyle={styles.header}
            statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
            backgroundColor={global.COLOR.PRIMARY_LIGHT}
            leftComponent={
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.leftIcon}
              >
                <Icon
                  name="chevron-left"
                  size={30}
                  color={global.COLOR.white}
                />
              </TouchableOpacity>
            }
            centerComponent={
              <Text style={styles.headerText}>{t("dacwash_header")}</Text>
            }
          />
        </>
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
              onRegionChangeComplete={(region) => {
                reRender && this.get_address(region.latitude, region.longitude);
              }}
            >
              {global.NEARBY_SP.length > 0 &&
                global.NEARBY_SP.map((i) => (
                  <MapView.Marker
                    coordinate={{
                      latitude: Number(i.latitude),
                      longitude: Number(i.longitude),
                    }}
                    tracksViewChanges={this.state.tracksViewChanges}
                    title={i.time.toString()}
                    // zIndex={i++}
                  >
                    <View>
                      <Image
                        source={global.ASSETS.MAP_PIN_WASHER}
                        onLoad={this.stopTrackingViewChanges}
                        fadeDuration={0}
                        style={styles.map_pin_marker_image_sp}
                      />
                    </View>
                  </MapView.Marker>
                ))}
            </MapView>
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
          <>
            {/* <TouchableOpacity
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
            </TouchableOpacity> */}
          </>

          {/* maps top items */}
          <>
            <View style={styles.locationTView}>
              {/* search bar */}
              <>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("location_search", {
                      onNavigateBack: this.handleOnNavigateBack,
                    });
                  }}
                  style={styles.search_bar}
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
              </>

              {/* my locations */}
              <>
                <View style={styles.map_address_icon_container}>
                  <Icon
                    name="home"
                    raised
                    size={16}
                    color={global.COLOR.PRIMARY_DARK}
                    onPress={() => {
                      if (
                        global.MY_LOCATIONS.length > 0 &&
                        global.MY_LOCATIONS.filter(
                          (e) => e.UserLocation.type == "home"
                        ).length > 0
                      ) {
                        const home = global.MY_LOCATIONS.filter(
                          (e) => e.UserLocation.type == "home"
                        )[0].UserLocation;
                        this.map.animateToRegion(
                          {
                            latitude: Number(home.latitude),
                            longitude: Number(home.longitude),
                            latitudeDelta: 0.012,
                            longitudeDelta: 0.01,
                          },
                          500
                        );
                      } else {
                        this.toggle_add_location_popup();
                      }
                    }}
                  />
                  <Icon
                    name="work"
                    raised
                    size={16}
                    color={global.COLOR.PRIMARY_DARK}
                    onPress={() => {
                      if (
                        global.MY_LOCATIONS.length > 0 &&
                        global.MY_LOCATIONS.filter(
                          (e) => e.UserLocation.type == "work"
                        ).length > 0
                      ) {
                        const work = global.MY_LOCATIONS.filter(
                          (e) => e.UserLocation.type == "work"
                        )[0].UserLocation;
                        this.map.animateToRegion(
                          {
                            latitude: Number(work.latitude),
                            longitude: Number(work.longitude),
                            latitudeDelta: 0.012,
                            longitudeDelta: 0.01,
                          },
                          500
                        );
                      } else {
                        this.toggle_add_location_popup();
                      }
                    }}
                  />
                </View>
              </>
            </View>
          </>

          {/* plans list */}
          <>
            <View style={styles.listView}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.validate(1)}
                style={styles.add_button}
              >
                <Text style={styles.add_button_Text}>
                  {t("dacwash_washNow")}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        </View>

        {/* add location overlay */}
        <Overlay
          isVisible={add_location_popup}
          animationType="fade"
          overlayStyle={styles.add_location_container}
          onBackdropPress={() => {
            this.toggle_add_location_popup();
          }}
        >
          <View>
            <Text style={styles.add_location_text}>Add Location</Text>
            <Text style={styles.add_location_text}>
              Please save your location
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Location")}
              style={styles.add_button}
            >
              <Text style={styles.add_button_Text}>
                {t("location_addLocation")}
              </Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      </View>
    );
  }
}
