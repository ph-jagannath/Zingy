import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import global from "../../utils/global";
import global from "../../../utils/global";

export default StyleSheet.create({
  //   Dacwash.js   simple:

  container: {
    flex: 1,
    backgroundColor: global.COLOR.white,
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(5),
    textTransform: "capitalize",
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
    position: "absolute",
    marginTop: hp(2),
    alignSelf: "center",
    width: wp(90),
  },
  search_bar: {
    minHeight: hp(7),
    borderRadius: 7,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginLeft: wp(2),
    fontWeight: "bold",
  },
  inputSearch: {
    fontSize: 14,
    width: "82%",
    marginLeft: 8,
  },
  locationT: {
    fontSize: wp(3),
    marginHorizontal: wp(2),
    marginVertical: hp(1),
    fontWeight: "bold",
    width: wp(75),
  },
  imgCarDacWash: {
    height: hp(3),
    width: wp(5),
    tintColor: global.COLOR.white,
    marginLeft: 10,
  },
  btmViewDacWashLocation: {
    backgroundColor: global.COLOR.white,
    justifyContent: "center",
    marginHorizontal: wp(3),
    marginBottom: hp(1),
    marginTop: hp(1),
  },
  listView: {
    marginHorizontal: wp(3),
  },
  inOutText: {
    color: global.COLOR.white,
    fontSize: wp(3.5),
    marginLeft: wp(2),
  },
  rowView1: {
    flexDirection: "row",
    marginLeft: wp(1),
    marginVertical: hp(1),
  },
  washNowView: {
    borderRadius: 7,
    borderWidth: 1,
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    justifyContent: "center",
    height: hp(7),
    width: wp(28),
  },
  washLaterView: {
    marginLeft: wp(3),
    borderWidth: 1,
    backgroundColor: global.COLOR.white,
    justifyContent: "center",
    height: 50,
    width: wp(28),
  },
  pack: {
    alignSelf: "center",
    color: global.COLOR.PRIMARY_LIGHT,
    fontSize: wp(3),
  },
  washLText: {
    alignSelf: "center",
    color: global.COLOR.PRIMARY_LIGHT,
    fontSize: wp(3),
  },

  washNow: {
    alignSelf: "center",
    color: global.COLOR.white,
    fontSize: wp(3),
  },
  apClrView: {
    alignItems: "center",
    height: hp(4),
    borderRadius: 5,
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    flexDirection: "row",
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
  map_pin_marker: {
    zIndex: 9,
    position: "absolute",
    marginTop: hp(31),
    alignSelf: "center",
  },
  map_pin_marker_image: {
    height: 35,
    width: 35,
    resizeMode: "contain",
    tintColor: global.COLOR.PRIMARY_DARK,
  },
  map_pin_marker_image_sp: {
    height: 35,
    width: 35,
    resizeMode: "contain",
    tintColor: global.COLOR.PRIMARY_LIGHT,
  },
  map_my_location: {
    zIndex: 9,
    position: "absolute",
    // marginTop: hp(35),
    // alignSelf: "center",
    right: wp(5),
    bottom: hp(30),
    backgroundColor: global.COLOR.PRIMARY_DARK,
    padding: 7,
    borderRadius: 30,
  },
  map_my_location_image: {
    height: 35,
    width: 35,
    resizeMode: "contain",
    tintColor: global.COLOR.PRIMARY_DARK,
  },
  map_address_icon_container: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  list_empty_container: {
    height: hp(9.5),
    justifyContent: "center",
  },
  list_empty_text: {
    fontSize: wp(4),
    width: wp(85),
    color: global.COLOR.PRIMARY_DARK,
  },
  add_location_container: {
    width: wp(90),
    borderRadius: 15,
    height: hp(24),
    backgroundColor: "#fff",
    // justifyContent: "space-between",
  },
  add_location_text: {
    fontSize: wp(4.5),
    alignSelf: "center",
    marginTop: hp(1.6),
  },
  add_button: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    marginVertical: hp(3),
    height: hp(6.5),
    width: wp(65),
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  add_button_Text: {
    color: global.COLOR.white,
    fontSize: wp(4.3),
    fontWeight: "bold",
    alignSelf: "center",
  },
});
