import React, { Component } from "react";
import {
  TextInput,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header, Input } from "react-native-elements";
import moment from "moment";
import { showMessage } from "react-native-flash-message";
import { api_booking_reschedule } from "../../../utils/Api";
export default class Reschedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remark: "",
      date: "",
      time: "",
      selected_plan: global.ADD_BOOKING_4_DATA[1],
      date_visible: false,
      time_visible: false,
    };
  }

  toggle_date_picker() {
    this.setState({ date_visible: !this.state.date_visible });
  }

  validate = async () => {
    // console.log("next");
    const { date, time } = this.state;
    if (date == "") {
      showMessage({
        message: "Please select date.",
        type: "warning",
      });
    } else if (date !== "" && !moment(date).isSameOrAfter(moment(), "days")) {
      showMessage({
        message: "Please select a date in future.",
        type: "warning",
      });
    } else if (time == "") {
      showMessage({
        message: "Please select time.",
        type: "warning",
      });
    } else {
      const new_date = moment(date).format("YYYY-MM-DD");
      const new_time = moment(time, ["h:mm A"]).format("HH:mm:ss");
      const r = await api_booking_reschedule({
        date: new_date,
        time: new_time,
        id: global.BOOKING_DETAILS.booking_id,
      });
      if (r) {
        this.props.route.params.onReschedule();
        this.props.navigation.goBack();
      }
    }
  };

  handleDate = (n) => {
    this.setState({
      date: n,
    });
  };
  handleTime = (n) => {
    this.setState({
      time: n,
    });
  };

  render() {
    const { remark, date, time } = this.state;
    const d = global.BOOKING_DETAILS;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <>
          <Header
            containerStyle={styles.header}
            statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
            backgroundColor={global.COLOR.PRIMARY_LIGHT}
            leftComponent={
              <TouchableOpacity
                style={styles.leftIcon}
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="chevron-left" size={32} color="#fff" />
              </TouchableOpacity>
            }
            centerComponent={
              <Text style={styles.headerText}>{t("summary_header")}</Text>
            }
          />
        </>
        <ScrollView>
          <View style={styles.marHorizon}>
            <Text style={styles.vehicle}>{t("summary_vehicleSelect")}</Text>
            <View style={styles.rightViewSummary}>
              {/* <Image
                source={
                  global.ADD_BOOKING_4_DATA[16] == ""
                    ? {
                        uri: global.ADD_BOOKING_4_DATA[0].make_picture,
                      }
                    : global.ASSETS.LOGO_ICON
                }
                style={styles.audiImg}
              /> */}
              <View style={styles.auditextView}>
                <Text style={styles.text}>
                  {d.vehicle_make} {d.vehicle_model}
                </Text>

                {/* <Text style={styles.text}>{d.plate_number}</Text> */}
              </View>
            </View>
            <>
              <Text style={styles.service}>{t("summary_service")}</Text>
              {/* service bar */}
              <>
                {!!d.plan_service && d.plan_service.length > 0 && (
                  <View style={styles.btmViewDacWashLocation}>
                    <View style={styles.apClrView}>
                      {d.plan_service.toLowerCase().includes("ext") && (
                        <Image
                          source={global.ASSETS.CAR}
                          resizeMode={"contain"}
                          style={styles.imgCarDacWash}
                        />
                      )}
                      {d.plan_service.toLowerCase().includes("int") && (
                        <Image
                          source={global.ASSETS.CLEANING}
                          resizeMode={"contain"}
                          style={styles.imgCarDacWash}
                        />
                      )}
                      <Text style={styles.inOutText}>{d.plan_service}</Text>
                    </View>
                  </View>
                )}
              </>
              <View>
                <TouchableOpacity style={styles.touchAppClrView}>
                  <Text style={styles.standrd}>
                    {!!d.plan_service && d.plan_service.length > 0
                      ? d.plan_service
                      : d.vehicle_make}
                  </Text>
                  <Text style={styles.priceDacwash}>
                    {global.CONSTANT.CURRENCY} {d.booking_amount}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
            {/* location */}
            <Text style={styles.vehicle}>{t("summary_location")}</Text>
            <Text style={styles.text}>{d.booking_address}</Text>

            {/* date time */}
            <View style={styles.date_container}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("select_date", {
                    onDateSelect: this.handleDate,
                  });
                }}
                activeOpacity={0.9}
              >
                <Input
                  editable={false}
                  containerStyle={styles.dateInput}
                  leftIcon={{
                    name: "today",
                    color: "#666666",
                  }}
                  placeholder={t("summary_date")}
                  returnKeyType={"done"}
                  placeholderTextColor="#666666"
                  // onChangeText={(v) => this.setState({ remark: v })}
                  value={date}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("select_time", {
                    onTimeSelect: this.handleTime,
                  });
                }}
                activeOpacity={0.9}
              >
                <Input
                  editable={false}
                  containerStyle={styles.dateInput}
                  placeholder={t("summary_time")}
                  returnKeyType={"done"}
                  leftIcon={{
                    name: "schedule",
                    color: "#666666",
                  }}
                  placeholderTextColor="#666666"
                  // onChangeText={(v) => this.setState({ remark: v })}
                  value={time}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.EnterRemarkView}>
              <TextInput
                style={styles.EnterRemarkInput}
                placeholder={t("summary_textInput")}
                returnKeyType={"done"}
                placeholderTextColor="#666666"
                onChangeText={(v) => this.setState({ remark: v })}
                value={remark}
              />
            </View>
            <View
              style={[
                styles.topHorizon,
                {
                  justifyContent: "center",
                },
              ]}
            >
              <View style={styles.roundView}>
                <Text style={styles.roundViewText}>{t("summary_euro")}</Text>
                <Text style={styles.roundViewText}>
                  {global.CONSTANT.CURRENCY} {d.booking_amount}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.validate()}
            style={styles.touchlogin}
          >
            <Text style={styles.loginText}>{t("summary_Confirm")}</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
}
