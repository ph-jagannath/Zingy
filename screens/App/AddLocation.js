import React, { Component } from 'react';
import {  Modal,  Image, Text,  StatusBar, View, } from 'react-native';
import styles from '../../styles/app/AddLocation_styles'
import global from '../../utils/global'
import { t } from 'i18n-js'
import { Icon, Header } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location';
import Geocode from 'react-geocode'
import MapView from 'react-native-maps'

export default class AddLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            loc: '',
            mapRegion: null,
            hasLocationPermissions: false,
            locationResult: null,
            textAddress: null,
            colr: true,
            work: false,
            other: false,
        };
    }

    setLoc = (data, details) => {
        this.setState({
            loc: data.description, modalVisible: !this.state.modalVisible,
        })
        console.log("Data and details ", data, details)
    }
    componentDidMount() {
        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
            });
        } else {
            this.setState({ hasLocationPermissions: true });
        }
        let location = await Location.getCurrentPositionAsync();
        // this.setState({ locationResult: JSON.stringify(location)});
        this.setState({
            mapRegion: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421
            }
        });
        Geocode.setApiKey("AIzaSyCdIiqraik9uJkeLdoarnKms9voK1Q94pk")
        Geocode.setLanguage("en");
        Geocode.enableDebug();
        Geocode.fromLatLng(location.coords.latitude, location.coords.longitude).then(
            response => {
                const address = response.results[0].formatted_address;
                console.log(address)
                this.setState({ textAddress: address })
            },
            error => {
                console.error(error);
            }
        )
    };

    render() {
        const { colr, work, other, loc, textAddress } = this.state
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.statusView}>
                    <StatusBar
                        translucent
                        backgroundColor={global.Colors.AppColor}
                        barStyle="light-content"
                    />
                </View>
                <Header containerStyle={styles.header} backgroundColor={global.Colors.AppColor}
                    leftComponent={
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={styles.leftIcon}>
                            <Icon name="chevron-left" size={30} color={global.Colors.white} />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={styles.headerText}>
                              {t("dacwash_header")}
                          </Text>
                    }
                />
                <View style={styles.container}>
                    <MapView
                        region={this.state.mapRegion}
                        style={styles.container}
                    />
                    <View style={styles.catAddLocation}>
                        <TouchableOpacity
                            onPress={() => this.setState({ colr: true, other: false, work: false })}
                            style={[styles.homeAddLocation, { backgroundColor: colr ? global.Colors.AppColor : global.Colors.white }]}>
                            <Text style={[styles.homeText, { color: colr ? global.Colors.white : global.Colors.black }]}>
                                {t("side_menu_home")}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ colr: false, work: true, other: false })}
                            style={[styles.homeAddLocation, { backgroundColor: work ? global.Colors.AppColor : global.Colors.white }]}>
                            <Text style={[styles.homeText, { color: work ? global.Colors.white : global.Colors.black }]}>
                                {t("addLocation_work")}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ other: true, work: false, colr: false })}
                            style={[styles.homeAddLocation, { backgroundColor: this.state.other ? global.Colors.AppColor : global.Colors.white }]}>
                            <Text style={[styles.homeText, { color: other ? global.Colors.white : global.Colors.black }]}>
                                {t("addLocation_other")}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.locationTView}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    check: true,
                                    modalVisible: !this.state.modalVisible,
                                });
                            }}
                            style={styles.touchRow}>
                            <Icon
                                name={"search"}
                                type={"mdiMagnify"}
                                style={styles.searchIcon}
                                size={16}
                                color="#000"
                            />
                            <Text style={styles.locationT}>
                                {
                                    loc !== '' ? loc : textAddress
                                }
                                {/* Via Gluseppe Mercalli,337,06135 Perugia PG */}
                            </Text>

                        </TouchableOpacity>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                    >
                        <View style={styles.container}>
                            <View style={styles.searchModal}>
                                 <View style={styles.searchLeftIcon}>
                                    <Icon
                                        onPress={() => this.setState({
                                            modalVisible: false,
                                            loc: ''
                                        })}
                                        type={'mdiArrowLeft'} name="arrow-back" size={25}
                                        color="#000" />
                                </View>
                                <View style={styles.searchRightIcon}>
                                    {(loc.length !== 0) ?
                                        <Icon onPress={() => {
                                            this.setState({ loc: '' })
                                            this.textInput.clear();
                                        }} type={'midClose'}
                                            name="clear" size={25}  color="#000" /> : null}
                                </View>
                            </View>
                            <GooglePlacesAutocomplete
                                minLength={2}
                                listViewDisplayed="auto"
                                autoFocus={true}
                                returnKeyType={'search'}
                                fetchDetails={true}
                                query={{
                                    key: 'AIzaSyCdIiqraik9uJkeLdoarnKms9voK1Q94pk',
                                    language: 'en'
                                }}
                                textInputProps={{
                                    onChangeText: (loc) => this.setState({ loc: loc }),
                                    clearButtonMode: 'never',
                                    ref: input => {
                                        this.textInput = input;
                                    }
                                }}
                                onPress={(data, details = null) => {
                                    console.log("data from vsdfsfdssf", data)
                                    this.setLoc(data, details)
                                    console.log("Details   : ", data.description,);
                                }}
                                styles={{
                                    textInputContainer: styles.geoPlacetextInputContainer,
                                    textInput: styles.geoPlaceTextInput,
                                    predefinedPlacesDescription: styles.geoPlaceDescrip,
                                    description: styles.geoPlaceDescription,
                                    listView: styles.geoPlacelistView,
                                }}
                            />
                        </View>
                    </Modal>
                </View>
                <TouchableOpacity
                    onPress={() => navigate("Home")}
                    style={styles.touchNext}>
                    <Text style={styles.loginText}>
                        {t("location_addLocation")}
                        </Text>
                </TouchableOpacity>
            </View>
        );
    }
}