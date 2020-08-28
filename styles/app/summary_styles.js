import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../utils/global";

export default StyleSheet.create({
  //   Summary.js:
  header: {
    borderBottomColor: global.COLOR.white,
  },
  leftIcon: {
    marginTop: hp(1),
  },
  container: {
    flex: 1,
    backgroundColor: global.COLOR.white,
  },

  headerText: {
    color: global.COLOR.white,
    fontSize: wp(4),
  },
  statusView: {
    backgroundColor: global.COLOR.AppColor,
  },
  roundView: {
    justifyContent: "center",
    borderWidth: 5,
    borderColor: global.COLOR.AppColor,
    height: wp(25),
    width: wp(25),
    borderRadius: wp(100),
  },
  roundViewText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: wp(3.5),
    color: global.COLOR.fontColor,
  },
  standard: {
    fontSize: wp(2.5),
    marginVertical: hp(1),
    marginRight: wp(10),
    marginLeft: wp(1),
  },
  marHorizon: {
    marginHorizontal: wp(3),
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
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  priceSummery: {
    alignSelf: "flex-end",
    right: wp(2),
    fontSize: wp(2.5),
    marginVertical: hp(1),
  },
  vehicle: {
    color: global.COLOR.fontColor,
    marginTop: hp(2),
    fontWeight: "bold",
    fontSize: wp(3),
  },
  rightViewSummary: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: hp(2),
  },
  audiImg: {
    height: wp(8),
    width: wp(8),
  },
  auditextView: {
    marginLeft: wp(4),
  },
  text: {
    fontSize: wp(3),
  },
  service: {
    marginTop: hp(3),
    color: global.COLOR.fontColor,
    fontWeight: "bold",
  },
  EnterRemarkView: {
    marginTop: hp(5),
    marginHorizontal: wp(1),
    height: hp(7),
    borderRadius: 10,
    borderColor: global.COLOR.gray,
    borderWidth: 1,
  },
  topHorizon: {
    marginHorizontal: wp(2),
    flexDirection: "row",
    marginTop: hp(4),
    justifyContent: "space-between",
  },
  EnterRemarkInput: {
    marginLeft: wp(3),
    fontSize: wp(3),
  },
  borderView: {
    borderRadius: wp(2),
    borderColor: global.COLOR.gray,
    margin: wp(0.3),
    shadowColor: "#000",
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 1,
    marginTop: hp(1),
  },
});
