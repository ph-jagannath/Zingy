import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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

  containerMybooking: {
    flex: 1,
    backgroundColor: global.COLOR.newContainer,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(4),
  },
  statusView: {
    backgroundColor: global.COLOR.AppColor,
    height: Platform.OS === "ios" ? 20 : 0,
  },

  bellS: {
    tintColor: global.COLOR.white,
    height: hp(5),
    width: hp(4),
  },

  notiText: {
    alignSelf: "center",
    fontSize: wp(3),
    color: global.COLOR.white,
  },
  listContainer: {
    borderBottomColor: global.COLOR.lightGray,
    borderBottomWidth: wp(0.5),
    marginBottom: hp(1),
  },
  btmViewMessage: {
    marginHorizontal: wp(2),
    marginVertical: hp(3),
    flexDirection: "row",
    alignItems: "center",
  },

  imgMessage: {
    height: wp(14),
    width: wp(14),
    backgroundColor: global.COLOR.lightGray,
    borderRadius: wp(100),
  },
  onlineView: {
    position: "absolute",
    bottom: hp(0.5),
    left: wp(11),
    borderRadius: wp(100),
    width: wp(2),
    height: wp(2),
    backgroundColor: global.COLOR.AppColor,
  },
  rightViewMessage: {
    marginLeft: wp(4),
  },
  FName: {
    color: global.COLOR.friendName,
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
});
