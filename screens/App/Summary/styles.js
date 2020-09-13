import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  //   Summary.js:
  header: {
    borderBottomColor: global.COLOR.white,
  },
  leftIcon: {
    marginTop: hp(1),
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
  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
  },
  roundView: {
    justifyContent: "center",
    borderWidth: 5,
    borderColor: global.COLOR.PRIMARY_LIGHT,
    height: wp(25),
    width: wp(25),
    borderRadius: wp(100),
  },
  roundViewText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: wp(3.7),
    color: global.COLOR.PRIMARY_DARK,
    textTransform: "uppercase",
  },
  standard: {
    fontSize: wp(2.5),
    marginVertical: hp(1),
    marginRight: wp(10),
    marginLeft: wp(1),
  },
  marHorizon: {
    marginHorizontal: wp(3),
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
  priceSummery: {
    alignSelf: "flex-end",
    right: wp(2),
    fontSize: wp(2.5),
    marginVertical: hp(1),
  },
  vehicle: {
    color: global.COLOR.PRIMARY_DARK,
    marginTop: hp(2),
    fontWeight: "bold",
    fontSize: wp(4),
  },
  rightViewSummary: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: hp(1),
  },
  audiImg: {
    height: hp(8),
    width: wp(15),
    resizeMode: "contain",
  },
  auditextView: {
    marginLeft: wp(4),
  },
  text: {
    fontSize: wp(3.8),
  },
  service: {
    marginTop: hp(1),
    color: global.COLOR.PRIMARY_DARK,
    fontSize: wp(4),
    fontWeight: "bold",
  },
  EnterRemarkView: {
    marginTop: hp(5),
    marginHorizontal: wp(1),
    height: hp(7),
    borderRadius: 10,
    borderColor: global.COLOR.gray,
    borderWidth: 1,
    justifyContent: "center",
  },
  topHorizon: {
    marginHorizontal: wp(2),
    flexDirection: "row",
    marginTop: hp(4),
    justifyContent: "space-between",
  },
  EnterRemarkInput: {
    marginLeft: wp(3),
    fontSize: wp(4),
    alignSelf: "center",
  },
  dateInput: {
    marginLeft: wp(3),
    fontSize: wp(4),
    alignSelf: "center",
    width: wp(40),
  },
  borderView: {
    borderRadius: wp(2),
    borderColor: global.COLOR.gray,
    margin: wp(0.3),
    shadowColor: "#000",
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 1,
    marginTop: hp(1),
  },
  btmViewDacWashLocation: {
    backgroundColor: global.COLOR.white,
    justifyContent: "center",
    marginHorizontal: wp(3),
    marginBottom: hp(1),
    marginTop: hp(1),
  },
  apClrView: {
    alignItems: "center",
    height: hp(4),
    borderRadius: 5,
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    flexDirection: "row",
  },
  imgCarDacWash: {
    height: hp(3),
    width: wp(5),
    tintColor: global.COLOR.white,
    marginLeft: 10,
  },
  inOutText: {
    color: global.COLOR.white,
    fontSize: wp(3.5),
    marginLeft: wp(2),
  },
  touchAppClrView: {
    borderRadius: 10,
    borderColor: "gray",
    margin: wp(1),
    shadowColor: "#000",
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 1,
    marginTop: hp(0.5),
  },
  standrd: {
    fontSize: wp(3.8),
    marginVertical: hp(1),
    marginRight: wp(5),
    marginLeft: wp(1),
  },
  priceDacwash: {
    alignSelf: "flex-end",
    right: 10,
    fontSize: wp(3.5),
    marginVertical: hp(1),
  },
  date_container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: hp(2),
    marginBottom: -hp(7),
  },
});
