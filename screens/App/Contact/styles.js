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
    backgroundColor: global.COLOR.white,
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },

  headerText: {
    color: global.COLOR.white,
    fontSize: wp(4),
  },
  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    height: Platform.OS === "ios" ? 20 : 0,
  },
  imgView: {
    marginTop: hp(9),
    justifyContent: "center",
  },
  bellS: {
    tintColor: global.COLOR.white,
    height: hp(5),
    width: hp(4),
    resizeMode: "contain",
  },

  radiousContact: {
    marginTop: hp(4),
    borderWidth: wp(1.5),
    alignSelf: "center",
    borderColor: global.COLOR.PRIMARY_LIGHT,
    height: wp(17),
    width: wp(17),
    borderRadius: wp(100),
    justifyContent: "center",
  },
  topcContact: {
    marginTop: hp(4),
  },
  containerMybooking: {
    flex: 1,
    backgroundColor: global.COLOR.newContainer,
  },

  inquContac: {
    alignSelf: "center",
    marginVertical: hp(8),
  },
  welcomeSignup: {
    fontSize: wp(4),
    fontWeight: "bold",
    alignSelf: "center",
  },
  imgContact: {
    alignSelf: "center",
    height: hp(6),
    width: wp(6),
    tintColor: global.COLOR.PRIMARY_LIGHT,
    resizeMode: "contain",
  },
  numberContact: {
    alignSelf: "center",
    marginTop: hp(0.5),
    fontSize: wp(3),
  },
});
