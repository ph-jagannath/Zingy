import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../utils/global";

export default StyleSheet.create({
  //   BookingDetail.js:
  header: {
    borderBottomColor: global.COLOR.white,
  },
  touchLeft: {
    marginTop: 5,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(4),
  },
  flatListContainer: {
    marginTop: hp(2),
  },
  statusView: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
  },
  containerMybooking: {
    flex: 1,
    backgroundColor: global.COLOR.newContainer,
  },
});
