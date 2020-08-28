import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import global from "../../utils/global";
import global from '../../utils/global'

export default StyleSheet.create({

    //   vehicleStatus:

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
   
   
    rendContainer: {
        borderBottomColor: global.Colors.gray,
        borderBottomWidth: 1,
    },
    rendTouch: {
        marginHorizontal: wp(3),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
    flatListContainer: {
        marginTop: hp(2),
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

    touchBtmView: {
        marginVertical: wp(6.5),
        alignItems: 'center',
        flexDirection: 'row',

    },
    audiImgV: {
        height: hp(5),
        width: wp(8),
    },
    rightViewStatus: {
        marginLeft: 20,
        marginTop: -13,
    },
    rightViewLocation: {
        // marginLeft: 20,
        marginTop: -13,
        width: wp(60)
    },
    locationTop: {
        flex: 1, marginTop: wp(5)
    },
    companyNames: {
        fontSize: wp(3.5),
        fontWeight: 'bold',
    },
    locationTexts: {
        fontSize: wp(3.5),
    },
    locationType: {
        fontSize: wp(4),
    },
    modelName: {
        fontSize: wp(3),
        color: global.Colors.AppColor,
    },
    rightIcon: {
        marginLeft: wp(1)
    },
    headerText: {
        color: global.Colors.white, fontSize: wp(4)
    },
   
})