import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerComponent from "../components/DrawerContent";
// drawer screens
import MyVehicle from "../screens/App/MyVehicle";
import Faqs from ".././screens/App/Faqs";
import Packages from "../screens/App/Packages";
import Message from "../screens/App/Message";
import MyBookings from ".././screens/App/MyBookings";
import Location from ".././screens/App/Location";
import ChangeLanguage from "../screens/App/ChangeLanguage";

// out of drawer screens
import Profile from ".././screens/App/Profile";
import VehicleStatus from "../screens/App/VehicleStatus";
import Summary from "../screens/App/Summary";
import Payment from "../screens/App/Payment";
import Card from "../screens/App/Card";
import EditVehicle from "../screens/App/EditVehicle";
import Notification from "../screens/App/Notification";
import Contact from "../screens/App/Contact";
import SearchEditVehicle from "../screens/App/SearchEditVehicle";
import ChangePassword from "../screens/App/ChangePassword";
import AddLocation from "../screens/App/AddLocation";
import AddVehicle from "../screens/App/AddVehicle";
import AddVehicle_1 from "../screens/App/AddVehicle_1";
import AddVehicle_2 from "../screens/App/AddVehicle_2";
import PlacesSearch from "../screens/App/PlacesSearch";
import SelectPlans from "../screens/App/SelectPlans";
import SelectPackage from "../screens/App/SelectPackage";
import TwoWheelLocation from "../screens/App/TwoWheelLocation";
import BookingTrack from "../screens/App/BookingTrack";
import BookingDetails from "../screens/App/BookingDetails";
import EditProfile from "../screens/App/EditProfile";
import Privacy from "../screens/App/Privacy";
import Terms from "../screens/App/Terms";
import Chat from "../screens/App/Chat";
import Reschedule from "../screens/App/Reschedule";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerComponent {...props} />}
      initialRouteName="Home"
      backBehavior="initialRoute"
      drawerType={"slide"}
      screenOptions={{
        unmountOnBlur: true,
      }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="two_wheeler" component={two_wheel_Stack} />
      <Drawer.Screen name="MyVehicle" component={MyVehicleStack} />
      <Drawer.Screen name="Location" component={MyLocationStack} />
      <Drawer.Screen name="MyBookings" component={MyBookingStack} />
      <Drawer.Screen name="Message" component={Message} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Faqs" component={Faqs} />
      <Drawer.Screen name="ChangeLanguage" component={ChangeLanguage} />
      <Drawer.Screen name="Package" component={Packages} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Privacy" component={Privacy} />
      <Drawer.Screen name="Terms" component={Terms} />
    </Drawer.Navigator>
  );
}
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={VehicleStatus} />
      <Stack.Screen name="select_plans" component={SelectPlans} />
      <Stack.Screen name="location_search" component={PlacesSearch} />
      <Stack.Screen name="select_package" component={SelectPackage} />
      <Stack.Screen name="Summary" component={Summary} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="pay_card" component={Card} />
    </Stack.Navigator>
  );
}

function two_wheel_Stack() {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="select_location" component={TwoWheelLocation} />
      <Stack.Screen name="location_search" component={PlacesSearch} />
      <Stack.Screen name="Summary" component={Summary} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="pay_card" component={Card} />
    </Stack.Navigator>
  );
}

function MyVehicleStack() {
  return (
    <Stack.Navigator
      initialRouteName={"myvehicle_home"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="myvehicle_home" component={MyVehicle} />
      <Stack.Screen name="AddVehicle" component={AddVehicle} />
      <Stack.Screen name="AddVehicle_1" component={AddVehicle_1} />
      <Stack.Screen name="AddVehicle_2" component={AddVehicle_2} />
      <Stack.Screen name="EditVehicle" component={EditVehicle} />
      <Stack.Screen name="SearchVehicle" component={SearchEditVehicle} />
    </Stack.Navigator>
  );
}

function MyLocationStack() {
  return (
    <Stack.Navigator
      initialRouteName="my_location"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="my_location" component={Location} />
      <Stack.Screen name="AddLocation" component={AddLocation} />
      <Stack.Screen name="add_location_search" component={PlacesSearch} />
    </Stack.Navigator>
  );
}

function MyBookingStack() {
  return (
    <Stack.Navigator
      initialRouteName="booking_list"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="booking_list" component={MyBookings} />
      <Stack.Screen name="booking_track" component={BookingTrack} />
      <Stack.Screen name="booking_reschedule" component={Reschedule} />
      <Stack.Screen name="booking_detail" component={BookingDetails} />
      <Stack.Screen name="booking_chat" component={Chat} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="profile_home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="profile_home" component={Profile} />
      <Stack.Screen name="profile_edit" component={EditProfile} />
      <Stack.Screen name="profile_password" component={ChangePassword} />
    </Stack.Navigator>
  );
}
