import React, { Component } from "react";
import {
  FlatList,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
  RefreshControl,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import global from "../../../utils/global";
import { Icon, Header } from "react-native-elements";
import { t } from "i18n-js";
import { api_get_locations } from "../../../utils/Api";
export default class Location extends Component {
  constructor(props) {
    super(props);
    this.get_data();
    this.state = {
      radioClr: false,
    };
  }

  get_data = () => {
    api_get_locations().then(() => {
      this.update();
    });
  };

  update() {
    this.setState({ update: Date.now() });
  }

  render() {
    const { navigation } = this.props;
    const { radioClr } = this.state;
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
          <FlatList
            data={global.MY_LOCATIONS}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={() => {
                  this.get_data();
                }}
              />
            }
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              const d = item.UserLocation;
              return (
                <View style={styles.listContainerMyBook}>
                  <View style={styles.SimplerowView}>
                    <TouchableOpacity
                      style={styles.toucTopLocation}
                      // onPress={() => this.setState({ radioClr: !radioClr })}
                    >
                      <Image
                        source={global.ASSETS.RADIO}
                        style={[
                          styles.bigRadioLocation,
                          { tintColor: global.COLOR.PRIMARY_DARK },
                          // {
                          //   tintColor: radioClr
                          //     ? global.COLOR.PRIMARY_LIGHT
                          //     : global.COLOR.gray,
                          // },
                        ]}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("AddLocation", {
                          action_type: d.type,
                          onAddLocation: this.get_data,
                        })
                      }
                      style={styles.rendTouch}
                    >
                      <View style={styles.touchBtmView}>
                        <View style={styles.rightViewLocation}>
                          <Text style={styles.locationType}>
                            {/* Location Type: {d.type} */}
                            {d.type}
                          </Text>
                          <Text style={styles.locationTexts}>{d.address}</Text>
                        </View>
                      </View>
                      <Icon
                        name="chevron-right"
                        size={32}
                        style={styles.rightIcontLocation}
                        color={global.COLOR.PRIMARY_LIGHT}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("AddLocation", {
              action_type: "add",
              onAddLocation: this.get_data,
            })
          }
          style={styles.add_button}
        >
          <Text style={styles.add_button_Text}>
            {t("location_addLocation")}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
