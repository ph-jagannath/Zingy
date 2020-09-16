import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  //   changepassword.js:
  containerMybooking: {
    flex: 1,
    // backgroundColor: global.COLOR.newContainer,
  },
  container: {
    flex: 1,
    height: hp(110),
    width: wp(100),
  },
  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    height: Platform.OS === "ios" ? 20 : 0,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(5),
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

  nameView: {
    marginTop: hp(2),
    height: hp(8),
    marginHorizontal: wp(5),
    flexDirection: "row",
    alignItems: "center",
    borderColor: global.COLOR.PRIMARY_DARK,
    borderRadius: 50,
    borderWidth: 0.8,
  },
  sideIcon: {
    height: hp(5),
    width: wp(6),
    tintColor: global.COLOR.PRIMARY_DARK,
    marginLeft: wp(5),
  },
  nameInputSignup: {
    width: wp(70),
    height: hp(6),
    marginLeft: hp(2),
    borderBottomWidth: 0,
    backgroundColor: "white",
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
