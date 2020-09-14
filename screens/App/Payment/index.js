import React, { Component } from "react";
import { Image, Text, ImageBackground, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon, Header } from "react-native-elements";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { api_booking_2_save, api_booking_4_save } from "../../../utils/Api";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: false,
      content: false,
      payment_mode: 1,
    };
  }

  validate() {
    global.ADD_BOOKING_4_DATA[7] = this.state.payment_mode;
    if (this.state.payment_mode == 1) {
      if (global.ADD_BOOKING_4_DATA[16] == "") {
        api_booking_4_save();
      } else {
        api_booking_2_save();
      }
    } else if (this.state.payment_mode == 2) {
      this.props.navigation.navigate("pay_card");
      console.log(" card ", global.ADD_BOOKING_4_DATA);
    } else if (this.state.payment_mode == 3) {
      console.log("package ", global.ADD_BOOKING_4_DATA);
    }
  }

  render() {
    const { navigation } = this.props;
    const { payment_mode } = this.state;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          leftComponent={
            <TouchableOpacity
              style={styles.leftIcon}
              onPress={() => navigation.goBack()}
            >
              <Icon name="chevron-left" size={32} color="#fff" />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("payment_header")}</Text>
          }
        />
        <View style={styles.paymentView}>
          {/* methods */}
          <Text style={styles.payment}>{t("payment_selectMathod")}</Text>
          <View style={styles.TopViewPayment}>
            {/* cash */}
            <TouchableOpacity
              onPress={() => {
                this.setState({ payment_mode: 1 });
              }}
              style={styles.rowView}
            >
              <Icon
                name={
                  payment_mode == 1
                    ? "radio-button-checked"
                    : "radio-button-unchecked"
                }
                size={20}
                color={global.COLOR.PRIMARY_DARK}
              />

              <Image source={global.ASSETS.PAY_CASH} style={styles.card} />
              <Text style={styles.cardText}>{t("payment_cash")}</Text>
            </TouchableOpacity>

            {/* card */}
            <TouchableOpacity
              onPress={() => {
                this.setState({ payment_mode: 2 });
              }}
              style={styles.rowView}
            >
              <Icon
                name={
                  payment_mode == 2
                    ? "radio-button-checked"
                    : "radio-button-unchecked"
                }
                size={20}
                color={global.COLOR.PRIMARY_DARK}
              />

              <Image source={global.ASSETS.PAY_CARD} style={styles.card} />
              <Text style={styles.cardText}>{t("payment_card")}</Text>
            </TouchableOpacity>

            {/* package */}
            {global.ADD_BOOKING_4_DATA[16] == "" && (
              <TouchableOpacity
                onPress={() => {
                  this.setState({ payment_mode: 3 });
                }}
                style={styles.rowView}
              >
                <Icon
                  name={
                    payment_mode == 3
                      ? "radio-button-checked"
                      : "radio-button-unchecked"
                  }
                  size={20}
                  color={global.COLOR.PRIMARY_DARK}
                />
                <Image source={global.ASSETS.PAY_PACKAGE} style={styles.card} />
                <Text style={styles.cardText}>{t("payment_package")}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.roundViewPayment}>
          <View style={styles.roundView}>
            <Text style={styles.audText}>{t("payment_aud")}</Text>
            <Text style={styles.audText}>
              {global.CONSTANT.CURRENCY}{" "}
              {global.ADD_BOOKING_4_DATA[16] == ""
                ? global.ADD_BOOKING_4_DATA[1].amount
                : global.ADD_BOOKING_4_DATA[16]}
            </Text>
          </View>
        </View>
        <View style={styles.btmViewPayment}>
          <Text style={styles.allPrice}>{t("payment_priceInclude")}</Text>
          <TouchableOpacity
            style={styles.add_button}
            onPress={() => this.validate()}
          >
            <Text style={styles.add_button_Text}>{t("payment_pNow")}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
