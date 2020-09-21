import { t } from "i18n-js";
import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Avatar, Header, Icon, Rating } from "react-native-elements";
import MapView from "react-native-maps";
import global from "../../../utils/global";
import styles from "./styles";
import * as Linking from "expo-linking";
import { api_get_booking_details } from "../../../utils/Api";
export default class BookingTrack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marginBottom: 1,
      loading: false,
      key: 0,
      tracksViewChanges: true,
      lat: global.BOOKING_DETAILS.booking_lat,
      lng: global.BOOKING_DETAILS.booking_long,
      lat_delta: 0.006,
      lng_delta: 0.003,
    };
  }

  render() {
    const { lat, lat_delta, lng, lng_delta } = this.state;
    const { navigation } = this.props;
    const d = global.BOOKING_DETAILS;
    console.log(d);
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
                style={styles.touchLeft}
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon
                  name="chevron-left"
                  size={32}
                  color={global.COLOR.white}
                />
              </TouchableOpacity>
            }
            centerComponent={
              <Text style={styles.headerText}>
                {t("bookingDetails_header")}
              </Text>
            }
          />
        </>
        {/* Map */}
        <>
          <MapView
            ref={(map) => (this.map = map)}
            style={{
              flex: 1,
              // marginBottom: marginBottom,
            }}
            // key={key}
            onMapReady={this._onMapReady}
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
              latitude: Number(lat),
              longitude: Number(lng),
              latitudeDelta: lat_delta,
              longitudeDelta: lng_delta,
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: Number(d.user_lat),
                longitude: Number(d.user_lon),
              }}
              tracksViewChanges={this.state.tracksViewChanges}
              // zIndex={i++}
            >
              <View>
                <Image
                  source={global.ASSETS.MAP_PIN}
                  onLoad={this.stopTrackingViewChanges}
                  fadeDuration={0}
                  style={styles.map_pin_marker_image_sp}
                />
              </View>
            </MapView.Marker>
          </MapView>
        </>
        {/* details bar */}
        <>
          <View style={styles.status_bar}>
            <Text style={styles.status_bar_text}>
              {d.status == "0"
                ? "Initiated"
                : d.status == "1"
                ? "Scheduled"
                : d.status == "2"
                ? "Completed"
                : d.status == "3"
                ? "Canceled"
                : d.status == "4"
                ? "Refunded"
                : d.status == "5"
                ? "Start Wash"
                : d.status == "6"
                ? "Cancelled"
                : d.status == "7"
                ? "Cancelled"
                : d.status == "8"
                ? "Cancelled"
                : d.status == "9"
                ? "Reached"
                : ""}
            </Text>
          </View>
          {/* washer details */}
          <View style={styles.washer_details_container}>
            <Avatar source={{ uri: d.img }} size={50} />
            <View style={styles.name_container}>
              <Text style={styles.name_text}>{d.first_name}</Text>
              <View style={styles.rating_container}>
                <Rating
                  imageSize={20}
                  readonly
                  startingValue={d.rating}
                  style={styles.rating}
                />
                <Text>{d.rating}/5</Text>
              </View>
            </View>
            <View style={styles.right_container}>
              <Icon
                name="phone"
                color={global.COLOR.PRIMARY_DARK}
                raised
                size={15}
                reverse
                containerStyle={styles.phone}
                onPress={() => {
                  Linking.openURL("tel:" + d.mobile);
                }}
              />
              <Text
                style={styles.name_text}
                onPress={async () => {
                  const r = await api_get_booking_details(d.booking_id);
                  r &&
                    navigation.navigate("booking_detail", {
                      is_rated: 1,
                    });
                }}
              >
                View Details
              </Text>
            </View>
          </View>
        </>
      </View>
    );
  }
}
