import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  container: {
    height: hp(110),
    width: wp(100),
    paddingTop: global.CONSTANT.STATUSBAR + hp(5),
  },

  logo_image: {
    height: hp(16),
    width: wp(70),
    resizeMode: "contain",
    alignSelf: "center",
  },
  social_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp(2),
  },
  already: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: wp(3.5),
    width: wp(70),
  },
  input_container: {
    marginVertical: hp(4),
  },
  input: {
    fontSize: wp(4.5),
    width: wp(70),
    alignSelf: "center",
    backgroundColor: "transparent",
  },
  login_button: {
    backgroundColor: global.COLOR.AppColor,
    marginVertical: hp(6),
    height: hp(7),
    width: wp(75),
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  loginText: {
    color: global.COLOR.white,
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  dontAcView: {
    height: hp(7),
    alignItems: "center",
    alignSelf: "center",
  },
  dontAccount: {
    fontSize: wp(4),
  },
});
