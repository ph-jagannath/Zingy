import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import global from "../../../utils/global";
import { t } from "i18n-js";
import { Icon, Header } from "react-native-elements";
import {
  api_delete_all_notifications,
  api_delete_notifications,
  api_get_notifications,
  api_read_notifications,
} from "../../../utils/Api";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.get_data();
  };

  get_data = async () => {
    await api_get_notifications();
    r && this.update();
  };

  update() {
    this.setState({
      update: Date.now(),
    });
  }

  emptyList = () => {
    return (
      <View style={{ marginVertical: "50%" }}>
        <Text style={{ alignSelf: "center", fontSize: 22 }}>{t("NoData")}</Text>
      </View>
    );
  };
  render() {
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
            <Text style={styles.headerText}>{t("Notification")}</Text>
          }
          rightComponent={
            global.NOTIFICATIONS_LIST.length > 0 && (
              <Icon
                name={"delete"}
                size={30}
                color={"darkred"}
                onPress={async () => {
                  const r = await api_delete_all_notifications();
                  r && this.get_data();
                }}
              />
            )
          }
        />
        <FlatList
          ListEmptyComponent={this.emptyList}
          data={global.NOTIFICATIONS_LIST}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: i }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={async () => {
                  if (i.is_read == "0") {
                    const r = await api_read_notifications(i.id);
                    r && this.get_data();
                  }
                }}
                style={[
                  styles.msg_container,
                  {
                    backgroundColor: i.is_read == "0" ? "#969696" : "#fff",
                  },
                ]}
              >
                <Text style={styles.msg_text}>{i.message}</Text>
                <Icon
                  name="delete"
                  color="darkred"
                  onPress={async () => {
                    const r = await api_delete_notifications(i.id);
                    r && this.get_data();
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </ImageBackground>
    );
  }
}
