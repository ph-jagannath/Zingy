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
    backgroundColor: "#fff",
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
    textTransform: "capitalize",
  },
  TopViewDrawer: {
    marginTop: hp(2),
    backgroundColor: "#fff",
    justifyContent: "center",
    marginBottom: hp(3),
  },
  contentTop: {
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(3),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  active_tab: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
  },
  content: {
    fontSize: wp(4.2),
    textTransform: "capitalize",
  },
  active_content: {
    color: "#fff",
  },
});
