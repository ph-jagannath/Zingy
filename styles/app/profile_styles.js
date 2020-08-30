import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../utils/global";

export default StyleSheet.create({
  //   profile.js:

  container: {
    flex: 1,
    backgroundColor: global.COLOR.white,
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  containerMybooking: {
    flex: 1,
    backgroundColor: global.COLOR.newContainer,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(4),
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
    height: wp(5),
    width: wp(5),
    tintColor: global.COLOR.PRIMARY_LIGHT,
  },
  MimgStyle: {
    tintColor: global.COLOR.PRIMARY_LIGHT,
  },
  nameText: {
    marginLeft: wp(3),
    color: global.COLOR.PRIMARY_LIGHT,
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
    height: hp(12),
    backgroundColor: "#fff",
    marginHorizontal: wp(5),
    justifyContent: "center",
  },
  HorizonRowViewProfile: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    marginHorizontal: wp(4),
  },
  profileRightView: {
    marginHorizontal: wp(6),
  },
});
