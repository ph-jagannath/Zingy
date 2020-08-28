import React, { Component } from "react";
import {
  FlatList,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import styles from "../../styles/app/location_styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import global from "../../utils/global";
import { Icon, Header } from "react-native-elements";
import { t } from "i18n-js";
export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioClr: false,
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const { radioClr } = this.state;
    return (
      <View style={styles.containerMybooking}>
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
            <Text style={styles.headerText}>{t("locatin_header")}</Text>
          }
          rightComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Notification")}
            >
              <Image source={global.ASSETS.BELL} style={styles.bellS} />
            </TouchableOpacity>
          }
        />
        <View style={styles.locationTop}>
          <View style={styles.listContainerMyBook}>
            <View style={styles.SimplerowView}>
              <TouchableOpacity
                style={styles.toucTopLocation}
                onPress={() => this.setState({ radioClr: !radioClr })}
              >
                <Image
                  source={global.ASSETS.RADIO}
                  style={[
                    styles.bigRadioLocation,
                    {
                      tintColor: radioClr
                        ? global.COLOR.gray
                        : global.COLOR.AppColor,
                    },
                  ]}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.rendTouch}>
                <View style={styles.touchBtmView}>
                  <View style={styles.rightViewLocation}>
                    <Text style={styles.locationTexts}>
                      House No:Anand kunj bania,bhistiyo ka bas Jodhpur
                      Rajasthan 34001
                    </Text>
                  </View>
                </View>
                <Icon
                  name="chevron-right"
                  size={32}
                  style={styles.rightIcontLocation}
                  color={global.COLOR.AppColor}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.listContainerMyBook}>
            <View style={styles.SimplerowView}>
              <TouchableOpacity
                style={styles.toucTopLocation}
                onPress={() => this.setState({ radioClr: !radioClr })}
              >
                <Image
                  source={global.ASSETS.RADIO}
                  style={[
                    styles.bigRadioLocation,
                    {
                      tintColor: radioClr
                        ? global.COLOR.AppColor
                        : global.COLOR.gray,
                    },
                  ]}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.rendTouch}>
                <View style={styles.touchBtmView}>
                  <TouchableOpacity
                    onPress={() => navigate("HomeLocation")}
                    style={styles.rightViewLocation}
                  >
                    <Text style={styles.locationType}>Location Type: Home</Text>
                    <Text style={styles.locationTexts}>
                      House No:Dhan Mandi Rd,bhistiyo Ka Bas,Jodhpur,Rajasthan
                      342001,India
                    </Text>
                  </TouchableOpacity>
                </View>
                <Icon
                  name="chevron-right"
                  size={32}
                  style={styles.rightIcontLocation}
                  color={global.COLOR.AppColor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AddLocation")}
          style={styles.addLocation}
        >
          <Text style={styles.addLocationText}>
            {t("location_addLocation")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
