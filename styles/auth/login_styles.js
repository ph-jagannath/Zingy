import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import global from "../../utils/global";
import global from '../../utils/global'

export default StyleSheet.create({

    //   login:

    container: {
        flex: 1, backgroundColor: global.Colors.white,
    },
    header: {
        borderBottomColor: global.Colors.white
    },
    statusView: {
        backgroundColor: global.Colors.AppColor,
        height: Platform.OS === 'ios' ? 20 : 0,
    },
    imgView: {
        marginTop: hp(9),
        justifyContent: 'center',
    },

    contiFb: {
        marginTop: hp(10),
        borderRadius: 10,
        shadowColor: '#ccc',
        shadowOffset: {
            width: 10, height: 10
        },
        elevation: 5,
        marginHorizontal: wp(5), backgroundColor: global.Colors.fbTouchClor,
    },
    touchFb: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: hp(7),
        borderRadius: 10,
        backgroundColor: global.Colors.fbTouchClor,
    },
    img: {
        height: hp(18), alignSelf: 'center'
    },
    f: {
        fontSize: wp(7),
        marginLeft: 12,
        fontWeight: 'bold',
        color: '#fff',
    },
    contiwithFb: {
        fontSize: wp(4),
        color: '#fff',
        alignSelf: 'center',
        marginRight: 12,
    },
    marRight: {
        marginRight: wp(-3)
    },
    already: {
        alignSelf: 'center',
        fontSize: wp(3),
        marginTop: hp(8),
        color: global.Colors.gray,
    },
    itNumber: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(5),
        marginHorizontal: wp(8),
    },
    itly: {
        height: hp(3), width: hp(3),
        marginLeft: wp(7),
    },
    itlyEditV: {
        height: hp(3.8),
        width: wp(13),
    },
    itText: {
        marginLeft: 10, fontSize: wp(3)
    },
    phoneInput: {
        fontSize: wp(3.5), marginLeft: 5
    },
    touchlogin: {
        backgroundColor: global.Colors.AppColor,
        marginTop: hp(6),
        height: hp(7),
        marginHorizontal: wp(5),
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: hp(1)
    },
    containerMybooking: {
        flex: 1, backgroundColor: global.Colors.newContainer
    },
    itNumberLogin: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(5),
        borderRadius: 50,
        height: hp(9),
        marginHorizontal: wp(6),
        backgroundColor: global.Colors.white,
    },

    loginText: {
        color: global.Colors.white,
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    },



    dontAcView: {
        height: hp(9), backgroundColor: global.Colors.newContainer, alignItems: 'center', flexDirection: 'row', alignSelf: 'center',
    },
    dontAccount: {
        color: global.Colors.black, fontSize: wp(3)
    },

   
})