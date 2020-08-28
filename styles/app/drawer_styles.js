import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import global from "../../utils/global";
import global from "../../utils/global";

export default StyleSheet.create({
  //   drawer.js:

  container: {
    flex: 1,
    backgroundColor: global.COLOR.white,
  },

  logoS: {
    marginTop: hp(5),
    alignSelf: "center",
    height: hp(10),
    width: wp(30),
  },
  Username: {
    alignSelf: "center",
    fontSize: wp(4),
    fontWeight: "bold",
  },
  contentTop: {
    marginVertical: hp(2),
    marginLeft: wp(5),
    marginRight: wp(3),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  TopViewDrawer: {
    marginTop: hp(2),
    backgroundColor: "#fff",
    justifyContent: "center",
    marginBottom: hp(3),
  },
  content: {
    fontSize: wp(3.5),
  },
  statusView: {
    backgroundColor: global.COLOR.AppColor,
    height: Platform.OS === "ios" ? 20 : 0,
  },
  iconStyle: {
    height: hp(4),
    width: wp(5),
    marginRight: wp(3),
  },
});
