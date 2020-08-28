import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from '../../utils/global'
export default StyleSheet.create({

    //   myvehicle.js:

    container: {
        flex: 1, backgroundColor: global.Colors.white,
    },
    header: {
        borderBottomColor: global.Colors.white
    },

    listContainerMyBook: {
        marginHorizontal: wp(5),
        borderRadius: 10,
        marginBottom: hp(2),
        backgroundColor: '#fff'
    },
    rendTouch: {
        marginHorizontal: wp(3),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
    locationTop: {
        flex: 1, marginTop: wp(5)
    },
    containerMybooking: {
        flex: 1, backgroundColor: global.Colors.newContainer
    },
    headerText: {
        color: global.Colors.white, fontSize: wp(4)
    },
    statusView: {
        backgroundColor: global.Colors.AppColor,
        height: Platform.OS === 'ios' ? 20 : 0,
    },
    toucTopLocation: {
        marginTop: 20, marginLeft: 12
    },
    bigRadioLocation: {
        height: 32, width: 32,
    },

    rightViewLocation: {
        // marginLeft: 20,
        marginTop: -13,
        width: wp(60)
    },
    locationTexts: {
        fontSize: wp(3.5),
    },
    touchBtmView: {
        marginVertical: wp(6.5),
        alignItems: 'center',
        flexDirection: 'row',

    },
    SimplerowView: {
        flexDirection: 'row',
    },
    locationType: {
        fontSize: wp(4),
    },
    addLocationText: {
        alignSelf: 'center',
        color: global.Colors.white,
        fontSize: wp(4)
    },

    bellS: {
        tintColor: global.Colors.white,
        height: hp(5),
        width: hp(4),
    },


    deleteIcon: {
        marginLeft: wp(3), height: hp(3), width: wp(5),
        tintColor: global.Colors.deleteIcon,
    },
    rightIcontLocation: {
        marginLeft: wp(8),
    },
    addLocation: {
        justifyContent: "center",
        height: hp(7),
        bottom: hp(5),
        borderRadius: 10,
        marginTop: hp(12),
        backgroundColor: global.Colors.AppColor,
        marginHorizontal: wp(5),
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        elevation: 2,
    },




})