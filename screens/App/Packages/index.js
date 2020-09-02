import React, { Component } from "react";

import {
  FlatList,
  Image,
  Text,
  View,
  ImageBackground,
  RefreshControl,
} from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import { api_get_packages } from "../../../utils/Api";

export default class Packages extends Component {
  constructor(props) {
    super(props);
    this.get_data();
    this.state = {};
  }

  get_data() {
    api_get_packages().then(() => {
      this.update();
    });
  }

  update() {
    this.setState({
      update: Date.now(),
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <Header
          containerStyle={styles.header}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          leftComponent={
            <TouchableOpacity
              style={styles.leftIcon}
              onPress={() => this.props.navigation.toggleDrawer()}
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
            <Text style={styles.headerText}>{t("package_header")}</Text>
          }
          rightComponent={
            <TouchableOpacity onPress={() => navigate("Notification")}>
              <Image source={global.ASSETS.BELL} style={styles.bellS} />
            </TouchableOpacity>
          }
        />
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={global.MY_PACKAGES}
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
            const d = item.Package;
            const u = item.UserPackage;
            return (
              <View style={styles.listContainerMyBook}>
                <View style={styles.ViewGreen}>
                  <Text style={styles.test}>
                    {d.monthly_yearly} ( {d.name} )
                  </Text>
                  <Text style={styles.standardPackage}>{d.type}</Text>
                </View>
                <View style={styles.shadowViewPackage}>
                  <View style={styles.horzonView}>
                    <View style={styles.itemes}>
                      <Image
                        source={global.ASSETS.EXT_WASH}
                        style={styles.imgCar}
                      />
                      <Text style={styles.exteriorText}>
                        {u.no_of_exterior_wash} X Exterior Wash
                      </Text>
                    </View>
                  </View>
                  <View style={styles.horzonView}>
                    <View style={styles.itemes}>
                      <Image
                        source={global.ASSETS.INT_WASH}
                        style={styles.imgClean}
                      />
                      <Text style={styles.exteriorText}>
                        {u.no_of_interior_wash} X Interior Wash
                      </Text>
                    </View>
                  </View>

                  <View style={styles.horzonView}>
                    <View style={styles.itemes}>
                      <Image
                        source={global.ASSETS.ENG_WASH}
                        style={styles.imgCar}
                      />
                      <Text style={styles.exteriorText}>
                        {u.no_of_wash} X Engine Wash
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.expDate}>Expiry: {u.expiry_date}</Text>
                  <Text style={styles.expDate}>Remark: {u.remark}</Text>
                </View>
              </View>
            );
          }}
        />
      </ImageBackground>
    );
  }
}
