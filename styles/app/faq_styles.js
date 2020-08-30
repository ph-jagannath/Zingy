import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import global from "../../utils/global";
import global from "../../utils/global";

export default StyleSheet.create({
  //   myvehicle.js:

  container: {
    flex: 1,
    backgroundColor: global.COLOR.white,
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  flatListContainer: {
    marginTop: hp(2),
  },
  listContainerMyBook: {
    marginHorizontal: wp(5),
    borderRadius: 10,
    marginBottom: hp(2),
    backgroundColor: "#fff",
  },
  rendTouch: {
    marginHorizontal: wp(3),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
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

  horizonView: {
    marginVertical: hp(4),
    alignItems: "center",
    flexDirection: "row",
  },

  listContainerFaq: {
    marginTop: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginHorizontal: wp(4),
  },
  betweenView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp(3),
  },
  oneText: {
    fontSize: wp(4),
    width: wp(80),
    marginLeft: wp(3),
  },
  iconStyle: {
    height: hp(4),
    width: wp(5),
    marginRight: wp(3),
  },
  iconStyleFaq: {
    height: hp(3),
    width: wp(4),
    marginRight: wp(3),
  },

  shadowViewFaq: {
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    elevation: 2,
    marginHorizontal: wp(4),
    borderBottomRightRadius: 15,
    backgroundColor: global.COLOR.white,
    borderBottomLeftRadius: 15,
    marginBottom: hp(3),
  },
  textTwo: {
    fontWeight: "bold",
    fontSize: wp(3.5),
    width: wp(80),
    marginLeft: wp(5),
    marginTop: hp(1),
    marginBottom: hp(5),
  },

  rightCom: {
    flexDirection: "row",
  },
  flatView2: {
    paddingBottom: hp(2),
    marginTop: hp(1),
  },
  notiView: {
    height: wp(5),
    width: wp(5),
    borderRadius: 100,
    backgroundColor: global.COLOR.notiClr,
    justifyContent: "center",
    position: "absolute",
    right: 4,
    top: 2,
  },
  notText: {
    alignSelf: "center",
    fontSize: wp(2.5),
    color: global.COLOR.white,
  },
});
