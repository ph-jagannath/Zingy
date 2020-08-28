import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../utils/global";

export default StyleSheet.create({
  //   payment.js:
  container: {
    flex: 1,
    backgroundColor: global.COLOR.white,
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  leftIcon: {
    marginTop: hp(1),
  },
  bellS: {
    tintColor: global.COLOR.white,
    height: hp(5),
    width: hp(4),
  },

  roundView: {
    justifyContent: "center",
    borderWidth: 5,
    borderColor: global.COLOR.AppColor,
    height: wp(25),
    width: wp(25),
    borderRadius: wp(100),
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
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(4),
  },
  statusView: {
    backgroundColor: global.COLOR.AppColor,
  },
  touchLeft: {
    marginLeft: -10,
  },

  paymentView: {
    marginHorizontal: wp(3),
    marginTop: hp(1.5),
  },
  payment: {
    fontSize: wp(3.2),
    color: global.COLOR.gray,
  },
  TopViewPayment: {
    borderBottomColor: global.COLOR.lightGray,
    borderBottomWidth: 1,
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp(1.5),
  },
  radioStyle: {
    tintColor: global.COLOR.AppColor,
    height: wp(3.3),
    width: wp(3.3),
    marginLeft: wp(2),
  },
  card: {
    marginLeft: wp(2),
  },
  cardText: {
    marginLeft: wp(1),
    color: global.COLOR.gray,
    fontWeight: "bold",
  },
  roundViewPayment: {
    marginTop: hp(5),
    alignSelf: "center",
  },
  audText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: wp(4),
    color: global.COLOR.fontColor,
  },
  btmViewPayment: {
    width: wp(100),
    position: "absolute",
    bottom: hp(4),
  },
  allPrice: {
    alignSelf: "center",
    color: global.COLOR.gray,
  },
});
