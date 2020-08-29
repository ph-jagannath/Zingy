import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    paddingTop: global.CONSTANT.STATUSBAR + hp(5),
  },
  logo_image: {
    height: hp(16),
    width: wp(70),
    resizeMode: "contain",
    alignSelf: "center",
  },
  social_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp(2),
  },

  already: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: wp(3.5),
    width: wp(70),
    // marginTop: hp(8),
  },
  input_container: {
    marginVertical: hp(4),
  },
  input: {
    fontSize: wp(4.5),
    // marginLeft: 5,
    width: wp(70),
    alignSelf: "center",
    backgroundColor: "transparent",
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

  itNumberLogin: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(5),
    borderRadius: 50,
    height: hp(9),
    marginHorizontal: wp(6),
    backgroundColor: global.COLOR.white,
  },

  loginText: {
    color: global.COLOR.white,
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },

  dontAcView: {
    height: hp(9),
    backgroundColor: global.COLOR.newContainer,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  dontAccount: {
    color: global.COLOR.black,
    fontSize: wp(3),
  },
});
