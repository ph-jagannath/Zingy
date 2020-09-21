import React, { Component } from "react";
import {
  FlatList,
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
import { Icon, Header } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import { api_get_package_zone } from "../../../utils/Api";
export default class SelectPackage extends Component {
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
  componentDidMount() {
    api_get_package_zone().then(() => {
      this.update();
    });
  }

  update() {
    this.setState({
      update: Date.now(),
    });
  }

  toggle_date_picker() {
    this.setState({ date_visible: !this.state.date_visible });
  }

  validate() {
    // console.log("next");
    const { selected_plan, remark } = this.state;
    global.ADD_BOOKING_4_DATA[9] = selected_plan;
    global.ADD_BOOKING_4_DATA[6] = remark;
    if (global.PACKAGE_LIST_ZONE.length < 1) {
      showMessage({
        message: "No package available.",
        type: "warning",
      });
    } else if (selected_plan == "") {
      showMessage({
        message: "Please select a package.",
        type: "warning",
      });
    } else if (remark == "") {
      showMessage({
        message: "Please enter additional information.",
        type: "warning",
      });
    } else {
      this.props.navigation.navigate("pay_card");
    }
  }

  render() {
    const { remark, selected_plan } = this.state;
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
              <Text style={styles.headerText}>{t("package_header")}</Text>
            }
          />
        </>
        <ScrollView>
          <View style={styles.marHorizon}>
            <Text style={styles.vehicle}>{t("summary_vehicleSelect")}</Text>
            <View style={styles.rightViewSummary}>
              <Image
                source={{ uri: global.ADD_BOOKING_4_DATA[0].make_picture }}
                style={styles.audiImg}
              />
              <View style={styles.auditextView}>
                <Text style={styles.text}>
                  {global.ADD_BOOKING_4_DATA[0].modal_name}
                </Text>
                <Text style={styles.text}>
                  {global.ADD_BOOKING_4_DATA[0].plate_number}
                </Text>
              </View>
            </View>
            <Text style={styles.service}>{t("package_header")}</Text>
            {/* service bar */}

            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={global.PACKAGE_LIST_ZONE}
              renderItem={({ item }) => {
                const p = item.Package;
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
                        {p.monthly_yearly} {p.name}
                      </Text>
                      {/* cost */}
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
                        {p.no_of_exterior_wash} X Exterior Wash
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
                        {p.no_of_interior_wash} X Interior Wash
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
            {/* location */}
            <Text style={styles.vehicle}>{t("summary_location")}</Text>
            <Text style={styles.text}>{global.ADD_BOOKING_4_DATA[2]}</Text>

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
                  {global.CONSTANT.CURRENCY}{" "}
                  {selected_plan == "" ? "0" : selected_plan.cost}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.validate()}
            style={styles.touchlogin}
          >
            <Text style={styles.loginText}>{t("package_book")}</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
}
