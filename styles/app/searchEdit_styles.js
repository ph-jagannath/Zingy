import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import global from "../../utils/global";
import global from "../../utils/global";

export default StyleSheet.create({
  containerMybooking: {
    flex: 1,
    backgroundColor: global.COLOR.newContainer,
  },
  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    height: Platform.OS === "ios" ? 20 : 0,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(4),
  },
  SearchEditVehicle: {
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: global.COLOR.darkGreen,
    borderBottomWidth: 1,
    height: hp(8),
    marginHorizontal: wp(1),
  },
  header: {
    borderBottomColor: global.COLOR.white,
  },
  searchIcon: {
    marginLeft: wp(2),
    fontWeight: "bold",
  },
  inputEditV: {
    width: wp(88),
    fontSize: 18,
    marginLeft: 10,
  },
});
