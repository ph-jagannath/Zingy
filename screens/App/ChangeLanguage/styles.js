import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  //   changeLanguage.js:
  containerMybooking: {
    flex: 1,
    backgroundColor: global.COLOR.newContainer,
  },
  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    height: Platform.OS === "ios" ? 20 : 0,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(4),
  },
  leftView: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: wp(5),
  },
  langText: {
    marginLeft: wp(5),
    fontSize: wp(4),
    fontWeight: "bold",
    marginBottom: hp(1),
  },
  radio: {
    height: wp(8),
    width: hp(8),
    marginRight: wp(2),
  },
  touchVIewChangePass: {
    marginTop: hp(10),
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
  loginText: {
    color: global.COLOR.white,
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  RowView: {
    marginTop: hp(2),
    height: hp(8),
    marginHorizontal: wp(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: global.COLOR.white,
    borderRadius: 20,
  },
  leftIcon: {
    height: hp(8),
    width: wp(9),
  },
  menuIcon: { marginTop: hp(1) },
});
