import React, { Component } from 'react';

import { FlatList, ScrollView, Image, Text, StyleSheet, StatusBar, View, } from 'react-native';
import styles from '../../styles/app/package_styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import global from '../../utils/global'
import { t } from 'i18n-js'
import { Icon, Header } from 'react-native-elements'
import car from '../../assets/exteriorewash.png'
import engi from '../../assets/enginedetailing.png'
import cleaning from '../../assets/interiorcleaning.png'

const packageDetails = [
    {
        car: car,
        cleaning: cleaning,
        engi: engi,
        expiryDate: `2020-Jun-21`,
        exterior: `0 X Exterior Wash`,
        interior: `2 X Interior Wash`,
        wash: `0 X Engine Wash`,
        standard: `Standard SUV`,
        test: `monthly Rachit Test - SsangYong Actyon Sports`
    },
    {
        car: car,
        cleaning: cleaning,
        engi: engi,
        expiryDate: `2020-Jun-22`,
        exterior: `5 X Exterior Wash`,
        interior: `2 X Interior Wash`,
        wash: `0 X Engine Wash`,
        standard: `Large SUV/4WD`,
        test: `monthly Bumper Off - Mahindra Pik-Up`
    },
    {
        car: car,
        cleaning: cleaning,
        engi: engi,
        expiryDate: `2020-Jun-22`,
        exterior: `3 X Exterior Wash`,
        interior: `2 X Interior Wash`,
        wash: `0 X Engine Wash`,
        standard: `Standard`,
        test: `monthly Happy Offer - Audi A6`
    },

]

export default class Packages extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    renderList = ({ item }) => {
        return (
            <View style={styles.listContainerMyBook} >
                <View style={styles.ViewGreen}>
                    <Text style={styles.test} >
                        {item.test}
                    </Text>
                    <Text style={styles.standardPackage}>
                        {item.standard}
                    </Text>
                </View>
                <View style={styles.shadowViewPackage}>
                    <View style={styles.horzonView}>
                        <View style={styles.itemes}>
                            <Image source={item.car} resizeMode={'contain'} style={styles.imgCar} />
                            <Text style={styles.exteriorText}>
                                {item.exterior}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.horzonView}>
                        <View style={styles.itemes}>
                            <Image source={item.cleaning} resizeMode={'contain'} style={styles.imgClean} />
                            <Text style={styles.exteriorText}>
                                {item.interior}
                            </Text>
                        </View>
                    </View>


                    <View style={styles.horzonView}>
                        <View style={styles.itemes}>
                            <Image source={item.engi} resizeMode={'contain'} style={styles.imgCar} />
                            <Text style={styles.exteriorText}>
                                {item.wash}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.expDate}>
                        Expiry: {item.expiryDate}
                    </Text>
                </View>
            </View>
        )
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.containerMybooking}>
                <View style={styles.statusBarV}>
                    <StatusBar translucent backgroundColor={global.Colors.AppColor} barStyle="light-content" />
                </View>
                <Header containerStyle={styles.header} backgroundColor={global.Colors.AppColor}
                    leftComponent={
                        <TouchableOpacity style={styles.leftIcon} onPress={() => this.props.navigation.toggleDrawer()}>
                            <Icon name={"menu"} type={"mdiMenu"} size={30} color={global.Colors.white} />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={styles.headerText}>
                            {t("package_header")}
                        </Text>
                    }
                    rightComponent={
                        <TouchableOpacity onPress={() => navigate("Notification")}>
                            <Image source={global.ASSETS.BELL} style={styles.bellS} />

                        </TouchableOpacity>
                    }
                />
                <FlatList
                    contentContainerStyle={styles.flatListContainer}
                    data={packageDetails}
                    renderItem={({ item, index }) => this.renderList({ item, index })}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

