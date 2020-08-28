import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from '../../utils/global'

export default StyleSheet.create({
    //   VerifyNumber.js:
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
        height: Platform.OS === 'ios' ? 20 : 0,
    },
    container: {
        flex: 1, backgroundColor: global.Colors.white,
    },
    touchVIewAddVeh: {
        marginTop: hp(16),
    },
    logoView: {
        marginTop: hp(2),
        justifyContent: 'center',
    },
    logo: {
        height: hp(25), alignSelf: 'center',
    },
    touchNext: {
        backgroundColor: global.Colors.AppColor,
        marginBottom: hp(3),
        marginTop: hp(3),
        height: hp(7),
        marginHorizontal: wp(5),
        justifyContent: 'center',
        borderRadius: 10,
        shadowOffset: {
            height: 20, width: 20,
        },
        elevation: 3,
    },
    loginText: {
        color: global.Colors.white,
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    verfyView: {
        marginTop: hp(3),
        backgroundColor: global.Colors.white,
        justifyContent: 'center',
    },
    verfyText: {
        fontSize: wp(4), alignSelf: 'center',
    },
    pinView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(3),
        alignSelf: 'center'
    },
    pintText: {
        fontSize: wp(3),
        alignSelf: 'center',
        color: global.Colors.gray,
    },
    numbrText: {
        fontSize: wp(3),
        marginLeft: wp(1),
        color: global.Colors.gray,
    },
    codeTopView: {
        marginTop: hp(2), alignSelf: 'center',
    },
    codeView: {
        alignSelf: 'center'
    },
    cellStyle: {
        borderBottomWidth: 2,
        borderColor: 'gray',
        alignSelf: 'center',
    },
    time: {
        fontSize: wp(4),
        marginTop: hp(4),
        alignSelf: 'center',
    },
    otp: {
        fontSize: wp(3),
        textAlign: 'center',
        marginTop: hp(1),
        color: global.Colors.gray,
    },

})