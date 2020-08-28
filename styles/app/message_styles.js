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
    flatListContainer: {
        marginTop: hp(2),
    },
    listContainerMyBook: {
        marginHorizontal: wp(5),
        borderRadius: 10,
        marginBottom: hp(2),
        backgroundColor: '#fff'
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
   
    bellS: {
        tintColor: global.Colors.white,
        height: hp(5),
        width: hp(4),
    },
    
    notiText: {
        alignSelf: 'center',
        fontSize: wp(3),
        color: global.Colors.white,
    },
    listContainer: {
        borderBottomColor: global.Colors.lightGray,
        borderBottomWidth: wp(0.5),
        marginBottom: hp(1),
    },
    btmViewMessage: {
        marginHorizontal: wp(2),
        marginVertical: hp(3),
        flexDirection: 'row',
        alignItems: 'center',
    },

    imgMessage: {
        height: wp(14), width: wp(14),
        backgroundColor: global.Colors.lightGray,
        borderRadius: wp(100),
    },
    onlineView: {
        position: 'absolute',
        bottom: hp(0.5),
        left: wp(11),
        borderRadius: wp(100),
        width: wp(2),
        height: wp(2),
        backgroundColor: global.Colors.AppColor

    },
    rightViewMessage: {
        marginLeft: wp(4)
    },
    FName: {
        color: global.Colors.friendName
    },
    notiView: {
        height: wp(5), width: wp(5),
        borderRadius: 100,
        backgroundColor: global.Colors.notiClr,
        justifyContent: 'center',
        position: 'absolute',
        right: 4, top: 2,
    },
})