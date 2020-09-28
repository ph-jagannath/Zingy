import React, { Component } from "react";
import {
  FlatList,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  RefreshControl,
} from "react-native";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import { api_get_faq } from "../../../utils/Api";

export default class Faqs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: false,
      content: false,
      active_id: "",
    };
  }

  componentDidMount() {
    this.get_data();
  }

  get_data = () => {
    api_get_faq().then(() => {
      this.update();
    });
  };

  update() {
    this.setState({
      update: Date.now(),
    });
  }

  render() {
    const { active_id } = this.state;
    return (
      <View style={styles.containerMybooking}>
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
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
            <Text style={styles.headerText}>{t("faq_header")}</Text>
          }
          rightComponent={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Notification")}
              style={styles.rightCom}
            >
              <Image
                source={global.ASSETS.BELL}
                style={styles.bellS}
                color={global.COLOR.white}
              />
            </TouchableOpacity>
          }
        />
        <View style={styles.containerMybooking}>
          <FlatList
            contentContainerStyle={styles.flatView2}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={() => {
                  this.get_data();
                }}
              />
            }
            data={global.FAQ}
            renderItem={({ item: d }) => {
              return (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      this.setState({
                        active_id: active_id === d.id ? "" : d.id,
                      });
                    }}
                    style={[
                      styles.listContainerFaq,
                      {
                        backgroundColor:
                          active_id === d.id
                            ? global.COLOR.PRIMARY_LIGHT
                            : global.COLOR.white,
                      },
                    ]}
                  >
                    <View style={styles.betweenView}>
                      <Text
                        style={[
                          styles.oneText,
                          {
                            color:
                              active_id === d.id ? "#fff" : global.COLOR.black,
                          },
                        ]}
                      >
                        {d.question}
                      </Text>

                      <Image
                        source={
                          active_id === d.id
                            ? global.ASSETS.UP
                            : global.ASSETS.DOWN
                        }
                        style={[
                          styles.iconStyleFaq,
                          {
                            tintColor:
                              active_id === d.id
                                ? global.COLOR.white
                                : global.COLOR.black,
                          },
                        ]}
                      />
                    </View>
                  </TouchableOpacity>
                  {active_id === d.id && (
                    <View style={styles.shadowViewFaq}>
                      <Text style={styles.textTwo}>
                        {d.answer.replace(/<\/?[^>]+(>|$)/g, "")}
                      </Text>
                    </View>
                  )}
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.state}
          />
        </View>
      </View>
    );
  }
}
