import React, { Component } from "react";
import {
  TextInput,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/app/CreDebit_styles";
import global from "../../utils/global";
import { t } from "i18n-js";

import { Icon, Header } from "react-native-elements";

export default class CreDebitCardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusView}>
          <StatusBar
            translucent
            backgroundColor={global.COLOR.AppColor}
            barStyle="light-content"
          />
        </View>
        <Header
          containerStyle={styles.header}
          backgroundColor={global.COLOR.AppColor}
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
              <Text style={styles.headingText}>52.00</Text>
            </View>
          </View>
          <View style={styles.secndView}>
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
            <View style={styles.cycView}>
              <Text style={styles.headingText}>{t("creDebit_CYC")}</Text>
              <TextInput
                style={styles.nameInput}
                keyboardType="numeric"
                maxLength={3}
                placeholder={t("creDebit_CYC")}
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
                />
                <TextInput
                  style={styles.yyInput}
                  keyboardType="numeric"
                  returnKeyType="next"
                  maxLength={2}
                  placeholder={t("creDebit_YY")}
                  placeholderTextColor={global.COLOR.gray}
                />
              </View>
            </View>
            <View style={styles.postView}>
              <Text style={styles.headingText}>{t("creDebit_postCode")}</Text>
              <TextInput
                style={styles.codeInput}
                keyboardType="numeric"
                returnKeyType="next"
                maxLength={4}
                placeholder={t("creDebit_Code")}
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
            />
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("BookingDetail")}
            style={styles.touchlogin}
          >
            <Text style={styles.loginText}>{t("creDebit_pay")}</Text>
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
