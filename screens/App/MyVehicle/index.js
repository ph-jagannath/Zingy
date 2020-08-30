import React, { Component } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import audi from "../../../assets/audi.png";
import global from "../../../utils/global";
import { api_get_vehicle } from "../../../utils/Api";
const vehicleCode = [
  {
    companyLogo: "audi",
    companyName: "Audi A6",
    gadiModal: "111-222",
  },
  {
    companyLogo: "audi",
    companyName: "Audi A6",
    gadiModal: "111-222",
  },
  {
    companyLogo: "audi",
    companyName: "Audi A6",
    gadiModal: "111-222",
  },
  {
    companyLogo: "Mah",
    companyName: "Mahindra Pik-Up",
    gadiModal: "YYY-258",
  },
  {
    companyLogo: "sa",
    companyName: "SsangYong Action Sports",
    gadiModal: "6TT-855",
  },
  {
    companyLogo: "audi",
    companyName: "Audi A6",
    gadiModal: "111-222",
  },
  {
    companyLogo: "Mah",
    companyName: "Mahindra Pik-Up",
    gadiModal: "YYY-258",
  },
];

export default class MyVehicle extends Component {
  constructor(props) {
    super(props);
    this.get_data();
    this.state = {};
  }

  get_data() {
    api_get_vehicle().then((r) => {
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
                      onPress={() => navigation.navigate("EditVehicle")}
                    >
                      <Icon
                        name={"edit"}
                        type={"mdiPencil"}
                        size={20}
                        color="#8E0404"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image
                        source={global.ASSETS.DELETE}
                        resizeMode={"center"}
                        style={styles.deleteIcon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.marRight}>
                      <Icon
                        name="chevron-right"
                        size={32}
                        color="#6ABC45"
                        style={styles.rightIcon}
                      />
                    </TouchableOpacity>
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
