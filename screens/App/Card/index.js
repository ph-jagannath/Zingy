import React, { Component } from "react";
import {
  TextInput,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";

import { Icon, Header } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import {
  api_booking_2_save,
  api_booking_4_save,
  api_package_pay,
} from "../../../utils/Api";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      cvv: "",
      month: "",
      year: "",
      name: "",
    };
  }
  _handlingCardNumber(number) {
    this.setState({
      cardNumber: number
        .replace(/\s?/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim(),
    });
  }

  validate() {
    if (this.state.cardNumber.trim() == "") {
      showMessage({
        message: "Please enter card number.",
        type: "warning",
      });
    } else if (this.state.cardNumber.trim().length < 16) {
      showMessage({
        message: "Please enter valid card number.",
        type: "warning",
      });
    } else if (this.state.month.trim() == "") {
      showMessage({
        message: "Please enter expiry month.",
        type: "warning",
      });
    } else if (
      this.state.month.trim().length < 2 ||
      Number(this.state.month.trim()) > 12 ||
      Number(this.state.month.trim()) == 0
    ) {
      showMessage({
        message: "Please enter valid expiry month.",
        type: "warning",
      });
    } else if (this.state.year.trim() == "") {
      showMessage({
        message: "Please enter expiry year.",
        type: "warning",
      });
    } else if (this.state.year.trim().length < 2) {
      showMessage({
        message: "Please enter valid expiry year.",
        type: "warning",
      });
    } else if (this.state.cvv.trim() == "") {
      showMessage({
        message: "Please enter cvv.",
        type: "warning",
      });
    } else if (this.state.cvv.trim().length < 3) {
      showMessage({
        message: "Please enter valid cvv.",
        type: "warning",
      });
    } else if (this.state.name.trim() == "") {
      showMessage({
        message: "Please enter card holder name.",
        type: "warning",
      });
    } else {
      global.ADD_BOOKING_4_DATA[10] = this.state.month;
      global.ADD_BOOKING_4_DATA[11] = this.state.year;
      global.ADD_BOOKING_4_DATA[12] = this.state.cardNumber.split(" ").join("");
      global.ADD_BOOKING_4_DATA[13] = this.state.cvv;
      global.ADD_BOOKING_4_DATA[15] = this.state.name;
      if (global.ADD_BOOKING_4_DATA[16] !== "") {
        api_booking_2_save();
      } else if (global.ADD_BOOKING_4_DATA[9] == "") {
        api_booking_4_save();
      } else {
        api_package_pay();
      }
    }
  }

  render() {
    const { cvv, name, year, month } = this.state;
    return (
      <View style={styles.container}>
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          leftComponent={
            <TouchableOpacity
              style={styles.leftIcon}
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="chevron-left" size={32} color={global.COLOR.white} />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("credDebit_header")}</Text>
          }
        />
        <ScrollView style={styles.container}>
          <View style={styles.borderViewCreDebit}>
            <View style={styles.totalAmount}>
              <Text style={styles.headingText}>{t("creDebit_totalAmnt")}</Text>
              <Text style={styles.headingText}>
                {global.CONSTANT.CURRENCY}{" "}
                {global.ADD_BOOKING_4_DATA[16] !== ""
                  ? global.ADD_BOOKING_4_DATA[16]
                  : global.ADD_BOOKING_4_DATA[9] == ""
                  ? global.ADD_BOOKING_4_DATA[1].amount
                  : global.ADD_BOOKING_4_DATA[9].cost}
              </Text>
            </View>
          </View>
          <View style={styles.cardHolderView}>
            <View style={styles.expView}>
              <Text style={styles.headingText}>{t("creDebit_cardNUMBER")}</Text>
              <TextInput
                style={styles.cardNumberInput}
                onChangeText={(text) => this._handlingCardNumber(text)}
                maxLength={19}
                placeholder={t("creDebit_cardnumber")}
                value={this.state.cardNumber}
                keyboardType={"numeric"}
                placeholderTextColor={global.COLOR.gray}
              />
            </View>
          </View>
          {/* expiry date */}

          <View style={styles.thiredView}>
            <View style={styles.expView}>
              <Text style={styles.headingText}>{t("creDebit_exDate")}</Text>
              <View style={styles.SimplerowView}>
                <TextInput
                  style={styles.mmInput}
                  keyboardType="numeric"
                  returnKeyType="next"
                  maxLength={2}
                  placeholder={t("creDebit_MM")}
                  placeholderTextColor={global.COLOR.gray}
                  value={month}
                  onChangeText={(month) => this.setState({ month })}
                />
                <TextInput
                  style={styles.yyInput}
                  keyboardType="numeric"
                  returnKeyType="next"
                  maxLength={2}
                  placeholder={t("creDebit_YY")}
                  placeholderTextColor={global.COLOR.gray}
                  value={year}
                  onChangeText={(year) => this.setState({ year })}
                />
              </View>
            </View>
            <View style={styles.cycView}>
              <Text style={styles.headingText}>{t("creDebit_CYC")}</Text>
              <TextInput
                style={styles.nameInput}
                keyboardType="numeric"
                maxLength={3}
                placeholder={t("creDebit_CYC")}
                value={cvv}
                onChangeText={(cvv) => this.setState({ cvv })}
              />
            </View>
          </View>
          {/* card holder name */}

          <View style={styles.cardHolderView}>
            <Text style={styles.headingText}>
              {t("creDebit_cardHolderName")}
            </Text>
            <TextInput
              style={styles.nameInput}
              placeholder={t("signup_name")}
              value={name}
              onChangeText={(name) => this.setState({ name })}
            />
          </View>
          <TouchableOpacity
            onPress={() => this.validate()}
            style={styles.add_button}
          >
            <Text style={styles.add_button_Text}>{t("creDebit_pay")}</Text>
          </TouchableOpacity>
          <Text style={styles.supported}>{t("creDebit_suportCard")}</Text>
          {/* <View style{styles.cardView}>
                        <Text style{{ fontSize: 22 }}>
                            V
                         </Text>
                        <Text style{{ fontSize: 22 }}>
                            M
                         </Text>
                    </View> */}
        </ScrollView>
      </View>
    );
  }
}
