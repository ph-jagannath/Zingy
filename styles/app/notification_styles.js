import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from '../../utils/global'

export default StyleSheet.create({
    //   BookingDetail.js:
    header: {
        borderBottomColor: global.Colors.white
    },
     touchLeft: {
        marginTop: 5
    },
    headerText: {
        color: global.Colors.white, fontSize: wp(4)
    },
    flatListContainer: {
        marginTop: hp(2),
    },
    statusView: {
        backgroundColor: global.Colors.AppColor,
    },
    containerMybooking: {
        flex: 1, backgroundColor: global.Colors.newContainer
    },
})