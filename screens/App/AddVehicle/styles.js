import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import global from "../../../utils/global";

export default StyleSheet.create({
  //   AddVehicle.js:
  header: {
    borderBottomColor: global.COLOR.white,
  },
  headerText: {
    color: global.COLOR.white,
    fontSize: wp(5),
  },
  containerMybooking: {
    flex: 1,
    marginHorizontal: wp(2),
  },
  container: {
    flex: 1,
    height: hp(110),
    width: wp(100),
  },
  touchNext: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    marginBottom: hp(3),
    marginTop: hp(3),
    height: hp(7),
    marginHorizontal: wp(5),
    justifyContent: "center",
    borderRadius: 10,
    shadowOffset: {
      height: 20,
      width: 20,
    },
    elevation: 3,
  },

  touchVIewAddVeh: {
    marginTop: hp(16),
  },

  touchVIewEditV: {
    marginBottom: hp(6),
  },

  touchVIewChangePass: {
    marginTop: hp(10),
    marginBottom: hp(6),
  },

  borderViewAddVehi: {
    height: hp(7),
    backgroundColor: global.COLOR.white,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: global.COLOR.PRIMARY_DARK,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(1),
  },
  category: {
    fontSize: wp(3),
    color: global.COLOR.black,
    marginLeft: wp(3),
  },
  categoryClr: {
    fontSize: wp(3),
    color: global.COLOR.black,
    marginLeft: wp(10),
  },
  imgForword: {
    marginRight: wp(3),
    height: wp(3),
    width: wp(4),
    tintColor: global.COLOR.black,
  },
  addText: {
    alignSelf: "center",
    fontSize: wp(4),
  },
  loginText: {
    color: global.COLOR.white,
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  container2: {
    marginTop: hp(5),
  },

  container3: {
    marginTop: hp(0),
  },
  TopViewAddVecle: {
    marginTop: hp(3),
    marginHorizontal: wp(4),
  },
  outerText: {
    color: "gray",
    fontSize: wp(3.5),
  },
});
