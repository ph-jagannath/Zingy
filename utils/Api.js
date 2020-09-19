import Axios from "axios";
import Loading from "../components/Loading";
import { showMessage } from "react-native-flash-message";
import * as RootNavigation from "./RootNavigation";
import AsyncStorage from "@react-native-community/async-storage";
import global from "./global";
import * as SplashScreen from "expo-splash-screen";
import * as Facebook from "expo-facebook";
import * as GoogleSignIn from "expo-google-sign-in";
// Network listener

// base url
Axios.defaults.baseURL = "https://dacwash.com/Webservices/";

// log request
Axios.interceptors.request.use((request) => {
  console.log("Starting Request :", request.baseURL + request.url);
  console.log("Request Data :", request.data);
  console.log("Request Header :", request.headers.Authorization);
  return request;
});

// log response
Axios.interceptors.response.use((response) => {
  console.log("Response: \n", response.status, response.data);
  return response;
});

// store auth token in storage
function StoreToken(responseData) {
  // console.log(responseData);
  AsyncStorage.setItem(global.API_TOKEN, responseData, (err) => {
    if (err) {
      console.log("an error");
      throw err;
    }
    console.log("Token Stored");
    global.AUTHTOKEN = responseData;
  }).catch((err) => {
    console.log("error is: " + err);
  });
}

//  get user token
export async function ValidateUser() {
  try {
    let accessToken = await AsyncStorage.getItem(global.API_TOKEN).then(
      (value) => {
        if (value) {
          return value;
        }
      }
    );

    if (!accessToken) {
      console.log("no access token");
      console.log("navigate to Auth");
      Loading.hide();
      RootNavigation.navigate("Auth");
      // hide splash screen
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 200);
    } else {
      global.AUTHTOKEN = accessToken;

      let userData = await AsyncStorage.getItem(global.USER_DATA).then(
        (value) => {
          if (value) {
            return value;
          }
        }
      );

      global.USER = JSON.parse(userData);

      console.log("navigate to app");
      Loading.hide();

      RootNavigation.navigate("App");
      // hide splash screen
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 200);
    }
  } catch (error) {
    console.log("Something went wrong");
  }
}
//  get user token
export async function GetToken(data) {
  try {
    let accessToken = await AsyncStorage.getItem(global.API_TOKEN).then(
      (value) => {
        if (value) {
          return value;
        }
      }
    );

    if (!accessToken) {
      console.log("no access token");
      console.log("navigate to Auth");
      Loading.hide();
      RootNavigation.navigate("Auth");
    } else {
      global.AUTHTOKEN = accessToken;

      // store user data
      AsyncStorage.setItem(global.USER_DATA, JSON.stringify(data), (err) => {
        if (err) {
          console.log("an error");
          throw err;
        }
        console.log("User Data Stored");
      }).catch((err) => {
        console.log("error is: " + err);
      });
      let userData = await AsyncStorage.getItem(global.USER_DATA).then(
        (value) => {
          if (value) {
            return value;
          }
        }
      );

      global.USER = JSON.parse(userData);

      console.log("navigate to app");
      Loading.hide();

      RootNavigation.navigate("App");
    }
  } catch (error) {
    console.log("Something went wrong");
  }
}

//  store user data in storage
export async function StoreUserData(data) {
  try {
    // store user data
    AsyncStorage.setItem(global.USER_DATA, JSON.stringify(data), (err) => {
      if (err) {
        console.log("an error");
        throw err;
      }
      console.log("User Data Stored");
    }).catch((err) => {
      console.log("error is: " + err);
    });
    let userData = await AsyncStorage.getItem(global.USER_DATA).then(
      (value) => {
        if (value) {
          return value;
        }
      }
    );

    global.USER = JSON.parse(userData);
  } catch (error) {
    console.log("Something went wrong");
  }
}

// login api
export async function api_login(d) {
  Loading.show();
  Axios({
    method: "post",
    url: "login",
    data: {
      email: d.email,
      password: d.password,
      device_id: global.CONSTANT.DEVICETOKEN,
      device_type: global.CONSTANT.DEVICETYPE,
    },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.data.response.status) {
        StoreToken(response.data.response.data[0].user_id);
        GetToken(response.data.response.data[0]);
      } else {
        Loading.hide();
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
      }
    }.bind(this)
  );
}

// signup api
export async function api_register(d) {
  Loading.show();
  Axios({
    method: "post",
    url: "signup",
    data: {
      email: d.email,
      password: d.password,
      mobile: d.country_code + d.phoneNumber,
      first_name: d.name,
      last_name: " ",
      language: "eng",
      device_type: global.CONSTANT.DEVICETYPE,
      device_id: global.CONSTANT.DEVICETOKEN,
    },
    validateStatus: () => {
      return true; // I'm always returning true, you may want to do it depending on the status received
    },
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        RootNavigation.navigate("Login");
        showMessage({
          message: response.data.response.message,
          type: "success",
        });
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
      }
    }.bind(this)
  );
}

/**
 * Facebook Auth
 */
export async function FBAuth() {
  const appId = global.CONSTANT.FB_APP_ID;
  try {
    await Facebook.initializeAsync(appId);

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      appId,
      {
        permissions: ["public_profile", "email"],
      }
    );
    if (type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?fields=id,name,email,friends,birthday,picture.type(large)&access_token=${token}`
      );
      let data = await response.json();
      SocialLogin({
        email: data.email,
        name: data.name,
        social_type: "Facebook",
        social_id: data.id,
      });
      return data;
    } else {
      return false;
      // type === 'cancel'
    }
  } catch ({ message }) {
    showMessage({
      message: "Oops",
      description: message,
      type: "danger",
    });
  }
}

// Social Login api
export async function SocialLogin(d) {
  Loading.show();
  Axios({
    method: "post",
    url: "social_login",
    data: {
      email: d.email,
      first_name: d.name,
      social_id: d.social_id,
      login_type: d.social_type,
      language: "eng",
      device_type: global.CONSTANT.DEVICETYPE,
      device_id: global.CONSTANT.DEVICETOKEN,
      last_name: " ",
      password: "",
      mobile: "",
      country_code: "",
    },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.data.response.status) {
        StoreToken(response.data.response.data[0].user_id);
        GetToken(response.data.response.data[0]);
      } else {
        Loading.hide();
        GoogleSignIn.signOutAsync();
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
      }
    }.bind(this)
  );
}

// ForgotPassword api
export async function ForgotPassword(d) {
  Loading.show();
  const DATA = await Axios({
    method: "post",
    url: "forgotpassword",
    data: {
      email: d.email,
    },
    headers: { Authorization: "Bearer " + global.AUTHTOKEN },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.status == 200) {
        // StoreUserData(response.data.data);
        Loading.hide();
        Popup.show({
          type: "Success",
          title: global.CONSTANT.APPNAME + " Alert❗",
          button: false,
          textBody: response.data.success_message,
          buttonText: "Reset Now",
          callback: () => {
            Popup.hide();
            Linking.openURL(response.data);
            // NavigationService.navigate("Login");
          },
        });
        // return global.USER;
      } else {
        Loading.hide();
        Popup.show({
          type: "Danger",
          title: global.CONSTANT.APPNAME + " Alert❗",
          button: false,
          textBody: response.data.error_message,
          buttontext: "Ok",
          callback: () => Popup.hide(),
        });
      }
    }.bind(this)
  );
  return DATA;
}

// Logout api
export async function api_logout() {
  // Loading.show();
  // const DATA = await Axios({
  //   method: "get",
  //   url: "users/logout",
  //   headers: { Authorization: "Bearer " + global.AUTHTOKEN },
  //   validateStatus: () => {
  //     return true;
  //   },
  // }).then(
  //   async function () {
  //     await AsyncStorage.multiRemove([global.API_TOKEN, global.USER_DATA]);
  //     Loading.hide();
  //     RootNavigation.navigate("Auth");
  //   }.bind(this)
  // );
  // return DATA;
  GoogleSignIn.signOutAsync();
  await AsyncStorage.multiRemove([global.API_TOKEN, global.USER_DATA]);
  RootNavigation.navigate("Auth");
}

/**
 * Get USer Vehicles
 */

export async function api_get_vehicle() {
  Loading.show();
  global.MY_VEHICLES = [];
  const DATA = Axios({
    method: "post",
    url: "get_vehicle",
    data: {
      user_id: global.AUTHTOKEN,
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.MY_VEHICLES = response.data.response.data;
        return global.MY_VEHICLES;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Get make and model
 */

export async function api_get_make() {
  Loading.show();
  const DATA = Axios({
    method: "get",
    url: "get_make_modal",
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.MAKE_COUNTRY = response.data.response.data.country;
        global.MAKE_MODAL = response.data.response.data.makes;
        return global.MAKE_COUNTRY, global.MAKE_MODAL;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Add new vehicle
 */

export async function api_add_vehicle() {
  Loading.show();

  var data = new FormData();
  data.append("user_id", global.AUTHTOKEN);
  data.append("make_id", global.ADD_VEHICLE_DATA[0]);
  data.append("vehicle_model_id", global.ADD_VEHICLE_DATA[2]);
  data.append("country_id", global.ADD_VEHICLE_DATA[7]);
  data.append("plate_number", global.ADD_VEHICLE_DATA[8]);
  data.append("plate_code", " ");
  data.append("color", global.ADD_VEHICLE_DATA[5]);
  data.append("year", global.ADD_VEHICLE_DATA[4]);
  data.append("modal_id", global.ADD_VEHICLE_DATA[2]);
  if (global.ADD_VEHICLE_DATA[9].length > 0) {
    data.append("vehicle_picture", {
      uri: global.ADD_VEHICLE_DATA[9],
      name: "vehicle_picture.jpg",
      type: "image/jpg",
    });
  }

  const DATA = Axios({
    method: "post",
    url: "add_vehicle_postmen",
    data,
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        RootNavigation.navigate("Home");
        showMessage({
          message: response.data.response.message,
          type: "success",
          backgroundColor: global.COLOR.PRIMARY_DARK,
        });
        return true;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Edit vehicle
 */

export async function api_edit_vehicle(d) {
  Loading.show();
  var data = new FormData();
  data.append("user_id", global.AUTHTOKEN);
  data.append("make", d.make_id);
  data.append("type", d.vehicle_type);
  data.append("country_id", d.country_id);
  data.append("plate_number", d.plateNumber);
  data.append("plate_code", " ");
  data.append("color", d.color);
  data.append("year", d.year);
  data.append("model", d.model_id);
  data.append("vehicle_id", d.vehicle_id);
  data.append("vehicle_picture", {
    uri: d.vehicle_image,
    name: "vehicle_picture.jpg",
    type: "image/jpg",
  });

  const DATA = Axios({
    method: "post",
    url: "edit_vehicle_postmen",
    data,
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        RootNavigation.navigate("Home");
        showMessage({
          message: response.data.response.message,
          type: "success",
          backgroundColor: global.COLOR.PRIMARY_DARK,
        });
        return true;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Delete vehicle
 */

export async function api_delete_vehicle(d) {
  Loading.show();

  const DATA = Axios({
    method: "post",
    url: "delete_vehicle",
    data: {
      user_id: global.AUTHTOKEN,
      language: "eng",
      vehicle_id: d.id,
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        showMessage({
          message: response.data.response.message,
          type: "success",
          backgroundColor: global.COLOR.PRIMARY_DARK,
        });
        return true;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Get Packages
 */

export async function api_get_packages() {
  Loading.show();

  const DATA = Axios({
    method: "post",
    url: "user_package_list",
    data: {
      user_id: global.AUTHTOKEN,
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.MY_PACKAGES = response.data.response.data;
        return global.MY_PACKAGES;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Get Locations
 */

export async function api_get_locations() {
  Loading.show();

  const DATA = Axios({
    method: "post",
    url: "get_location",
    data: {
      user_id: global.AUTHTOKEN,
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.MY_LOCATIONS = response.data.response.data;
        return global.MY_LOCATIONS;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Add Locations
 */

export async function api_add_location(d) {
  Loading.show();

  const DATA = Axios({
    method: "post",
    url: "add_location",
    data: {
      user_id: global.AUTHTOKEN,
      latitude: d.lat,
      longitude: d.lng,
      address: d.address,
      id: "",
      type: d.type,
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        showMessage({
          message: response.data.response.message,
          type: "success",
          backgroundColor: global.COLOR.PRIMARY_DARK,
        });
        return true;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Get FAQ
 */

export async function api_get_faq() {
  Loading.show();

  const DATA = Axios({
    method: "post",
    url: "faq",
    data: {
      user_id: global.AUTHTOKEN,
      language: "eng",
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.FAQ = response.data.response.data;
        return global.FAQ;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Get Bookings
 *
 */

export async function api_get_bookings(d) {
  Loading.show();

  const DATA = Axios({
    method: "post",
    url: "my_bookings",
    data: {
      user_id: global.AUTHTOKEN,
      language: "eng",
      type: d,
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.MY_BOOKINGS = response.data.response.data;
        return global.MY_BOOKINGS;
      } else {
        global.MY_BOOKINGS = [];
        // showMessage({
        //   message: response.data.response.message,
        //   type: "danger",
        // });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Get Bookings details
 *
 */

export async function api_get_booking_details(d) {
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "my_booking_details",
    data: {
      user_id: global.AUTHTOKEN,
      booking_id: d,
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.BOOKING_DETAILS = response.data.response.data;
        return global.BOOKING_DETAILS;
      } else {
        global.BOOKING_DETAILS = [];
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Get plans list
 *
 */

export async function api_get_plan_list() {
  Loading.show();
  global.PLANS_LIST = [];
  const DATA = Axios({
    method: "post",
    url: "plan_list",
    data: {
      user_id: global.AUTHTOKEN,
      language: "eng",
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.PLANS_LIST = response.data.response.Data;
        return global.PLANS_LIST;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Get plans list zone
 *
 */

export async function api_get_plan_list_zone(d) {
  // Loading.show();
  const DATA = Axios({
    method: "post",
    url: "plan_list_zone",
    data: {
      user_id: global.AUTHTOKEN,
      language: "eng",
      vechicle_type: d.type,
      latitude: d.lat,
      longitude: d.lng,
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.PLANS_LIST_ZONE = response.data.response.Data;
        return global.PLANS_LIST_ZONE;
      } else {
        global.PLANS_LIST_ZONE = [];
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Get nearby service providers
 *
 */

export async function api_get_nearby_sp(d) {
  // Loading.show();
  const DATA = Axios({
    method: "post",
    url: "get_nearest_sp",
    data: {
      user_id: global.AUTHTOKEN,
      language: "eng",
      latitude: d.lat,
      longitude: d.lng,
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.NEARBY_SP = response.data.response.data;
        return global.NEARBY_SP;
      } else {
        global.NEARBY_SP = [];
        // showMessage({
        //   message: response.data.response.message,
        //   type: "danger",
        // });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * CREATE car booking api
 *
 */

export async function api_booking_4_save() {
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "booking_saves",
    data: {
      user_id: global.AUTHTOKEN,
      language: "eng",

      transaction_id: "",
      booking_date: global.ADD_BOOKING_4_DATA[5],
      booking_time: global.ADD_BOOKING_4_DATA[14],
      userId: global.AUTHTOKEN,
      user_vehicle_id: global.ADD_BOOKING_4_DATA[0].id,
      amount: global.ADD_BOOKING_4_DATA[1].amount,
      plan_id: global.ADD_BOOKING_4_DATA[1].id,
      booking_address: global.ADD_BOOKING_4_DATA[2],
      latitude: global.ADD_BOOKING_4_DATA[3],
      longitude: global.ADD_BOOKING_4_DATA[4],
      remark: global.ADD_BOOKING_4_DATA[6],
      payment_type: global.ADD_BOOKING_4_DATA[7],
      booking_type: global.ADD_BOOKING_4_DATA[8],
      package_id: global.ADD_BOOKING_4_DATA[9],
      exp_month: global.ADD_BOOKING_4_DATA[10],
      exp_year: global.ADD_BOOKING_4_DATA[11],
      number: global.ADD_BOOKING_4_DATA[12],
      cvc: global.ADD_BOOKING_4_DATA[13],
      charges: global.ADD_BOOKING_4_DATA[1].amount,
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.ADD_BOOKING_4_DATA = [];
        RootNavigation.navigate("MyBookings");
        showMessage({
          message: response.data.response.message,
          type: "success",
          backgroundColor: global.COLOR.PRIMARY_DARK,
        });

        return true;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Get package avialibility in location
 *
 */

export async function api_get_package_avail(d) {
  // Loading.show();
  const DATA = Axios({
    method: "post",
    url: "check_area_for_packages",
    data: {
      user_id: global.AUTHTOKEN,
      latitude: d.lat,
      longitude: d.lng,
      user_vehicle_id: d.vehicle_id,
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        return true;
      } else {
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Get list of packages  in the zone
 *
 */

export async function api_get_package_zone() {
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "get_packages_zone",
    data: {
      user_id: global.AUTHTOKEN,
      latitude: global.ADD_BOOKING_4_DATA[3],
      longitude: global.ADD_BOOKING_4_DATA[4],
      vechicle_type: global.ADD_BOOKING_4_DATA[0].type,
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.PACKAGE_LIST_ZONE = response.data.response.data;
        return global.PACKAGE_LIST_ZONE;
      } else {
        global.PACKAGE_LIST_ZONE = [];
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * package paymnent api
 *
 */

export async function api_package_pay() {
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "packagePayment",
    data: {
      user_id: global.AUTHTOKEN,
      userId: global.AUTHTOKEN,
      amount: global.ADD_BOOKING_4_DATA[9].cost,
      package_id: global.ADD_BOOKING_4_DATA[9].id,
      exp_month: global.ADD_BOOKING_4_DATA[10],
      exp_year: global.ADD_BOOKING_4_DATA[11],
      number: global.ADD_BOOKING_4_DATA[12],
      cvc: global.ADD_BOOKING_4_DATA[13],
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      if (response.data.response.status) {
        api_package_save(response.data.response.data.payment_id);

        // return true;
      } else {
        Loading.hide();
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 *  after  package paymnent save api
 *
 */

export async function api_package_save(d) {
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "add_packages",
    data: {
      user_id: global.AUTHTOKEN,
      transaction_id: d,
      zone_id: global.ADD_BOOKING_4_DATA[9].zone_id,
      amount: global.ADD_BOOKING_4_DATA[9].cost,
      package_id: global.ADD_BOOKING_4_DATA[9].id,
      address: global.ADD_BOOKING_4_DATA[2],
      latitude: global.ADD_BOOKING_4_DATA[3],
      longitude: global.ADD_BOOKING_4_DATA[4],
      user_vehicle_id: global.ADD_BOOKING_4_DATA[0].id,
      remark: global.ADD_BOOKING_4_DATA[6],
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.ADD_BOOKING_4_DATA = [];
        RootNavigation.navigate("Package");
        showMessage({
          message: response.data.response.message,
          type: "success",
          backgroundColor: global.COLOR.PRIMARY_DARK,
        });

        return true;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * Get scooter wash price
 *
 */

export async function api_get_scooter_price() {
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "get_scooter_wash_price",
    data: {
      user_id: global.AUTHTOKEN,
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.SCOOTER_WASH_PRICE = response.data.response.data.scooty_wash;
        return global.SCOOTER_WASH_PRICE;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * CREATE scooter booking api
 *
 */

export async function api_booking_2_save() {
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "scooter_booking_saves",
    data: {
      user_id: global.AUTHTOKEN,
      userId: global.AUTHTOKEN,
      amount: global.ADD_BOOKING_4_DATA[16],
      booking_address: global.ADD_BOOKING_4_DATA[2],
      latitude: global.ADD_BOOKING_4_DATA[3],
      longitude: global.ADD_BOOKING_4_DATA[4],
      remark: global.ADD_BOOKING_4_DATA[6],
      payment_type: global.ADD_BOOKING_4_DATA[7],
      booking_type: global.ADD_BOOKING_4_DATA[8],
      exp_month: global.ADD_BOOKING_4_DATA[10],
      exp_year: global.ADD_BOOKING_4_DATA[11],
      number: global.ADD_BOOKING_4_DATA[12],
      cvc: global.ADD_BOOKING_4_DATA[13],
      charges: global.ADD_BOOKING_4_DATA[16],
      language: "eng",
      plan_id: "",
      transaction_id: "",
      booking_date: "",
      booking_time: "",
      user_vehicle_id: "",
      package_id: "",
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.ADD_BOOKING_4_DATA = [];
        RootNavigation.navigate("MyBookings");
        showMessage({
          message: response.data.response.message,
          type: "success",
          backgroundColor: global.COLOR.PRIMARY_DARK,
        });

        return true;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * change password api
 *
 */

export async function api_update_password(d) {
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "change_password",
    data: {
      user_id: global.AUTHTOKEN,
      cofirm_password: d.conPassword,
      old_password: d.oldPassword,
      new_password: d.newPassword,
      language: "eng",
    },
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        showMessage({
          message: response.data.response.message,
          type: "success",
          backgroundColor: global.COLOR.PRIMARY_DARK,
        });
        return true;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * edit profile api
 *
 */

export async function api_update_profile(d) {
  Loading.show();
  var data = new FormData();
  data.append("user_id", global.AUTHTOKEN);
  data.append("first_name", d.name);
  data.append("last_name", " ");
  data.append("device_type", global.CONSTANT.DEVICETYPE);
  data.append("email", d.email);
  data.append("latitude", "");
  data.append("longitude", "");
  data.append("device_id", global.CONSTANT.DEVICETOKEN);
  data.append("language", "eng");
  data.append("image", {
    uri: "https://dacwash.com/img/Admin/logo.png",
    name: "profile.jpg",
    type: "image/jpg",
  });
  const DATA = Axios({
    method: "post",
    url: "edit_profile",
    data,
    validateStatus: () => true,
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        showMessage({
          message: response.data.response.message,
          type: "success",
          backgroundColor: global.COLOR.PRIMARY_DARK,
        });
        api_get_my_profile();
        RootNavigation.navigate("Home");
        return true;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * my profile api
 *
 */
export async function api_get_my_profile(d) {
  // Loading.show();
  const DATA = Axios({
    method: "post",
    url: "my_profile",
    data: {
      user_id: global.AUTHTOKEN,
      language: "eng",
    },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.data.response.status) {
        StoreUserData(response.data.response.data);
        return true;
      } else {
        Loading.hide();
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * my notification api
 *
 */
export async function api_get_notifications(d) {
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "notification_list",
    data: {
      user_id: global.AUTHTOKEN,
      language: "eng",
    },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.NOTIFICATIONS_LIST = response.data.response.data;
        return global.NOTIFICATIONS_LIST;
      } else {
        global.NOTIFICATIONS_LIST = [];
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * read notification api
 *
 */
export async function api_read_notifications(d) {
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "notification_status",
    data: {
      user_id: global.AUTHTOKEN,
      is_read: "1",
      language: "eng",
      notification_id: d,
    },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.data.response.status) {
        return true;
      } else {
        Loading.hide();
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * delete notification api
 *
 */
export async function api_delete_notifications(d) {
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "notification_delete",
    data: {
      user_id: global.AUTHTOKEN,
      language: "eng",
      notification_id: d,
    },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.data.response.status) {
        return true;
      } else {
        Loading.hide();
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * delete all notification api
 *
 */
export async function api_delete_all_notifications(d) {
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "notification_delete_all",
    data: {
      // language: "eng",
      user_id: global.AUTHTOKEN,
    },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.data.response.status) {
        return true;
      } else {
        Loading.hide();
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * static pages  api
 *
 */
export async function api_get_pages(d) {
  global.PAGE_CONTENT = [];
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "pages_view",
    data: {
      page_slug: d,
    },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      Loading.hide();
      if (response.data.response.status) {
        global.PAGE_CONTENT = response.data.response.data[0].contents;
        return global.PAGE_CONTENT;
      } else {
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * cancel booking api
 *
 */
export async function api_cancel_booking(d) {
  Loading.show();
  const DATA = Axios({
    method: "post",
    url: "cancel_booking",
    data: {
      user_id: global.AUTHTOKEN,
      language: "eng",
      booking_id: d.cancel_id,
      cancel_reason: d.reason_text,
    },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.data.response.status) {
        showMessage({
          message: response.data.response.message,
          type: "success",
        });
        return true;
      } else {
        Loading.hide();
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * send notifiction api
 *
 */
export async function api_send_push_notif(d) {
  // Loading.show();
  const DATA = Axios({
    method: "post",
    url: "sendNotification",
    data: {
      sender_id: global.AUTHTOKEN,
      receiver_id: d.id,
      receiver_type: "2",
      message: d.msg,
    },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.data.response.status) {
        // showMessage({
        //   message: response.data.response.message,
        //   type: "success",
        // });
        return true;
      } else {
        // Loading.hide();
        // showMessage({
        //   message: response.data.response.message,
        //   type: "danger",
        // });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}

/**
 * reschedule booking api
 *
 */
export async function api_booking_reschedule(d) {
  // Loading.show();
  const DATA = Axios({
    method: "post",
    url: "reschedule_datetime",
    data: {
      user_id: global.AUTHTOKEN,
      language: "eng",
      booking_id: d.id,
      booking_date: d.date,
      booking_time: d.time,
    },
    validateStatus: () => {
      return true;
    },
  }).then(
    function (response) {
      if (response.data.response.status) {
        showMessage({
          message: response.data.response.message,
          type: "success",
        });
        return true;
      } else {
        Loading.hide();
        showMessage({
          message: response.data.response.message,
          type: "danger",
        });
        return false;
      }
    }.bind(this)
  );
  return DATA;
}
