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
import ScrollPicker from "react-native-fen-wheel-scroll-picker";
import moment from "moment";
export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moodText: "",
      month: moment().format("MMM"),
      day: moment().format("DD"),
      year: moment().format("YYYY"),
      //   list: LIST,
    };
  }

  render() {
    console.log(moment().add(1, "months").format("MMM"));
    const MONTH = moment.monthsShort();
    // const MONTH = moment.monthsShort();
    const DAY = Array.from(
      { length: moment(this.state.month, "MMM").daysInMonth() },
      (v, k) => k + 1
    );
    const YEAR = [
      Number(moment().format("YYYY")),
      Number(moment().format("YYYY")) + 1,
    ];
    return (
      <View style={styles.container}>
        {/* month */}
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
            <Text style={styles.title}>Choose a date!</Text>
          </View>
        </View>

        <View style={styles.wheelContainer}>
          {/* month */}
          <ScrollPicker
            dataSource={MONTH}
            selectedIndex={Number(moment().format("M") - 1)}
            renderItem={(data, index, isSelected) => {
              //
            }}
            onValueChange={(data, selectedIndex) => {
              this.setState({
                month: data,
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
          <Text style={styles.text}>{"  "}</Text>
          {/* day */}
          <ScrollPicker
            dataSource={DAY}
            selectedIndex={Number(moment().format("D") - 1)}
            renderItem={(data, index, isSelected) => {
              //
            }}
            onValueChange={(data, selectedIndex) => {
              console.log(data);
              this.setState({
                day: data,
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
          {/* year */}
          <ScrollPicker
            dataSource={YEAR}
            selectedIndex={0}
            renderItem={(data, index, isSelected) => {
              //
            }}
            onValueChange={(data, selectedIndex) => {
              this.setState({
                year: data,
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
              this.state.day + " " + this.state.month + " " + this.state.year;
            this.props.route.params.onDateSelect(d);
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
