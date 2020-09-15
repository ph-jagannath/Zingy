import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
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
  status_bar: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    height: hp(6),
    justifyContent: "center",
  },
  status_bar_text: {
    color: "#fff",
    marginLeft: wp(4),
  },
  washer_details_container: {
    backgroundColor: "#fff",
    // height: hp(6),
    // justifyContent: "center",
    marginVertical: hp(2.5),
    marginHorizontal: wp(2.5),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name_container: {
    marginHorizontal: wp(4),
  },
  name_text: {
    fontSize: wp(4),
    textTransform: "capitalize",
    color: global.COLOR.PRIMARY_DARK,
  },
  rating_container: {
    flexDirection: "row",
    marginTop: hp(1),
  },
  rating: {
    marginRight: wp(4),
  },
  right_container: {
    justifyContent: "center",
    alignItems: "center",
  },
  phone: {
    marginTop: -hp(1),
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
});
