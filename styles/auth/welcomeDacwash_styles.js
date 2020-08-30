import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import global from "../../utils/global";
import global from "../../utils/global";

export default StyleSheet.create({
  //   Welcome Dacwash:

  header: {
    borderBottomColor: global.COLOR.white,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(4),
  },
  container: {
    flex: 1,
    backgroundColor: global.COLOR.white,
  },
  imgViewWelcome: {
    marginTop: 15,
    justifyContent: "center",
  },
  img: {
    height: hp(18),
    alignSelf: "center",
  },
  dacWash: {
    marginTop: hp(5),
    fontSize: wp(4),
    color: global.COLOR.PRIMARY_LIGHT,
    alignSelf: "center",
  },
  welcome: {
    marginTop: hp(10),
    fontSize: wp(4),
    color: global.COLOR.PRIMARY_LIGHT,
    alignSelf: "center",
  },
  marTop: {
    marginTop: hp(27),
    marginBottom: hp(5),
  },
  letsStart: {
    alignSelf: "center",
    color: global.COLOR.PRIMARY_LIGHT,
    fontSize: wp(3),
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
});
