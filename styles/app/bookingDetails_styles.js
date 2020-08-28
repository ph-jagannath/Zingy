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
    containerMybooking: {
        flex: 1, backgroundColor: global.Colors.newContainer
    },

    headerText: {
        color: global.Colors.white, fontSize: wp(4)
    },
    statusView: {
        backgroundColor: global.Colors.AppColor,
    },
    touchLeft: {
        marginTop: hp(1),
    },
    underScroll: {
        backgroundColor: global.Colors.gray,
        marginTop: hp(2),
        alignSelf: 'center',
        justifyContent: 'center',
        height: hp(12),
        width: wp(20),

    },

    empImg: {
        height: hp(10), width: wp(18), alignSelf: 'center'
    },
    wahrView: {
        alignSelf: 'center'
    },
    waherText: {
        fontWeight: 'bold', fontSize: wp(3)
    },
    number: {
        fontWeight: 'bold', marginTop: hp(1),
        fontSize: wp(3),
    },
    starView: {
        marginTop: hp(2), alignItems: 'center',
    },
    starStyle: {
        tintColor: global.Colors.black,
        height: hp(3), width: wp(5),
    },
    emptyStar: {
        tintColor: global.Colors.lightGray,
        height: hp(3), width: wp(5),
    },
    msgTouch: {
        marginTop: hp(3),
        alignSelf: 'center',
        height: wp(15),
        width: wp(15),
        justifyContent: 'center',
        borderRadius: wp(100),
        borderWidth: 5,
        borderColor: global.Colors.AppColor

    },
    msgImg: {
        alignSelf: 'center',
        height: wp(5), width: wp(5),
    },
    horizoView: {
        marginHorizontal: wp(3),
    },
    spacBetView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: global.Colors.white,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: hp(3)
    },
    leftViewBookingDetails: {
        flexDirection: 'row',
        marginLeft: wp(3),
        marginVertical: hp(3),
    },
    paymText: {
        fontSize: wp(3),
        fontWeight: 'bold',
        marginLeft: wp(1),
    },
    ModeText: {
        fontSize: wp(3),
        fontWeight: 'bold',

    },
    EuroText: {
        fontSize: wp(3),
        fontWeight: 'bold',
        marginRight: wp(3),
        marginVertical: hp(3)
    },
    locationText: {
        fontSize: wp(3),
        fontWeight: 'bold',
        marginRight: wp(3),
        marginVertical: hp(3),
        width: wp(60),
        textAlign: 'right',
    },
    locaton: {
        marginTop: hp(1),
        fontSize: wp(3),
        fontWeight: 'bold',
    },
    location: {
        fontSize: wp(3),
        fontWeight: 'bold',
    },
    viewPhoto: {
        fontWeight: 'bold',
        fontSize: wp(3),
        color: global.Colors.black,
        marginVertical: hp(3),
        alignSelf: 'center',
    },
    touchView: {
        flexDirection: 'row',
        marginTop: hp(2),
        height: hp(10),
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    perWashTouch: {
        height: hp(7),
        width: wp(47),
        backgroundColor: global.Colors.midGreen,
        justifyContent: 'center'

    },
    perwash: {
        alignSelf: 'center', color: global.Colors.white,
    },
    afterTouch: {
        height: hp(7),
        width: wp(47),
        backgroundColor: global.Colors.darkGreen,
        justifyContent: 'center'
    },
    rowViewMyBooking: {
        flexDirection: 'row', marginTop: hp(1),
        height: hp(8),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    myBookTouc: {
        height: hp(7), borderRadius: 15,
        width: wp(46),
        justifyContent: 'center'
    },
    mybook: {
        alignSelf: 'center',
    },
    preTouc: {
        height: hp(7),
        borderRadius: 15,
        width: wp(46),
        justifyContent: 'center'
    },

})