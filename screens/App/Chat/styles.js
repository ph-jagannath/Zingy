import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  //   AddVehicle.js:
  header: {
    borderBottomColor: global.COLOR.white,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(5),
    textTransform: "capitalize",
  },
  containerMybooking: {
    flex: 1,
    marginHorizontal: wp(2),
  },
  container: {
    flex: 1,
    height: hp(110),
    width: wp(100),
  },
});
