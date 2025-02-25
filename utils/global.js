import { Dimensions, Platform } from "react-native";
import Constants from "expo-constants";

import "./Translation";

var { height, width } = Dimensions.get("window");

export default {
  AUTHTOKEN: "AUTH", // for auth in app and key for async storage
  USER_DATA: "USER_DATA", //Key for storing data
  API_TOKEN: "API_TOKEN",
  ASSETS: {
    LOGO: require("../assets/LOGO.png"),
    LOGO_ICON: require("../assets/LOGO.png"),
    BGIMAGE: require("../assets/background_image.jpg"),
    FLAGE: require("../assets/italy.png"),
    ENGLISH: require("../assets/englishFlag.png"),
    BELL: require("../assets/bell.png"),
    DELETE: require("../assets/delete.png"),
    MOBAIL: require("../assets/mobilenumber.png"),
    EMAIL: require("../assets/email.png"),
    LOCK: require("../assets/lock.png"),
    USER: require("../assets/user.png"),
    RADIO: require("../assets/radioOf.png"),
    EMP: require("../assets/emp.png"),
    PHONE: require("../assets/phone.png"),
    FB: require("../assets/facebook.png"),
    INSTA: require("../assets/instagram.png"),
    DOWN: require("../assets/down.png"),
    UP: require("../assets/uparrow.png"),
    CAR: require("../assets/exteriorewash.png"),
    BIKE: require("../assets/bike.png"),
    CLEANING: require("../assets/interiorcleaning.png"),
    MESSAGE: require("../assets/message.png"),
    STAR: require("../assets/star.png"),
    NO_IMAGE: require("../assets/no_image.jpg"),
    SELECT_VEHICLE_IMAGE:
      "http://placehold.jp/cccccc/404040/150x150.png?text=SELECT%20VEHICLE%20IMAGE",
    NO_IMAGE: "http://placehold.jp/cccccc/404040/150x150.png?text=NO%20IMAGE",
    EXT_WASH: require("../assets/ext-wash.png"),
    INT_WASH: require("../assets/interiorcleaning.png"),
    ENG_WASH: require("../assets/enginedetailing.png"),
    MAP_PIN: require("../assets/map_pin.png"),
    MAP_PIN_WASHER: require("../assets/map_pin_washer.png"),
    BACK_ARROW: require("../assets/back_arrow.png"),
    PAY_CASH: require("../assets/pay_cash.png"),
    PAY_CARD: require("../assets/pay_card.png"),
    PAY_PACKAGE: require("../assets/pay_package.png"),
  },
  COLOR: {
    PRIMARY_LIGHT: "#0E94DC",
    PRIMARY_DARK: "#0E94DC",
    AppColor: "#0E94DC",
    white: "#fff",
    gray: "gray",
    black: "gray",
    fbTouchClor: "#3B589C",
    iconDonwClr: "#c2c2c2",
    fontColor: "#0E94DC",
    lightGray: "#ccc",
    midGreen: "#0E94DC",
    darkGreen: "#0E94DC",
    notiClr: "#E10404",
    friendName: "#4155A4",
    carClr: "#192E89",
    newContainer: "#F7F7F7",
    deleteIcon: "red",
  },
  CONSTANT: {
    APPNAME: Constants.manifest.name,
    FB_APP_ID: Constants.manifest.facebookAppId,
    APPVERSION: Constants.manifest.version,
    STATUSBAR: Constants.statusBarHeight,
    MANIFEST: Constants.manifest,
    APPDESCRIPTION: "The best and trending Amnesty List.",
    PLAYSTOREURL: "",
    APPSTOREURL: "",
    HEIGHT: height,
    WIDTH: width,
    DEVICETYPE: Platform.OS,
    DEVICETOKEN: "",
    CURRENCY: "€",
    PLACESAPI: "AIzaSyCdIiqraik9uJkeLdoarnKms9voK1Q94pk",
    LAT: 35.88381255433861,
    LNG: 14.451569793750009,
  },
  USER: {},

  // Reusable Data
  ALL_COLORS: [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ],
  //  from 1900 till now
  ALL_YEARS: Array.from(Array(new Date().getFullYear() - 1899), (_, i) =>
    (i + 1900).toString()
  ),
  //

  /**
   * All Api response data storage varibles
   */
  MY_VEHICLES: [],
  MAKE_MODAL: [],
  MAKE_COUNTRY: [],
  MY_PACKAGES: [],
  MY_LOCATIONS: [],
  MY_BOOKINGS: [],
  PLANS_LIST_ZONE: [],
  NEARBY_SP: [],
  PLANS_LIST: [],
  PACKAGE_LIST_ZONE: [],
  FAQ: [],
  PAGE_CONTENT: [],
  SCOOTER_WASH_PRICE: [],
  BOOKING_DETAILS: [],
  NOTIFICATIONS_LIST: [],

  // Add vehicle data
  ADD_VEHICLE_DATA: [
    "", // 0 make id
    "", // 1 make name
    "", // 2 model id
    "", // 3 model name
    "", // 4 year
    "", // 5 color
    "", // 6 country name
    "", // 7 country id
    "", // 8 plate number
    "", // 9 image
  ],

  // add booking data 4 wheeler
  ADD_BOOKING_4_DATA: [
    "", // 0 vehicle data
    "", // 1 plan data
    "", // 2 address
    "", // 3 lat
    "", // 4 lng
    "", // 5 booking date
    "", // 6 remark
    "", // 7 payment_type  1 => cash 2 => card 3=> package
    "", // 8 booking_type  1 => ondemand 2 => schedule
    "", // 9 package data
    "", // 10 card exp_month
    "", // 11 card exp_year
    "", // 12 card number
    "", // 13 card cvv
    "", // 14 booking time
    "", // 15 card name
    "", // 16 2-wheeler amount
  ],
};
