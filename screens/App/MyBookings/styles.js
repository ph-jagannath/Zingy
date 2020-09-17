import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  //   myBooking.js:
  header: {
    borderBottomColor: global.COLOR.white,
  },
  containerMybooking: {
    flex: 1,
    backgroundColor: global.COLOR.newContainer,
  },
  container: {
    flex: 1,
    height: hp(110),
    width: wp(100),
  },

  headerText: {
    color: global.COLOR.white,
    fontSize: wp(5),
  },
  preTouc: {
    height: hp(7),
    borderRadius: 15,
    width: wp(46),
    justifyContent: "center",
  },

  bellS: {
    tintColor: global.COLOR.white,
    height: hp(5),
    width: hp(4),
    resizeMode: "contain",
  },
  leftIcon: {
    marginTop: hp(1),
  },

  marHorizon: {
    marginHorizontal: wp(3),
  },
  dates: {
    fontSize: wp(3.5),
    // width: wp(15),
    color: "#808080",
    textAlign: "center",
  },
  rowViewMyBooking: {
    flexDirection: "row",
    marginTop: hp(1),
    height: hp(8),
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceMyBook: {
    color: global.COLOR.black,
    fontWeight: "bold",
    fontSize: wp(3.5),
  },
  priceView: {
    flexDirection: "row",
    marginLeft: 47,
  },
  myBookTouc: {
    height: hp(7),
    borderRadius: 15,
    width: wp(46),
    justifyContent: "center",
    borderWidth: 1,
    borderColor: global.COLOR.PRIMARY_LIGHT,
  },
  cancel: {
    fontSize: wp(3.7),
    color: "red",
  },
  resch: {
    marginLeft: wp(6),
    fontSize: wp(3.7),
    color: global.COLOR.PRIMARY_LIGHT,
  },
  mybook: {
    alignSelf: "center",
  },
  leftView: {
    marginTop: hp(2),
    flexDirection: "row",
  },

  containerMybooking: {
    flex: 1,
    backgroundColor: global.COLOR.newContainer,
  },
  listContainerMyBook: {
    marginHorizontal: wp(4),
    borderRadius: 10,
    marginVertical: hp(1),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.8,
    borderColor: global.COLOR.PRIMARY_DARK,
    padding: wp(3),
    // height: hp(18),
  },
  standView: {
    marginTop: hp(2),
    marginLeft: wp(11),
    marginHorizontal: wp(2),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  SimplerowView: {
    flexDirection: "row",
  },
  bigRadioLocation: {
    height: 32,
    width: 32,
  },
  rightIcontLocation: {
    marginLeft: wp(8),
  },
  addLocation: {
    justifyContent: "center",
    height: hp(7),
    bottom: hp(5),
    borderRadius: 10,
    marginTop: hp(5),
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    marginHorizontal: wp(5),
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    elevation: 2,
  },
  toucTopLocation: {
    marginTop: 20,
    marginLeft: 12,
  },
  centerText: {
    color: global.COLOR.white,
    fontSize: wp(4),
  },
  addLocationText: {
    alignSelf: "center",
    color: global.COLOR.white,
    fontSize: wp(4),
  },
  widthView: {
    width: wp(11),
  },
  stand: {
    width: wp(40),
    color: global.COLOR.darkGreen,
    fontWeight: "bold",
    fontSize: 14,
  },
  car: {
    alignSelf: "center",
    height: hp(5),
    width: wp(9),
    tintColor: global.COLOR.PRIMARY_DARK,
    resizeMode: "contain",
  },
  locationMyBook: {
    width: wp(55),
    color: global.COLOR.black,
    // fontWeight: "bold",
    fontSize: wp(4),
  },
  list_empty_text: {
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: hp(27),
  },
  add_location_container: {
    width: wp(80),
    borderRadius: 15,
    minHeight: hp(28),
    backgroundColor: "#fff",
    padding: 0,
    // justifyContent: "space-between",
  },
  add_location_text: {
    fontSize: wp(4.5),
    fontWeight: "bold",
    color: "#fff",
  },
  reson_header: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    justifyContent: "center",
    alignItems: "center",
    height: hp(7),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  reason_input: {
    marginTop: hp(2),
  },
  reson_cancel_button: {
    backgroundColor: global.COLOR.PRIMARY_DARK,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: wp(22),
    height: hp(6),
    borderRadius: 10,
  },
});
