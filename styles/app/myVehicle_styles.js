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
  imgView: {
    marginTop: hp(9),
    justifyContent: "center",
  },
  bellS: {
    tintColor: global.COLOR.white,
    height: hp(5),
    width: hp(4),
  },

  topTouch: {
    marginHorizontal: wp(1),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  horizonView: {
    marginVertical: hp(4),
    alignItems: "center",
    flexDirection: "row",
  },

  rightViewMyVehicle: {
    marginLeft: wp(4),
    marginTop: -1,
  },
  comName: {
    fontSize: wp(3.5),
    fontWeight: "700",
  },
  audiImg: {
    height: wp(8),
    width: wp(8),
  },
  modalName: {
    fontSize: wp(3),
    color: global.COLOR.PRIMARY_LIGHT,
  },
  delEdit: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteIcon: {
    marginLeft: wp(3),
    height: hp(3),
    width: wp(5),
    tintColor: global.COLOR.deleteIcon,
  },
  rightIcon: {
    marginLeft: wp(1),
  },
});
