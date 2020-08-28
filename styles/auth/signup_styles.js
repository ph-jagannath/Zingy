import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import global from "../../utils/global";
import global from "../../utils/global";

export default StyleSheet.create({
  //   signUp:

  containerMybooking: {
    flex: 1,
    backgroundColor: global.COLOR.newContainer,
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  statusView: {
    backgroundColor: global.COLOR.AppColor,
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
    backgroundColor: global.COLOR.AppColor,
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
    marginTop: hp(2),
    height: hp(8),
    marginHorizontal: wp(5),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: global.COLOR.white,
    borderRadius: 50,
  },
  sideIcon: {
    height: hp(5),
    width: wp(6),
    tintColor: "#ccc",
    marginLeft: wp(5),
  },
  nameInputSignup: {
    width: wp(70),
    height: hp(6),
    marginLeft: hp(2),
    borderBottomWidth: 0,
    backgroundColor: global.COLOR.white,
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
  leftIcon: {
    marginTop: hp(1),
  },
  touchlogin: {
    backgroundColor: global.COLOR.AppColor,
    marginTop: hp(6),
    height: hp(7),
    marginHorizontal: wp(5),
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: hp(1),
  },
  loginText: {
    color: global.COLOR.white,
    fontSize: wp(4),
    fontWeight: "bold",
    alignSelf: "center",
  },
});
