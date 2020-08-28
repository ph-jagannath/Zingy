import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../utils/global";

export default StyleSheet.create({
  //   CreDebit.js:
  header: {
    borderBottomColor: global.COLOR.white,
  },

  headerText: {
    color: global.COLOR.white,
    fontSize: wp(4),
  },
  statusView: {
    backgroundColor: global.COLOR.AppColor,
    height: Platform.OS === "ios" ? 20 : 0,
  },
  leftIcon: {
    marginTop: hp(1),
  },
  SimplerowView: {
    flexDirection: "row",
  },
  borderViewCreDebit: {
    height: hp(9),
    borderColor: global.COLOR.lightGray,
    justifyContent: "center",
    borderBottomWidth: wp(0.7),
  },
  totalAmount: {
    marginHorizontal: wp(3),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingText: {
    fontWeight: "bold",
    fontSize: wp(3.6),
    color: global.COLOR.black,
  },
  mmInput: {
    margin: wp(1),
    textAlign: "right",
    fontSize: wp(3.4),
    width: wp(10),
    borderBottomColor: global.COLOR.gray,
    borderBottomWidth: 2,
    borderRadius: 1,
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
  loginText: {
    color: global.COLOR.white,
    fontSize: wp(4),
    fontWeight: "bold",
    alignSelf: "center",
  },
  cycView: {
    width: wp(17),
  },
  yyInput: {
    margin: wp(1),
    textAlign: "center",
    fontSize: wp(3.4),
    width: wp(9),
    borderBottomColor: global.COLOR.gray,
    borderBottomWidth: 2,
    borderRadius: 1,
  },
  postView: {
    width: wp(48),
  },
  codeInput: {
    fontSize: wp(3.4),
    marginTop: hp(1),
    width: wp(29),
    borderBottomColor: global.COLOR.gray,
    borderBottomWidth: 2,
    borderRadius: 1,
  },
  cardHolderView: {
    marginTop: hp(2),
    marginHorizontal: wp(3),
  },
  nameInput: {
    fontSize: wp(3.4),
    marginTop: hp(1),
    borderBottomColor: global.COLOR.gray,
    borderBottomWidth: 2,
    borderRadius: 1,
  },
  supported: {
    marginTop: hp(7),
    alignSelf: "center",
    fontSize: wp(4),
    color: global.COLOR.lightGray,
  },
  cardView: {
    marginTop: hp(2),
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  thiredView: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: hp(2),
    marginHorizontal: wp(3),
  },
  expView: {
    width: wp(66),
  },

  secndView: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 15,
    marginHorizontal: 10,
  },
  cardNumberInput: {
    margin: hp(1),
    fontSize: wp(3.4),
    borderBottomColor: global.COLOR.gray,
    borderBottomWidth: 2,
    borderRadius: 1,
  },
});
