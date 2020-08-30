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
    marginVertical: hp(2),
    marginHorizontal: wp(3),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    fontSize: wp(3.5),
  },
});
