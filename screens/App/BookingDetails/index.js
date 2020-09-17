import React, { Component } from "react";
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header, Avatar, Rating } from "react-native-elements";
import Lightbox from "react-native-lightbox";

export default class BookingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: 0,
      img_type: 1,
    };
  }

  render() {
    const { img_type } = this.state;
    const { navigation } = this.props;
    const d = global.BOOKING_DETAILS;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          leftComponent={
            <TouchableOpacity
              style={styles.touchLeft}
              onPress={() => navigation.goBack()}
            >
              <Icon name="chevron-left" size={32} color={global.COLOR.white} />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("bookingDetails_header")}</Text>
          }
        />
        <ScrollView style={styles.containerMybooking}>
          <View style={styles.wahrView}>
            <Avatar source={{ uri: d.img }} size={70} />
            <Text style={styles.waherText}>{d.first_name}</Text>
            <Text style={styles.number}>{d.mobile}</Text>
          </View>

          <View style={styles.starView}>
            <Rating
              imageSize={22}
              readonly
              ratingBackgroundColor="transparent"
              startingValue={d.rating}
              style={styles.rating}
            />
          </View>
          {/* Message button */}
          {(d.status == "0" ||
            d.status == "1" ||
            d.status == "5" ||
            d.status == "9") && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("booking_chat");
              }}
              style={styles.msgTouch}
            >
              <Image style={styles.msgImg} source={global.ASSETS.MESSAGE} />
            </TouchableOpacity>
          )}
          <View style={styles.horizoView}>
            <View style={styles.spacBetView}>
              <View style={styles.leftViewBookingDetails}>
                <Text style={styles.ModeText}>{t("bookingD_PaymentMode")}</Text>
                <Text style={styles.paymText}>
                  {d.payment_type == "1"
                    ? "Cash"
                    : d.payment_type == "2"
                    ? "Card"
                    : d.payment_type == "3"
                    ? "Package"
                    : ""}
                </Text>
              </View>
              <Text style={styles.EuroText}>
                {global.CONSTANT.CURRENCY} {d.booking_amount}
              </Text>
            </View>
            <View style={styles.spacBetView}>
              <View style={styles.leftViewBookingDetails}>
                <Text style={styles.ModeText}>{t("status")}</Text>
              </View>
              <Text style={styles.locationText}>
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
            <View style={styles.spacBetView}>
              <View style={styles.leftViewBookingDetails}>
                <Text style={styles.ModeText}>{t("bookingD_location")}</Text>
              </View>
              <Text style={styles.locationText}>{d.booking_address}</Text>
            </View>
            <Text style={styles.viewPhoto}>{t("bookingD_PhotoGallery")}</Text>

            <View style={styles.rowViewMyBooking}>
              <TouchableOpacity
                onPress={() => this.setState({ img_type: 1 })}
                style={[
                  styles.preTouc,
                  {
                    backgroundColor:
                      img_type == 1 ? global.COLOR.PRIMARY_LIGHT : "#fff",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.mybook,
                    {
                      color: img_type == 1 ? "#fff" : "#000",
                      textDecorationLine: img_type == 1 ? "underline" : "none",
                    },
                  ]}
                >
                  {t("bookingD_PreWash")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({ img_type: 2 })}
                style={[
                  styles.preTouc,
                  {
                    backgroundColor:
                      img_type == 2 ? global.COLOR.PRIMARY_LIGHT : "#fff",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.mybook,
                    {
                      color: img_type == 2 ? "#fff" : "#000",
                      textDecorationLine: img_type == 2 ? "underline" : "none",
                    },
                  ]}
                >
                  {t("bookingD_AfterWash")}
                </Text>
              </TouchableOpacity>
            </View>
            {/* before wash images */}
            {img_type == 1 && (
              <View>
                <View style={styles.wash_img_container}>
                  <Lightbox>
                    <Image
                      source={{
                        uri: d.befor.image_1
                          ? d.befor.image_1
                          : global.ASSETS.NO_IMAGE,
                      }}
                      style={styles.wash_image}
                    />
                  </Lightbox>
                  <Lightbox>
                    <Image
                      source={{
                        uri: d.befor.image_2
                          ? d.befor.image_2
                          : global.ASSETS.NO_IMAGE,
                      }}
                      style={styles.wash_image}
                    />
                  </Lightbox>
                </View>
                <View style={styles.wash_img_container}>
                  <Lightbox>
                    <Image
                      source={{
                        uri: d.befor.image_3
                          ? d.befor.image_3
                          : global.ASSETS.NO_IMAGE,
                      }}
                      style={styles.wash_image}
                    />
                  </Lightbox>
                  <Lightbox>
                    <Image
                      source={{
                        uri: d.befor.image_4
                          ? d.befor.image_4
                          : global.ASSETS.NO_IMAGE,
                      }}
                      style={styles.wash_image}
                    />
                  </Lightbox>
                </View>
              </View>
            )}
            {/* aftr wash images */}
            {img_type == 2 && (
              <View>
                <View style={styles.wash_img_container}>
                  <Lightbox>
                    <Image
                      source={{
                        uri: d.after.image_1
                          ? d.after.image_1
                          : global.ASSETS.NO_IMAGE,
                      }}
                      style={styles.wash_image}
                    />
                  </Lightbox>
                  <Lightbox>
                    <Image
                      source={{
                        uri: d.after.image_2
                          ? d.after.image_2
                          : global.ASSETS.NO_IMAGE,
                      }}
                      style={styles.wash_image}
                    />
                  </Lightbox>
                </View>
                <View style={styles.wash_img_container}>
                  <Lightbox>
                    <Image
                      source={{
                        uri: d.after.image_3
                          ? d.after.image_3
                          : global.ASSETS.NO_IMAGE,
                      }}
                      style={styles.wash_image}
                    />
                  </Lightbox>
                  <Lightbox>
                    <Image
                      source={{
                        uri: d.after.image_4
                          ? d.after.image_4
                          : global.ASSETS.NO_IMAGE,
                      }}
                      style={styles.wash_image}
                    />
                  </Lightbox>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
