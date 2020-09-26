import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
  FlatList,
} from "react-native";
import global from "../../utils/global";
import { Divider, Icon } from "react-native-elements";
import moment from "moment";
import ScrollPicker from "react-native-fen-wheel-scroll-picker";
export default class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moodText: "",
      hour: moment().format("hh"),
      minute: moment().format("mm"),
      type: moment().format("A"),
      //   list: LIST,
    };
  }

  render() {
    const HOURS = Array.from({ length: 12 }, (v, k) => k + 1);
    const MINUTES = Array.from({ length: 60 }, (v, k) => k + 1);
    const TYPE = ["AM", "PM"];
    return (
      <View style={styles.container}>
        {/* header */}
        <View>
          <TouchableOpacity
            style={styles.iconLeft}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Image source={global.ASSETS.BACK_ARROW} style={styles.iconLeft} />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>Set a time!</Text>
          </View>
        </View>

        <View style={styles.wheelContainer}>
          {/* hours */}
          <ScrollPicker
            dataSource={HOURS}
            selectedIndex={Number(moment().format("hh")) - 1}
            renderItem={(data, index, isSelected) => {
              //
            }}
            onValueChange={(data, selectedIndex) => {
              this.setState({
                hour: data,
              });
              //
            }}
            wrapperHeight={180}
            wrapperWidth={150}
            wrapperBackground={"#FFFFFF"}
            itemHeight={60}
            highlightColor={"#d8d8d8"}
            highlightBorderWidth={2}
            activeItemColor={"#222121"}
            itemColor={"#B4B4B4"}
          />
          <Text style={styles.text}>{" : "}</Text>
          {/* time */}
          <ScrollPicker
            dataSource={MINUTES}
            selectedIndex={Number(moment().format("mm")) - 1}
            renderItem={(data, index, isSelected) => {
              //
            }}
            onValueChange={(data, selectedIndex) => {
              this.setState({
                minute: data,
              });
              //
            }}
            wrapperHeight={180}
            wrapperWidth={150}
            wrapperBackground={"#FFFFFF"}
            itemHeight={60}
            highlightColor={"#d8d8d8"}
            highlightBorderWidth={2}
            activeItemColor={"#222121"}
            itemColor={"#B4B4B4"}
          />
          <Text style={styles.text}>{"   "}</Text>

          <ScrollPicker
            dataSource={TYPE}
            selectedIndex={moment().format("A") == "AM" ? 0 : 1}
            renderItem={(data, index, isSelected) => {
              //
            }}
            onValueChange={(data, selectedIndex) => {
              this.setState({
                type: data,
              });
            }}
            wrapperHeight={180}
            wrapperWidth={150}
            wrapperBackground={"#FFFFFF"}
            itemHeight={60}
            highlightColor={"#d8d8d8"}
            highlightBorderWidth={2}
            activeItemColor={"#222121"}
            itemColor={"#B4B4B4"}
          />
        </View>
        <TouchableOpacity
          style={styles.checkButton}
          onPress={() => {
            let d =
              this.state.hour +
              " : " +
              this.state.minute +
              " " +
              this.state.type;
            this.props.route.params.onTimeSelect(d);
            this.props.navigation.goBack();
          }}
        >
          <Icon
            reverse
            name="check"
            color={global.COLOR.PRIMARY_DARK}
            size={30}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: global.CONSTANT.STATUSBAR,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  customMoodText: {
    fontSize: 16,
    color: "#c2c2c2",
    // fontFamily: global.FONT.REGULAR,
    letterSpacing: 0.8,
    // marginVertical: 45,
  },
  title: {
    // textTransform: "capitalize",
    fontSize: 22,
    // fontFamily: global.FONT.BOLD,
    letterSpacing: 1.14,
    marginVertical: 45,
  },
  iconLeft: {
    height: 30,
    width: 40,
    resizeMode: "contain",
    marginTop: 16,
  },
  wheelContainer: {
    flex: 0.4,
    flexDirection: "row",
    marginTop: 45,
  },
  text: {
    alignSelf: "center",
    // fontFamily: global.FONT.BOLD,
    fontSize: 18,
  },
  checkButton: {
    // backgroundColor: "rgba(255,255,255,0.1)",
    flex: 1,
    zIndex: 9,
    alignSelf: "center",
    justifyContent: "flex-end",
  },
});
