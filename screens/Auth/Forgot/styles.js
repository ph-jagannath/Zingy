import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";
// import global from "../../utils/global";

export default StyleSheet.create({
  //   signUp:
  container: {
    flex: 1,
    height: hp(110),
    width: wp(100),
    // paddingTop: global.CONSTANT.STATUSBAR + hp(5),
  },
  containerMybooking: {
    flex: 1,
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  leftIcon: {
    marginTop: hp(1),
  },
  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    height: Platform.OS === "ios" ? 20 : 0,
  },
  img: {
    height: hp(18),
    alignSelf: "center",
  },

  imgViewSignup: {
    marginTop: hp(2),
    justifyContent: "center",
  },
  modalSignUp: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 5,
    marginHorizontal: wp(4),
  },
  agreeTouch: {
    justifyContent: "center",
    height: hp(7),
    bottom: hp(4),
    marginTop: hp(6),
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    marginHorizontal: wp(5),
  },
  modalView: {
    flex: 1,
    marginHorizontal: wp(3),
    marginVertical: hp(5),
  },
  iAgree: {
    alignSelf: "center",
    color: global.COLOR.white,
  },
  welcomeView: {
    alignSelf: "center",
    alignContent: "center",
  },
  welcomeSignup: {
    fontSize: wp(4),
    fontWeight: "bold",
    alignSelf: "center",
  },
  pls: {
    fontSize: wp(3),
    marginTop: hp(1),
    fontWeight: "100",
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
  activeView: {
    marginHorizontal: wp(5),
    height: 1,
  },
  flag: {
    height: hp(5),
    width: wp(6),
    marginLeft: wp(6),
  },
  phoneInput: {
    fontSize: wp(4),
    marginLeft: wp(0),
    height: hp(6),
    backgroundColor: global.COLOR.white,
  },
  bySign: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: wp(5),
    marginTop: hp(3),
  },
  bySignText: {
    fontSize: wp(3),
  },
  termText: {
    marginLeft: 5,
    fontSize: wp(3),
  },
  it: {
    marginLeft: wp(3),
    fontSize: wp(3),
  },

  touchlogin: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    marginVertical: hp(6),
    height: hp(7),
    width: wp(75),
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
    padding: 0,
  },
  loginText: {
    color: global.COLOR.white,
    fontSize: wp(5),
    fontWeight: "bold",
    alignSelf: "center",
  },
  logo_image: {
    height: hp(20),
    width: wp(70),
    resizeMode: "contain",
    alignSelf: "center",
  },
});
