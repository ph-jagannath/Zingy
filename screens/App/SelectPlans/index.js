import React, { Component } from "react";
import { FlatList, Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { t } from "i18n-js";
import { Icon, Header, Overlay } from "react-native-elements";
import Geocode from "react-geocode";
import MapView from "react-native-maps";
import global from "../../../utils/global";
import {
  api_get_locations,
  api_get_plan_list_zone,
  api_get_nearby_sp,
  api_get_package_avail,
} from "../../../utils/Api";
import { showMessage } from "react-native-flash-message";
export default class SelectPlans extends Component {
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
      map_loading: true,
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
    api_get_plan_list_zone({
      lat: d.geometry.location.lat,
      lng: d.geometry.location.lng,
      type: global.ADD_BOOKING_4_DATA[0].type,
    });
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
    setTimeout(() => {
      this.setState({ reRender: true });
    }, 1000);
    this.map.animateToRegion(region, 500);
  };

  get_address = async (lat, lng) => {
    this.setState({ selected_plan: "" });
    api_get_plan_list_zone({
      lat,
      lng,
      type: global.ADD_BOOKING_4_DATA[0].type,
    }).then(() => this.update());
    api_get_package_avail({
      lat,
      lng,
      vehicle_id: global.ADD_BOOKING_4_DATA[0].id,
    }).then((r) => this.setState({ package_avail: r }));
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
    } else if (selected_plan == "") {
      showMessage({
        message: "Select a plan to proceed.",
        type: "danger",
      });
    } else {
      global.ADD_BOOKING_4_DATA[1] = selected_plan;
      global.ADD_BOOKING_4_DATA[2] = address;
      global.ADD_BOOKING_4_DATA[3] = lat;
      global.ADD_BOOKING_4_DATA[4] = lng;
      global.ADD_BOOKING_4_DATA[8] = t;
      navigation.navigate("Summary");
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
              // loadingEnabled={map_loading}
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
          {/* service bar */}
          {selected_plan !== "" && (
            <>
              <View style={styles.btmViewDacWashLocation}>
                <View style={styles.apClrView}>
                  {selected_plan.services.toLowerCase().includes("ext") && (
                    <Image
                      source={global.ASSETS.CAR}
                      resizeMode={"contain"}
                      style={styles.imgCarDacWash}
                    />
                  )}
                  {selected_plan.services.toLowerCase().includes("int") && (
                    <Image
                      source={global.ASSETS.CLEANING}
                      resizeMode={"contain"}
                      style={styles.imgCarDacWash}
                    />
                  )}
                  <Text style={styles.inOutText}>{selected_plan.services}</Text>
                </View>
              </View>
            </>
          )}
          {/* plans list */}
          <>
            <View style={styles.listView}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                  <View style={styles.list_empty_container}>
                    <Text style={styles.list_empty_text}>
                      No Plans Found. Try changing the location.
                    </Text>
                  </View>
                }
                data={global.PLANS_LIST_ZONE}
                renderItem={({ item: p }) => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            selected_plan: p,
                          })
                        }
                        style={[
                          styles.touchAppClrView,
                          {
                            backgroundColor:
                              selected_plan.id === p.id
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
                                selected_plan.id === p.id
                                  ? global.COLOR.white
                                  : global.COLOR.black,
                            },
                          ]}
                        >
                          {p.name}
                        </Text>
                        <Text
                          style={[
                            styles.priceDacwash,
                            {
                              color:
                                selected_plan.id === p.id
                                  ? global.COLOR.white
                                  : global.COLOR.black,
                            },
                          ]}
                        >
                          {global.CONSTANT.CURRENCY} {p.amount}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
              <View style={styles.rowView1}>
                <TouchableOpacity
                  onPress={() => this.validate(1)}
                  style={styles.washNowView}
                >
                  <Text style={styles.washNow}>{t("dacwash_washNow")}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.validate(2)}
                  style={styles.washLaterView}
                >
                  <Text style={styles.washLText}>{t("dacwash_washlater")}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    // if (global.ADD_BOOKING_4_DATA[0].is_package == 1) {
                    //   showMessage({
                    //     message: "Vehicle already has a package.",
                    //     type: "danger",
                    //   });
                    // } else
                    if (!package_avail) {
                      showMessage({
                        message: "No package available for current location.",
                        type: "danger",
                      });
                    } else {
                      global.ADD_BOOKING_4_DATA[2] = address;
                      global.ADD_BOOKING_4_DATA[3] = lat;
                      global.ADD_BOOKING_4_DATA[4] = lng;
                      navigation.navigate("select_package");
                    }
                  }}
                  style={styles.washLaterView}
                >
                  <Text style={styles.pack}>{t("side_menu_Packages")}</Text>
                </TouchableOpacity>
              </View>
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
