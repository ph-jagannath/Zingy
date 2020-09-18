import React, { Component } from "react";
import {
  FlatList,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import global from "../../../utils/global";
import { Icon, Header, Overlay, Input } from "react-native-elements";
import { t } from "i18n-js";
import {
  api_cancel_booking,
  api_get_bookings,
  api_get_booking_details,
} from "../../../utils/Api";
import { showMessage } from "react-native-flash-message";

export default class MyBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_tab: 2,
      reason_visible: false,
      reason_text: "",
      cancel_id: "",
    };
  }

  componentDidMount() {
    this.get_data();
  }

  get_data = async () => {
    await api_get_bookings(2);
    this.update();
  };
  update() {
    this.setState({ update: Date.now() });
  }

  toggle_reason() {
    this.setState({
      reason_visible: !this.state.reason_visible,
    });
  }

  render() {
    const { active_tab, reason_visible, reason_text, cancel_id } = this.state;
    const { navigation } = this.props;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          leftComponent={
            <TouchableOpacity
              style={styles.leftIcon}
              onPress={() => {
                this.props.navigation.toggleDrawer();
              }}
            >
              <Icon
                name={"menu"}
                type={"mdiMenu"}
                size={30}
                color={global.COLOR.white}
              />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("MyBooking_header")}</Text>
          }
          rightComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Notification")}
            >
              <Image source={global.ASSETS.BELL} style={styles.bellS} />
            </TouchableOpacity>
          }
        />
        {/* tabs */}
        <>
          <View style={styles.marHorizon}>
            <View style={styles.rowViewMyBooking}>
              <TouchableOpacity
                onPress={() => {
                  api_get_bookings(2).then(() => {
                    this.setState({ active_tab: 2 });
                  });
                }}
                style={[
                  styles.myBookTouc,
                  {
                    backgroundColor:
                      active_tab == 2
                        ? global.COLOR.PRIMARY_LIGHT
                        : "transparent",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.mybook,
                    {
                      color: active_tab == 2 ? "#fff" : "#000",
                      textDecorationLine:
                        active_tab == 2 ? "underline" : "none",
                    },
                  ]}
                >
                  {t("side_menu_MyBookings")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  api_get_bookings(1).then(() => {
                    this.setState({ active_tab: 1 });
                  });
                }}
                style={[
                  styles.myBookTouc,
                  {
                    backgroundColor:
                      active_tab == 1
                        ? global.COLOR.PRIMARY_LIGHT
                        : "transparent",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.mybook,
                    {
                      color: active_tab == 1 ? "#fff" : "#000",
                      textDecorationLine:
                        active_tab == 1 ? "underline" : "none",
                    },
                  ]}
                >
                  {t("myBooking_pre")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
        {/* list */}
        <>
          <FlatList
            data={global.MY_BOOKINGS}
            ListEmptyComponent={
              <Text style={styles.list_empty_text}>No Booking Available</Text>
            }
            renderItem={({ item: d }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={async () => {
                    if (d.booking_driver_id) {
                      const r = await api_get_booking_details(d.booking_id);
                      if (r && active_tab == 2) {
                        navigation.navigate("booking_track");
                      }
                      if (r && active_tab == 1) {
                        navigation.navigate("booking_detail");
                      }
                    } else {
                      showMessage({
                        message: "Washer will be assigned soon.",
                        type: "warning",
                      });
                    }
                    // navigation.navigate("booking_detail");
                  }}
                  style={styles.listContainerMyBook}
                >
                  {/* image */}
                  <>
                    <View>
                      <Image
                        source={
                          d.vehicle_type.toLowerCase().includes("scooter")
                            ? global.ASSETS.BIKE
                            : global.ASSETS.CAR
                        }
                        style={styles.car}
                      />
                    </View>
                  </>
                  {/* Details */}
                  <>
                    <View>
                      <Text style={styles.stand}>{d.plan_name}</Text>
                      <Text style={styles.stand}>
                        {d.vehicle_make} {d.vehicle_model}
                      </Text>
                      <Text style={styles.locationMyBook}>
                        Location: {d.booking_address}
                      </Text>
                      <Text style={styles.priceMyBook}>
                        Price - {global.CONSTANT.CURRENCY} {d.booking_amount}
                      </Text>
                      {active_tab == 2 && (d.status == "1" || d.status == "0") && (
                        <>
                          <View style={styles.leftView}>
                            <TouchableOpacity
                              onPress={() => {
                                this.setState({ cancel_id: d.booking_id });
                                this.toggle_reason();
                              }}
                            >
                              <Text style={styles.cancel}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={async () => {
                                const r = await api_get_booking_details(
                                  d.booking_id
                                );
                                r &&
                                  navigation.navigate("booking_reschedule", {
                                    onReschedule: this.get_data,
                                  });
                              }}
                            >
                              <Text style={styles.resch}>Reshcedule</Text>
                            </TouchableOpacity>
                          </View>
                        </>
                      )}
                    </View>
                  </>
                  {/* date */}
                  <>
                    <View>
                      <Text style={styles.dates}>{d.booking_date}</Text>
                      <Text style={styles.dates}>{d.booking_time}</Text>
                    </View>
                  </>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </>

        {/* reason overlay */}
        <>
          <Overlay
            isVisible={reason_visible}
            animationType="fade"
            overlayStyle={styles.add_location_container}
            onBackdropPress={() => {
              this.toggle_reason();
            }}
          >
            <View>
              <View style={styles.reson_header}>
                <Text style={styles.add_location_text}>Cancel Reason</Text>
              </View>

              <Input
                placeholder="Cancel Reason"
                style={styles.reason_input}
                multiline
                onChangeText={(v) => this.setState({ reason_text: v })}
                value={reason_text}
              />
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={async () => {
                  if (reason_text.trim() !== "") {
                    this.toggle_reason();
                    const r = await api_cancel_booking(this.state);
                    if (r) {
                      await api_get_bookings(2);

                      this.update();
                    }
                  }
                }}
                style={styles.reson_cancel_button}
              >
                <Text style={styles.add_location_text}>OK</Text>
              </TouchableOpacity>
            </View>
          </Overlay>
        </>
      </ImageBackground>
    );
  }
}
