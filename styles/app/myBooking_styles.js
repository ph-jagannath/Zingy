import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from '../../utils/global'

export default StyleSheet.create({
    //   myBooking.js:
    header: {
        borderBottomColor: global.Colors.white
    },
    containerMybooking: {
        flex: 1, backgroundColor: global.Colors.newContainer
    },

    headerText: {
        color: global.Colors.white, fontSize: wp(4)
    },
    preTouc: {
        height: hp(7),
        borderRadius: 15,
        width: wp(46),
        justifyContent: 'center'
    },
    statusView: {
        backgroundColor: global.Colors.AppColor,
        height: Platform.OS === 'ios' ? 20 : 0,
    },
    bellS: {
        tintColor: global.Colors.white,
        height: hp(5),
        width: hp(4),
    },
    leftIcon: {
        marginTop: hp(1)
    },

    marHorizon: {
        marginHorizontal: wp(3),
    },
    dates: {
        fontSize: 14, color: global.Colors.lightGray,
    },
    rowViewMyBooking: {
        flexDirection: 'row', marginTop: hp(1),
        height: hp(8),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceMyBook: {
        color: global.Colors.black,
        fontWeight: 'bold',
        fontSize: wp(3.5),
    },
    priceView: {
        flexDirection: 'row', marginLeft: 47
    },
    myBookTouc: {
        height: hp(7), borderRadius: 15,
        width: wp(46),
        justifyContent: 'center'
    },
    cancel: {
        fontSize: wp(3), color: global.Colors.AppColor, marginBottom: 10,
    },
    mybook: {
        alignSelf: 'center',
    },
    leftView: {
        marginLeft: 55, flexDirection: 'row',
    },
    preTouc: {
        height: hp(7),
        borderRadius: 15,
        width: wp(46),
        justifyContent: 'center'
    },
    containerMybooking: {
        flex: 1, backgroundColor: global.Colors.newContainer
    },
    listContainerMyBook: {
        marginHorizontal: wp(5),
        borderRadius: 10,
        marginBottom: hp(2),
        backgroundColor: '#fff'
    },
    standView: {
        marginTop: hp(2), marginLeft: wp(11),
        marginHorizontal: wp(2),
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    SimplerowView: {
        flexDirection: 'row',
    },
    bigRadioLocation: {
        height: 32, width: 32,
    },
    rightIcontLocation: {
        marginLeft: wp(8),
    },
    addLocation: {
        justifyContent: "center",
        height: hp(7),
        bottom: hp(5),
        borderRadius: 10,
        marginTop: hp(5),
        backgroundColor: global.Colors.AppColor,
        marginHorizontal: wp(5),
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        elevation: 2,
    },
    toucTopLocation: {
        marginTop: 20, marginLeft: 12
    },
    centerText: {
        color: global.Colors.white, fontSize: wp(4)
    },
    addLocationText: {
        alignSelf: 'center',
        color: global.Colors.white,
        fontSize: wp(4)
    },
    widthView: {
        width: wp(11)
    },
    stand: {
        width: wp(55), color: global.Colors.darkGreen, fontWeight: 'bold', fontSize: 14,
    },
    car: {
        alignSelf: 'center', height: hp(5), width: wp(9),
        tintColor: global.Colors.darkGreen,
    },
    locationMyBook: {
        width: wp(55),
        color: global.Colors.black,
        fontWeight: 'bold', fontSize: 14,
    },
    resch: {
        marginLeft: wp(6), fontSize: wp(3),
        color: global.Colors.AppColor,
    },


})