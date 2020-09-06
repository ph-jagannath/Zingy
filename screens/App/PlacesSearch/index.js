import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Icon } from "react-native-elements";
import global from "../../../utils/global";

export default class PlacesSearch extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.placesRef = "";
    this.state = {
      pick_up: "",
      drop_off: "",
    };
  }

  render() {
    const { onNavigateBack } = this.props.route.params;
    const { navigation } = this.props;
    return (
      <View style={styles.bgContainer}>
        <View style={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}>
          <Text style={styles.headerText}>Search Address</Text>
        </View>
        <GooglePlacesAutocomplete
          ref={(ref) => {
            this.placesRef = ref;
          }}
          placeholder="Search"
          minLength={2}
          autoFocus={true}
          returnKeyType={"search"}
          keyboardAppearance={"light"}
          listViewDisplayed="auto"
          fetchDetails={true}
          renderDescription={(row) => row.description}
          onPress={(data, details = null) => {
            onNavigateBack(details);
            navigation.goBack();
          }}
          getDefaultValue={() => ""}
          query={{
            key: global.CONSTANT.PLACESAPI,
            language: "en",
            types: ["locality", "political", "geocode", "(regions)", "room"],
            // components: "country:uk",
          }}
          styles={{
            textInputContainer: {
              backgroundColor: global.COLOR.PRIMARY_LIGHT,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              height: 70,
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: "#000",
              fontSize: 16,
            },
            predefinedPlacesDescription: {
              color: "#000",
            },
          }}
          currentLocation={false}
          currentLocationLabel="Current location"
          nearbyPlacesAPI="GooglePlacesSearch"
          GooglePlacesSearchQuery={{
            rankby: "distance",
          }}
          GooglePlacesDetailsQuery={{}}
          filterReverseGeocodingByTypes={[]}
          debounce={200}
          renderLeftButton={() => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={global.ASSETS.BACK_ARROW}
                style={styles.backIcon}
              />
            </TouchableOpacity>
          )}
          renderRightButton={() => (
            <Icon
              iconStyle={styles.closeIcon}
              name="close-circle"
              type="material-community"
              color="#fff"
              size={30}
              onPress={() => {
                this.placesRef && this.placesRef.setAddressText("");
              }}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    backgroundColor: "#fff",
  },
  backIcon: {
    resizeMode: "contain",
    height: 30,
    width: 30,
    margin: 10,
    tintColor: "#fff",
  },
  closeIcon: {
    margin: 10,
  },
  headerText: {
    backgroundColor: global.COLOR.PRIMARY_LIGHT,
    fontSize: 20,
    color: "#fff",
    alignSelf: "center",
    paddingTop: global.CONSTANT.STATUSBAR + 15,
  },
});
