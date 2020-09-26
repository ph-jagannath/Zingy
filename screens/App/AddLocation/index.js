import React, { Component } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import Geocode from "react-geocode";
import MapView from "react-native-maps";
import { api_add_location, helper_my_location } from "../../../utils/Api";

export default class AddLocation extends Component {
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
    };
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

  get_address = (lat, lng) => {
    Geocode.setApiKey(global.CONSTANT.PLACESAPI);
    Geocode.setLanguage("en");
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        console.log("address", response.results[0].formatted_address);
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

  validate() {
    const { action_type, onAddLocation } = this.props.route.params;
    console.log(action_type);
    if (action_type !== "add") {
      this.setState({
        type: action_type,
      });
      setTimeout(() => {
        api_add_location(this.state).then((r) => {
          r && (onAddLocation(), this.props.navigation.goBack());
        });
      }, 120);
    } else {
      api_add_location(this.state).then((r) => {
        r && (onAddLocation(), this.props.navigation.goBack());
      });
    }
  }

  render() {
    const {
      type,
      address,
      lat,
      lng,
      lat_delta,
      lng_delta,
      marginBottom,
      key,
      reRender,
    } = this.state;
    const { navigation } = this.props;
    const { action_type } = this.props.route.params;
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
            <Text style={styles.headerText}>
              {action_type == "home"
                ? t("addLocation_home")
                : action_type == "work"
                ? t("addLocation_work")
                : action_type == "other"
                ? t("addLocation_other")
                : t("location_addLocation")}
            </Text>
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
              onRegionChangeComplete={(region) =>
                reRender
                  ? this.get_address(region.latitude, region.longitude)
                  : null
              }
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
          <>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={async () => {
                const r = await helper_my_location();
                if (r) {
                  const region = {
                    latitude: global.CONSTANT.LAT,
                    longitude: global.CONSTANT.LNG,
                    latitudeDelta: 0.012,
                    longitudeDelta: 0.01,
                  };
                  this.map.animateToRegion(region, 500);
                }
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
          </>

          {/* location type */}
          <>
            {action_type == "add" && (
              <View style={styles.catAddLocation}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => this.setState({ type: "home" })}
                  style={[
                    styles.homeAddLocation,
                    {
                      backgroundColor:
                        type == "home" ? global.COLOR.PRIMARY_LIGHT : "#fff",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.homeText,
                      {
                        color: type == "home" ? "#fff" : "#000",
                      },
                    ]}
                  >
                    {t("side_menu_home")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => this.setState({ type: "work" })}
                  style={[
                    styles.homeAddLocation,
                    {
                      backgroundColor:
                        type == "work" ? global.COLOR.PRIMARY_LIGHT : "#fff",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.homeText,
                      {
                        color: type == "work" ? "#fff" : "#000",
                      },
                    ]}
                  >
                    {t("addLocation_work")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => this.setState({ type: "other" })}
                  style={[
                    styles.homeAddLocation,
                    {
                      backgroundColor:
                        type == "other" ? global.COLOR.PRIMARY_LIGHT : "#fff",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.homeText,
                      {
                        color: type == "other" ? "#fff" : "#000",
                      },
                    ]}
                  >
                    {t("addLocation_other")}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </>

          {/* search bar */}
          <>
            <View style={styles.locationTView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("add_location_search", {
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
          </>
        </View>

        {/* add button */}
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.validate()}
            style={styles.add_button}
          >
            <Text style={styles.add_button_Text}>
              {action_type == "add" ? t("location_addLocation") : t("save")}
            </Text>
          </TouchableOpacity>
        </>
      </View>
    );
  }
}
