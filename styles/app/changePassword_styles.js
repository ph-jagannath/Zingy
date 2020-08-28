import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from '../../utils/global'

export default StyleSheet.create({

    //   changepassword.js:
    containerMybooking: {
        flex: 1, backgroundColor: global.Colors.newContainer
    },
    statusView: {
        backgroundColor: global.Colors.AppColor,
        height: Platform.OS === 'ios' ? 20 : 0,
    },
    headerText: {
        color: global.Colors.white, fontSize: wp(4)
    },
    touchVIewChangePass: {
        marginTop: hp(10),
        marginBottom: hp(6)
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
    header: {
        borderBottomColor: global.Colors.white
    },
   
    nameView: {
        marginTop: hp(2),
        height: hp(8),
        marginHorizontal: wp(5),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: global.Colors.white,
        borderRadius: 50,

    },
    sideIcon: {

        height: hp(5),
        width: wp(6),
        tintColor: '#ccc',
        marginLeft: wp(5),

    },
    nameInputSignup: {
        width: wp(70),
        height: hp(6),
        marginLeft: hp(2),
        borderBottomWidth: 0,
        backgroundColor: 'white',


    },
  
  
   
})