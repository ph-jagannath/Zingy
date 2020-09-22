import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  //   vehicleStatus:

  container: {
    flex: 1,
    height: hp(110),
    width: wp(100),
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    height: Platform.OS === "ios" ? 20 : 0,
  },

  rendContainer: {
    borderBottomColor: global.COLOR.gray,
    borderBottomWidth: 1,
  },
  rendTouch: {
    marginHorizontal: wp(3),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  flatListContainer: {
    flex: 1,
    // marginVertical: hp(2),
  },
  list_empty_text: {
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: hp(27),
  },
  listContainerMyBook: {
    marginHorizontal: wp(5),
    borderRadius: 10,
    marginVertical: hp(1),
    // backgroundColor: "#fff",
    borderWidth: 0.8,
    borderColor: global.COLOR.PRIMARY_DARK,
  },

  touchBtmView: {
    marginVertical: wp(6.5),
    alignItems: "center",
    flexDirection: "row",
  },
  audiImgV: {
    height: hp(6),
    width: wp(12),
    resizeMode: "contain",
  },
  rightViewStatus: {
    marginLeft: 20,
    marginTop: -13,
  },
  rightViewLocation: {
    // marginLeft: 20,
    marginTop: -13,
    width: wp(60),
  },
  locationTop: {
    flex: 1,
    marginTop: wp(5),
  },
  companyNames: {
    fontSize: wp(4),
    fontWeight: "bold",
  },
  locationTexts: {
    fontSize: wp(3.5),
  },
  locationType: {
    fontSize: wp(4),
  },
  modelName: {
    fontSize: wp(3.5),
    color: global.COLOR.PRIMARY_DARK,
    textTransform: "uppercase",
  },
  rightIcon: {
    marginLeft: wp(1),
  },
  headerText: {
    color: "#fff",
    fontSize: wp(5),
  },
});
