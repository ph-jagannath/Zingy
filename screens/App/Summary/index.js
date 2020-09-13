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

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remark: "",
      selected_plan: global.ADD_BOOKING_4_DATA[1],
    };
  }

  validate() {
    // console.log("next");
    const { selected_plan, remark } = this.state;
    global.ADD_BOOKING_4_DATA[1] = selected_plan;
    global.ADD_BOOKING_4_DATA[6] = remark;
    this.props.navigation.navigate("Payment");
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
              <Text style={styles.headerText}>{t("summary_header")}</Text>
            }
          />
        </>
        <ScrollView style={styles.container}>
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
            <Text style={styles.service}>{t("summary_service")}</Text>
            {/* service bar */}
            {selected_plan !== "" && (
              <>
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
                    <Text style={styles.inOutText}>
                      {selected_plan.services}
                    </Text>
                  </View>
                </View>
              </>
            )}
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
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
            <View style={styles.topHorizon}>
              <View style={styles.roundView}>
                <Text style={styles.roundViewText}>{t("summary_eta")}</Text>
                <Text style={styles.roundViewText}>
                  {
                    global.NEARBY_SP.sort((a, b) => a.distance - b.distance)[0]
                      .time
                  }
                </Text>
              </View>
              <View style={styles.roundView}>
                <Text style={styles.roundViewText}>{t("summary_euro")}</Text>
                <Text style={styles.roundViewText}>
                  {global.CONSTANT.CURRENCY} {selected_plan.amount}
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
