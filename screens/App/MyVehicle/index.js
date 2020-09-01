import React, { Component } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  RefreshControl,
} from "react-native";
import styles from "./styles";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import global from "../../../utils/global";
import { api_get_vehicle, api_delete_vehicle } from "../../../utils/Api";
import { showMessage } from "react-native-flash-message";

export default class MyVehicle extends Component {
  constructor(props) {
    super(props);
    this.get_data();
    this.state = {};
  }

  get_data() {
    api_get_vehicle().then(() => {
      this.update();
    });
  }

  update() {
    this.setState({
      update: Date.now(),
    });
  }

  render() {
    const { navigation } = this.props;

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
                navigation.toggleDrawer();
              }}
            >
              <Icon name={"menu"} type={"mdiMenu"} size={30} color="#fff" />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>{t("myVehilced_header")}</Text>
          }
          rightComponent={
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <Image source={global.ASSETS.BELL} style={styles.bellS} />
            </TouchableOpacity>
          }
        />
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={global.MY_VEHICLES}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {
                this.get_data();
              }}
            />
          }
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: d }) => {
            return (
              <View style={styles.listContainerMyBook}>
                <View style={styles.rendTouch}>
                  <View style={styles.horizonView}>
                    <Image
                      source={{ uri: d.make_picture }}
                      style={styles.audiImg}
                      resizeMode={"contain"}
                    />
                    <View style={styles.rightViewMyVehicle}>
                      <Text style={styles.comName}>{d.modal_name}</Text>
                      <Text style={styles.modalName}>{d.plate_number}</Text>
                      <Text style={styles.modalName}>{d.type}</Text>
                    </View>
                  </View>
                  <View style={styles.delEdit}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() =>
                        navigation.navigate("EditVehicle", {
                          details: d,
                        })
                      }
                    >
                      <Icon
                        name={"edit"}
                        type={"mdiPencil"}
                        size={20}
                        color="#8E0404"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        if (
                          d.is_booked.toString() == "1" ||
                          d.is_package.toString() == "1"
                        ) {
                          showMessage({
                            message:
                              "This vehicle has an active service. Try again later.",
                            type: "warning",
                          });
                        } else {
                          api_delete_vehicle(d).then((r) => {
                            r && this.get_data();
                          });
                        }
                      }}
                    >
                      <Image
                        source={global.ASSETS.DELETE}
                        resizeMode={"center"}
                        style={styles.deleteIcon}
                      />
                    </TouchableOpacity>
                    <View>
                      <Icon
                        name="chevron-right"
                        size={32}
                        color="#6ABC45"
                        style={styles.rightIcon}
                      />
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AddVehicle")}
          style={styles.add_button}
        >
          <Text style={styles.addText}>{t("wel_AddVehicle")}</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
