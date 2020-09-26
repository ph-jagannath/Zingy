import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: hp(110),
    width: wp(100),
  },

  logo_image: {
    height: hp(20),
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

  nameView: {
    marginTop: hp(2.5),
    height: hp(8),
    marginHorizontal: wp(5),
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: global.COLOR.white,
    borderRadius: 10,
    borderColor: global.COLOR.PRIMARY_DARK,
    borderWidth: 1,
  },
  sideIcon: {
    height: hp(5),
    width: wp(6),
    tintColor: global.COLOR.PRIMARY_DARK,
    marginLeft: wp(5),
  },
  nameInputSignup: {
    width: wp(70),
    height: hp(8),
    marginLeft: hp(2),
    borderBottomWidth: 0,
    backgroundColor: "transparent",
  },
  login_button: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
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
  forgot_pass: {
    fontSize: wp(4),
    marginTop: hp(2),
    marginHorizontal: wp(5),
    alignSelf: "flex-end",
    color: global.COLOR.PRIMARY_DARK,
  },
});
