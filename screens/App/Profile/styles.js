import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  //   profile.js:

  container: {
    flex: 1,
    height: hp(110),
    width: wp(100),
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  containerMybooking: {
    flex: 1,
    // backgroundColor: global.COLOR.newContainer,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(5),
  },
  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    height: Platform.OS === "ios" ? 20 : 0,
  },

  bellS: {
    tintColor: global.COLOR.white,
    height: hp(5),
    width: hp(4),
  },

  imgStyle: {
    height: wp(7),
    width: wp(7),
    tintColor: global.COLOR.PRIMARY_DARK,
    resizeMode: "contain",
  },
  MimgStyle: {
    tintColor: global.COLOR.PRIMARY_DARK,
  },
  nameText: {
    marginLeft: wp(3),
    color: global.COLOR.PRIMARY_DARK,
    fontWeight: "bold",
  },
  usrName: {
    marginTop: hp(1),
    marginLeft: wp(3),
    fontWeight: "bold",
  },
  horizonViewProfile: {
    marginTop: hp(2),
    borderRadius: 12,
    height: hp(11),
    borderColor: global.COLOR.PRIMARY_DARK,
    marginHorizontal: wp(5),
    justifyContent: "center",
    borderWidth: 0.8,
  },
  HorizonRowViewProfile: {
    flexDirection: "row",
    // backgroundColor: "#fff",
    alignItems: "center",
    marginHorizontal: wp(4),
  },
  profileRightView: {
    marginHorizontal: wp(6),
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
