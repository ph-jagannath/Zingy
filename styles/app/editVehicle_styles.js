import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import global from "../../utils/global";
import global from "../../utils/global";

export default StyleSheet.create({
  //   editVehicle.js:

  container: {
    flex: 1,
    backgroundColor: global.COLOR.white,
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
    backgroundColor: global.COLOR.newContainer,
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
    fontSize: wp(4),
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
    backgroundColor: global.COLOR.white,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(1),
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
    marginBottom: hp(6),
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
  underScroll: {
    backgroundColor: global.COLOR.gray,
    marginTop: hp(2),
    alignSelf: "center",
    justifyContent: "center",
    height: hp(12),
    width: wp(20),
  },
  imgForword: {
    marginRight: wp(3),
    height: wp(3),
    width: wp(4),
    tintColor: global.COLOR.black,
  },
  empImg: {
    height: hp(10),
    width: wp(18),
    alignSelf: "center",
  },
  borderViewEditV: {
    marginHorizontal: wp(5),
    alignSelf: "center",
    height: hp(5.5),
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: global.COLOR.PRIMARY_LIGHT,
    marginTop: 15,
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    fontSize: 18,
    marginRight: 15,
  },
  inputSearchV: {
    width: wp(80),
    marginLeft: wp(3),
  },
});
