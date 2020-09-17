import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";
export default StyleSheet.create({
  //   myvehicle.js:

  container: {
    flex: 1,
    height: hp(110),
    width: wp(100),
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },

  listContainerMyBook: {
    marginHorizontal: wp(5),
    borderRadius: 10,
    marginBottom: hp(2),
    borderColor: global.COLOR.PRIMARY_DARK,
    borderWidth: 0.8,
    // backgroundColor: "#fff",
  },
  rendTouch: {
    marginHorizontal: wp(3),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  locationTop: {
    flex: 1,
    marginTop: hp(3),
  },
  containerMybooking: {
    flex: 1,
    backgroundColor: global.COLOR.newContainer,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(5),
  },
  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    height: Platform.OS === "ios" ? 20 : 0,
  },
  toucTopLocation: {
    marginTop: 20,
    marginLeft: 12,
  },
  bigRadioLocation: {
    height: 32,
    width: 32,
    resizeMode: "contain",
  },

  rightViewLocation: {
    // marginLeft: 20,
    marginTop: -13,
    width: wp(60),
  },
  locationTexts: {
    fontSize: wp(3.5),
  },
  touchBtmView: {
    marginVertical: wp(6.5),
    alignItems: "center",
    flexDirection: "row",
  },
  SimplerowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginHorizontal: wp(5),
  },
  locationType: {
    fontSize: wp(4),
    textTransform: "capitalize",
    color: global.COLOR.PRIMARY_DARK,
    fontWeight: "bold",
  },
  addLocationText: {
    alignSelf: "center",
    color: global.COLOR.white,
    fontSize: wp(4),
  },

  bellS: {
    tintColor: global.COLOR.white,
    height: hp(5),
    width: hp(4),
    resizeMode: "contain",
  },

  deleteIcon: {
    marginLeft: wp(3),
    height: hp(3),
    width: wp(5),
    tintColor: global.COLOR.deleteIcon,
  },
  rightIcontLocation: {
    // marginLeft: wp(8),
  },
  addLocation: {
    justifyContent: "center",
    height: hp(7),
    bottom: hp(5),
    borderRadius: 10,
    marginTop: hp(12),
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    marginHorizontal: wp(5),
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    elevation: 2,
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
});
