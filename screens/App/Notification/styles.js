import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  //   BookingDetail.js:
  header: {
    borderBottomColor: global.COLOR.white,
  },
  container: {
    flex: 1,
    height: hp(110),
    width: wp(100),
  },
  touchLeft: {
    marginTop: 5,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(5),
  },

  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
  },
  containerMybooking: {
    flex: 1,
    backgroundColor: global.COLOR.newContainer,
  },
  msg_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    // minHeight: hp(5),
  },
  msg_text: {
    width: wp(83),
    color: global.COLOR.PRIMARY_DARK,
  },
});
