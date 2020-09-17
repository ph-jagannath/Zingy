import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  //   payment.js:
  container: {
    flex: 1,
    height: hp(110),
    width: wp(100),
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
    borderColor: global.COLOR.PRIMARY_LIGHT,
    height: wp(25),
    width: wp(25),
    borderRadius: wp(100),
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
  loginText: {
    color: global.COLOR.white,
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(5),
  },
  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
  },
  touchLeft: {
    marginLeft: -10,
  },

  paymentView: {
    marginHorizontal: wp(3),
    marginTop: hp(1.5),
  },
  payment: {
    fontSize: wp(4),
    color: global.COLOR.PRIMARY_DARK,
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
    tintColor: global.COLOR.PRIMARY_LIGHT,
    height: wp(5),
    width: wp(5),
    marginLeft: wp(3),
  },
  card: {
    marginLeft: wp(2),
    width: wp(5),
    height: hp(4),
    resizeMode: "contain",
    tintColor: "gray",
  },
  cardText: {
    marginLeft: wp(1),
    color: global.COLOR.PRIMARY_DARK,
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
  touchAppClrView: {
    borderRadius: 10,
    borderColor: "gray",
    margin: wp(1),
    shadowColor: "#000",
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 1,
    marginTop: hp(0.5),
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    width: wp(50),
  },
  standrd: {
    fontSize: wp(3.8),
    marginVertical: hp(1),
    marginRight: wp(5),
    marginLeft: wp(1),
    fontWeight: "bold",
    color: global.COLOR.white,
  },
  priceDacwash: {
    // alignSelf: "flex-end",
    // right: 10,
    color: global.COLOR.white,
    fontSize: wp(3.5),
    marginLeft: wp(1),
    marginVertical: hp(0.5),
  },
});
