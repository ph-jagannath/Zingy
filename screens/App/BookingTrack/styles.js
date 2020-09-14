import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.COLOR.white,
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(5),
    textTransform: "capitalize",
  },
});
