import React, { Component } from 'react';
import { Image, Text, StyleSheet, StatusBar, View, FlatList } from 'react-native';
import { Header, Icon } from 'react-native-elements'
import styles from '../../styles/app/vehicleStatus_styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import audi from '../../assets/audi.png'
import { t } from 'i18n-js'
import global from '../../utils/global'

// import global from '../../utils/global'
const statusCode = [

    {
        companyLogo: 'audi',
        companyName: "Audi A6",
        gadiModal: "111-222"
    },
    {
        companyLogo: 'Mah',
        companyName: "Mahindra Pik-Up",
        gadiModal: "YYY-258"
    },
    {
        companyLogo: 'sa',
        companyName: "SsangYong Action Sports",
        gadiModal: "6TT-855"
    },
    {
        companyLogo: 'audi',
        companyName: "Audi A6",
        gadiModal: "111-222"
    },
    {
        companyLogo: 'Mah',
        companyName: "Mahindra Pik-Up",
        gadiModal: "YYY-258"
    },
    {
        companyLogo: 'sa',
        companyName: "SsangYong Action Sports",
        gadiModal: "6TT-855"
    },
    {
        companyLogo: 'audi',
        companyName: "Audi A6",
        gadiModal: "111-222"
    },
    {
        companyLogo: 'Mah',
        companyName: "Mahindra Pik-Up",
        gadiModal: "YYY-258"
    },
    {
        companyLogo: 'sa',
        companyName: "SsangYong Action Sports",
        gadiModal: "6TT-855"
    },

]

export default class VehicleStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    renderList = ({ item }) => {
        return (
            <View style={styles.listContainerMyBook}>
                <TouchableOpacity style={styles.rendTouch}
                    onPress={() => this.props.navigation.navigate("Dacwash")}>
                    <View style={styles.touchBtmView}>
                        <Image source={audi} style={styles.audiImgV} resizeMode={'contain'} />
                        <View style={styles.rightViewStatus}>
                            <Text style={styles.companyNames}>
                                {item.companyName}
                            </Text>
                            <Text style={styles.modelName}>
                                {item.gadiModal}
                            </Text>
                        </View>
                    </View>
                    <Icon name="chevron-right" size={32} style={styles.rightIcon} color={global.Colors.AppColor} />
                </TouchableOpacity>
            </View>
        )
    }
    toggelDrawer() {
        this.props.navigation.toggleDrawer()
    }
    render() {
        return (
            <View style={styles.containerMybooking}>
                <View style={styles.statusView}>
                    <StatusBar translucent backgroundColor={global.Colors.AppColor} barStyle="light-content" />
                </View>
                <Header containerStyle={styles.header} backgroundColor={global.Colors.AppColor}
                    leftComponent={
                        <TouchableOpacity
                            onPress={() => { this.toggelDrawer() }}>
                            <View>
                                <Icon name={"menu"} type={"mdiMenu"} size={30} color='#fff' />
                            </View>
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={styles.headerText}>
                            {t("VehicleStatus_header")}
                        </Text>
                    }
                />
                <FlatList
                    contentContainerStyle={styles.flatListContainer}
                    data={statusCode}
                    renderItem={({ item, index }) => this.renderList({ item, index })}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}