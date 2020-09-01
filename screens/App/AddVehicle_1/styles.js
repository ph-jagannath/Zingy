import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import global from "../../utils/global";
import global from "../../../utils/global";

export default StyleSheet.create({
  //   editVehicle.js:

  container: {
    flex: 1,
    height: hp(110),
    width: wp(100),
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    height: Platform.OS === "ios" ? 20 : 0,
  },
  imgView: {
    marginTop: hp(9),
    justifyContent: "center",
  },

  touchlogin: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    marginTop: hp(6),
    height: hp(7),
    marginHorizontal: wp(5),
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: hp(1),
  },
  containerMybooking: {
    flex: 1,
  },
  loginText: {
    color: global.COLOR.white,
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },

  dontAcView: {
    height: hp(9),
    backgroundColor: global.COLOR.newContainer,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  dontAccount: {
    color: global.COLOR.black,
    fontSize: wp(3),
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(5),
  },
  container3: {
    marginTop: hp(0),
  },
  TopViewAddVecle: {
    marginTop: hp(3),
    marginHorizontal: wp(4),
  },
  borderViewAddVehi: {
    height: hp(7),
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(1),
    borderColor: global.COLOR.PRIMARY_DARK,
    borderWidth: 0.6,
  },
  category: {
    fontSize: wp(3),
    color: global.COLOR.black,
    marginLeft: wp(3),
  },
  outerText: {
    color: global.COLOR.black,
    fontSize: wp(3),
  },
  categoryClr: {
    fontSize: wp(3),
    color: global.COLOR.black,
    marginLeft: wp(10),
  },
  itlyEditV: {
    height: hp(3.8),
    width: wp(13),
  },
  touchVIewEditV: {
    // marginBottom: hp(6),
  },
  touchNext: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    marginBottom: hp(3),
    marginTop: hp(3),
    height: hp(7),
    marginHorizontal: wp(5),
    justifyContent: "center",
    borderRadius: 10,
    shadowOffset: {
      height: 20,
      width: 20,
    },
    elevation: 3,
  },
  imgForword: {
    marginRight: wp(3),
    height: wp(3),
    width: wp(4),
    tintColor: global.COLOR.black,
  },
  underScroll: {
    borderColor: global.COLOR.gray,
    borderWidth: 0.8,
    marginTop: hp(2),
    alignSelf: "center",
    justifyContent: "center",
    height: hp(10),
    width: wp(20),
  },
  empImg: {
    marginTop: hp(2),
    borderColor: global.COLOR.PRIMARY_DARK,
    borderWidth: 0.8,
    height: hp(10),
    width: wp(20),
    resizeMode: "contain",
    alignSelf: "center",
  },
  borderViewEditV: {
    // marginHorizontal: wp(5),
    alignSelf: "center",
    height: hp(5.5),
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: global.COLOR.PRIMARY_LIGHT,
    marginTop: 15,
    // width: 200,
    // flexDirection: "row",
    // justifyContent: "space-between",
    justifyContent: "center",
  },
  SearchEditVehicle: {
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: global.COLOR.darkGreen,
    borderBottomWidth: 1,
    height: hp(8),
    marginHorizontal: wp(1),
  },
  inputEditV: {
    width: wp(88),
    fontSize: 18,
    marginLeft: 10,
  },
  codeText: {
    letterSpacing: 5,
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
  },
  numText: {
    letterSpacing: 5,
    fontWeight: "bold",
    fontSize: wp(5),
    marginHorizontal: wp(5),
    textAlign: "center",
  },
  inputSearchV: {
    width: wp(80),
    marginLeft: wp(3),
  },
  add_button: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    marginVertical: hp(3),
    height: hp(7),
    width: wp(75),
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  add_button_Text: {
    color: global.COLOR.white,
    fontSize: wp(4.5),
    fontWeight: "bold",
    alignSelf: "center",
  },
  overlay: {
    // backgroundColor: global.COLOR.PRIMARY_LIGHT,
    marginTop: global.CONSTANT.HEIGHT - 180,
    flex: 1,
    justifyContent: "flex-end",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: global.CONSTANT.WIDTH,
  },
  overlayContainer: {
    backgroundColor: "transparent",
  },
  overlayTitle: {
    alignSelf: "center",
    fontSize: 20,
    color: global.COLOR.PRIMARY_DARK,
    // color: global.COLOR.PRIMARY,
    textTransform: "capitalize",
    // marginTop: 20,
  },
  distanceContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 30,
  },
  durationContainer: {
    // backgroundColor: "#fff",
    borderColor: global.COLOR.PRIMARY_DARK,
    borderWidth: 0.8,
    height: 70,
    width: 70,
    marginVertical: 20,
    borderRadius: 10,
  },
  modelIcon: {
    marginVertical: 4,
  },
  overlayText: {
    alignSelf: "center",
    fontSize: 14,
    color: global.COLOR.PRIMARY_DARK,
  },
});
