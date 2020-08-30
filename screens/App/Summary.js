import React, { Component } from "react";
import {
  FlatList,
  TextInput,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/app/summary_styles";
import global from "../../utils/global";
import { t } from "i18n-js";
import audi from "../../assets/audi.png";
import { Icon, Header } from "react-native-elements";
const data = [
  {
    standard: `Standard Cars`,
    price: `52.00AUD`,
  },
  {
    standard: `Standard Cars`,
    price: `52.00AUD`,
  },
  {
    standard: `Standard Cars`,
    price: `52.00AUD`,
  },
  {
    standard: `Standard Cars`,
    price: `52.00AUD`,
  },
  {
    standard: `Standard Cars`,
    price: `52.00AUD`,
  },
  {
    standard: `Standard Cars`,
    price: `52.00AUD`,
  },
];
export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: "",
    };
  }
  renderList = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.borderView,
            {
              backgroundColor:
                index === 0 ? global.COLOR.PRIMARY_LIGHT : global.COLOR.white,
            },
          ]}
        >
          <Text
            style={[
              styles.standard,
              { color: index === 0 ? global.COLOR.white : global.COLOR.black },
            ]}
          >
            {item.standard}
          </Text>
          <Text
            style={[
              styles.priceSummery,
              { color: index === 0 ? global.COLOR.white : global.COLOR.black },
            ]}
          >
            {item.price}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusView}>
          <StatusBar
            translucent
            backgroundColor={global.COLOR.PRIMARY_LIGHT}
            barStyle="light-content"
          />
        </View>
        <Header
          containerStyle={styles.header}
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
        <ScrollView style={styles.container}>
          <View style={styles.marHorizon}>
            <Text style={styles.vehicle}>{t("summary_vehicleSelect")}</Text>
            <View style={styles.rightViewSummary}>
              <Image
                source={audi}
                style={styles.audiImg}
                resizeMode={"contain"}
              />
              <View style={styles.auditextView}>
                <Text style={styles.text}>Audi</Text>
                <Text style={styles.text}>222</Text>
              </View>
            </View>
            <Text style={styles.service}>{t("summary_service")}</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({ item, index }) => this.renderList({ item, index })}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.EnterRemarkView}>
              <TextInput
                style={styles.EnterRemarkInput}
                placeholder={t("summary_textInput")}
                returnKeyType={"done"}
                placeholderTextColor="#CCC"
                onChangeText={(detail) => this.setState({ detail: detail })}
              />
            </View>
            <View style={styles.topHorizon}>
              <View style={styles.roundView}>
                <Text style={styles.roundViewText}>{t("summary_eta")}</Text>
                <Text style={styles.roundViewText}>0 min</Text>
              </View>
              <View style={styles.roundView}>
                <Text style={styles.roundViewText}>{t("summary_euro")}</Text>
                <Text style={styles.roundViewText}>€52.00</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Payment")}
            style={styles.touchlogin}
          >
            <Text style={styles.loginText}>{t("summary_Confirm")}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
