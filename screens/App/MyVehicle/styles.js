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
    height: hp(110),
    width: wp(100),
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
    // backgroundColor: "#fff",
    borderWidth: 0.8,
    borderColor: global.COLOR.PRIMARY_DARK,
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
    color: "#fff",
    fontSize: wp(5),
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
    marginVertical: hp(2),
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
    height: hp(6),
    width: wp(12),
    resizeMode: "contain",
  },
  modalName: {
    fontSize: wp(3.3),
    color: global.COLOR.PRIMARY_DARK,
    textTransform: "uppercase",
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
  add_button: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    marginVertical: hp(3),
    height: hp(7),
    width: wp(75),
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  addText: {
    color: global.COLOR.white,
    fontSize: wp(4.5),
    fontWeight: "bold",
    alignSelf: "center",
  },
});
