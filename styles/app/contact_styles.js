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
   
    headerText: {
        color: global.Colors.white, fontSize: wp(4)
    },
    statusView: {
        backgroundColor: global.Colors.AppColor,
        height: Platform.OS === 'ios' ? 20 : 0,
    },
    imgView: {
        marginTop: hp(9),
        justifyContent: 'center',
    },
    bellS: {
        tintColor: global.Colors.white,
        height: hp(5),
        width: hp(4),
    },

  
  
    radiousContact: {
        marginTop: hp(4),
        borderWidth: wp(1.5), alignSelf: 'center',
        borderColor: global.Colors.AppColor,
        height: wp(17),
        width: wp(17),
        borderRadius: wp(100),
        justifyContent: 'center'

    },
    topcContact: {
        marginTop: hp(4)
    },
    containerMybooking: {
        flex: 1, backgroundColor: global.Colors.newContainer
    },
    
    inquContac:
    {
        alignSelf: 'center',
        marginVertical: hp(8)
    },
    welcomeSignup: {
        fontSize: wp(4), fontWeight: 'bold',
        alignSelf: 'center',
    },
    imgContact: {
        alignSelf: 'center',
        height: hp(6),
        width: wp(6),
        tintColor: global.Colors.AppColor
    },
    numberContact: {
        alignSelf: 'center',
        marginTop: hp(0.5),
        fontSize: wp(3)
    },
   
})