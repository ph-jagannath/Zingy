import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import global from "../../utils/global";
import global from '../../utils/global'

export default StyleSheet.create({

    //   Dacwash.js   simple:

    container: {
        flex: 1, backgroundColor: global.Colors.white,
    },
    header: {
        borderBottomColor: global.Colors.white
    },
    headerText: {
        color: global.Colors.white, fontSize: wp(4)
    },
    searchModal: {
        flexDirection: 'row',
        height: hp(8),
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: global.Colors.white,
        borderColor: global.Colors.lightGray,
        shadowColor: global.Colors.gray,
        borderBottomWidth: 3,
        borderRadius: 4,
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    searchLeftIcon: { marginLeft: wp(3) },
    searchRightIcon: { marginRight: wp(3) },

    geoPlacetextInputContainer: {
        marginHorizontal: wp(10),
        backgroundColor: global.Colors.white,
        marginTop: hp(-8.5),
        borderTopWidth: 0,
        borderBottomWidth: 0,
        height: hp(6),
    },
    geoPlaceTextInput: {
        backgroundColor: global.Colors.white,
        color: global.Colors.black,
        height: hp(6),
        fontSize: wp(4.5),
    },
    geoPlaceDescrip: {
        color: global.Colors.black,
    },
    geoPlaceDescription: {
        marginLeft: wp(11.5),
        color: global.Colors.black,
        fontWeight: 'bold'
    },
    geoPlacelistView: {
        marginTop: hp(2),
    },
    
    locationTView: {
        backgroundColor: global.Colors.white,
        position: 'absolute',
        marginTop: hp(2), marginHorizontal: wp(7),
        width: wp(90),
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: "row",
        minHeight: hp(7),
    },
    searchIcon: {
        marginLeft: wp(2),
        fontWeight: 'bold',

    },
    inputSearch: {
        fontSize: 14, width: "82%", marginLeft: 8
    },
    touchRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationT: {
        fontSize: wp(3), marginHorizontal: wp(2), fontWeight: 'bold',
        width: wp(75)
    },
    imgCarDacWash: {
        height: hp(3), width: wp(5), tintColor: global.Colors.white, marginLeft: 10
    },
    btmViewDacWashLocation: {
        backgroundColor: global.Colors.white, justifyContent: 'center',
        marginHorizontal: wp(3), marginBottom: hp(1), marginTop: hp(1)
    },
    listView: {
        marginHorizontal: wp(3)
    },
    inOutText: {
        color: global.Colors.white, fontSize: wp(3), marginLeft: wp(2)
    },
    rowView1: {
        flexDirection: 'row', marginLeft: wp(1),
        marginVertical: hp(1)
    },
    washNowView: {
        borderRadius: 7,
        borderWidth: 1,
        backgroundColor: global.Colors.AppColor,
        justifyContent: 'center', height: hp(7),
        width: wp(28)
    },
    washLaterView: {
        marginLeft: wp(3),
        borderWidth: 1,
        backgroundColor: global.Colors.white,
        justifyContent: 'center', height: 50,
        width: wp(28)

    },
    pack: {
        alignSelf: 'center', color: global.Colors.AppColor, fontSize: wp(3)
    },
    washLText: {
        alignSelf: 'center', color: global.Colors.AppColor, fontSize: wp(3)
    },

    washNow: {
        alignSelf: 'center', color: global.Colors.white, fontSize: wp(3)
    },
    apClrView: {
        alignItems: 'center', height: hp(4), borderRadius: 5,
        backgroundColor: global.Colors.AppColor, flexDirection: 'row',
    },
    touchAppClrView: {
        borderRadius: 10, borderColor: 'gray',
        margin: wp(1),
        shadowColor: "#000",
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1,
        marginTop: hp(0.5),
    },
    standrd: {
        fontSize: wp(3), marginVertical: hp(1),
        marginRight: wp(5), marginLeft: wp(1)
    },
    priceDacwash: {
        alignSelf: 'flex-end', right: 10, fontSize: wp(3),
        marginVertical: hp(1),
    },




  
   
})