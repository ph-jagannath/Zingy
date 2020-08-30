import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import global from "../../utils/global";
import global from "../../utils/global";

export default StyleSheet.create({
  //   Dacwash.js   simple:

  container: {
    flex: 1,
    backgroundColor: global.COLOR.white,
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    height: Platform.OS === "ios" ? 20 : 0,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(4),
  },
  searchModal: {
    flexDirection: "row",
    height: hp(8),
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: global.COLOR.white,
    borderColor: global.COLOR.lightGray,
    shadowColor: global.COLOR.gray,
    borderBottomWidth: 3,
    borderRadius: 4,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  searchLeftIcon: { marginLeft: wp(3) },
  searchRightIcon: { marginRight: wp(3) },

  geoPlacetextInputContainer: {
    marginHorizontal: wp(10),
    backgroundColor: global.COLOR.white,
    marginTop: hp(-8.5),
    borderTopWidth: 0,
    borderBottomWidth: 0,
    height: hp(6),
  },
  geoPlaceTextInput: {
    backgroundColor: global.COLOR.white,
    color: global.COLOR.black,
    height: hp(6),
    fontSize: wp(4.5),
  },
  geoPlaceDescrip: {
    color: global.COLOR.black,
  },
  geoPlaceDescription: {
    marginLeft: wp(11.5),
    color: global.COLOR.black,
    fontWeight: "bold",
  },
  geoPlacelistView: {
    marginTop: hp(2),
  },

  locationTView: {
    backgroundColor: global.COLOR.white,
    position: "absolute",
    marginTop: hp(2),
    marginHorizontal: wp(7),
    width: wp(90),
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    minHeight: hp(7),
  },
  catAddLocation: {
    marginHorizontal: 5,
    position: "absolute",
    width: wp(98),
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  touchNext: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    marginBottom: hp(3),
    marginTop: hp(3),
    height: hp(7),
    marginHorizontal: wp(5),
    justifyContent: "center",
    borderRadius: 10,
    shadowOffset: {
      height: 20,
      width: 20,
    },
    elevation: 3,
  },
  loginText: {
    color: global.COLOR.white,
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },

  searchIcon: {
    marginLeft: wp(2),
    fontWeight: "bold",
  },

  touchRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationT: {
    fontSize: wp(3),
    marginHorizontal: wp(2),
    fontWeight: "bold",
    width: wp(75),
  },
});
