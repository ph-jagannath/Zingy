import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import global from "../../utils/global";
import global from '../../utils/global'

export default StyleSheet.create({

    //   myvehicle.js:

    container: {
        flex: 1, backgroundColor: global.Colors.white,
    },
    header: {
        borderBottomColor: global.Colors.white
    },
    bellS: {
        tintColor: global.Colors.white,
        height: hp(5),
        width: hp(4),
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

    ViewGreen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: hp(7),
        backgroundColor: global.Colors.darkGreen,
    },
    test: {
        width: wp(55),
        marginLeft: wp(3),
        color: global.Colors.white,
        fontSize: wp(3),
    },
    standardPackage: {
        marginRight: wp(3), color: global.Colors.white, fontSize: 13,
    },
    shadowViewPackage: {
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        elevation: 2,
        borderBottomRightRadius: 5,
        backgroundColor: global.Colors.white,
        borderBottomLeftRadius: 5,
    },
    horzonView: {
        marginHorizontal: wp(2),
        marginTop: hp(2)

    },
    itemes: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(1),
    },
    imgCar: {
        height: hp(3), width: wp(5),
        tintColor: global.Colors.carClr,
    },
    exteriorText: {
        fontWeight: 'bold',
        marginLeft: 15,
        fontSize: wp(3),
        color: global.Colors.darkGreen,
    },
    expDate: {
        marginHorizontal: wp(2),
        marginTop: hp(2),
        fontSize: wp(3),
        marginBottom: hp(1),
        color: global.Colors.darkGreen,
        fontWeight: 'bold',
    },
    imgClean: {
        height: hp(3), width: wp(5),
    },
  




})