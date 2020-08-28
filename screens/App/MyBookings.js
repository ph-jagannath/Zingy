import React, { Component } from 'react';
import { FlatList, ScrollView, Image, Text, StyleSheet, StatusBar, View, } from 'react-native';
import styles from '../../styles/app/myBooking_styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import global from '../../utils/global'
import { Icon, Header } from 'react-native-elements'
import car from '../../assets/exteriorewash.png'
import { t } from 'i18n-js'

const Details = [

    {
        car: car,
        date: `2020-06-27`,
        standard: `Standard Cars In & Outside Wash`,
        location: `Location-Str.Borobo,3b,06135 Perugia PG`,
        price: `€52`,
        cancel: `Cancel`,
        reschdule: `Reschdule`,
    },
    {
        car: car,
        date: `2020-06-02`,
        standard: `Large SUV/4WD Outside Wash Mahindra Mahindra Pik-Up`,
        location: `Location - Unnamed Road, Ambika Colony,Shive Nagar,Jaipur,Rajasthan 302029`,
        price: `€35`,
    },
    {
        car: car,
        date: `2020-06-02`,
        standard: `Large SUV/4WD Outside Wash Mahindra Mahindra Pik-Up`,
        location: `Location - Unnamed Road, Ambika Colony,Shive Nagar,Jaipur,Rajasthan 302029`,
        price: `€35`,
    },
    {
        car: car,
        date: `2020-06-02`,
        standard: `Large SUV/4WD Outside Wash Mahindra Mahindra Pik-Up`,
        location: `Location - Unnamed Road, Ambika Colony,Shive Nagar,Jaipur,Rajasthan 302029`,
        price: `€35`,
    },
    {
        car: car,
        date: `2020-06-02`,
        standard: `Large SUV/4WD Outside Wash Mahindra Mahindra Pik-Up`,
        location: `Location - Unnamed Road, Ambika Colony,Shive Nagar,Jaipur,Rajasthan 302029`,
        price: `€35`,
    },
    {
        car: car,
        date: `2020-06-02`,
        standard: `Large SUV/4WD Outside Wash Mahindra Mahindra Pik-Up`,
        location: `Location - Unnamed Road, Ambika Colony,Shive Nagar,Jaipur,Rajasthan 302029`,
        price: `€35`,
    }


]
const preData = [
    { pre: `Previous Soon` }
]
export default class MyBookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preTab: true
        };
    }

    renderList = ({ item }) => {

        return (
            <View style={styles.listContainerMyBook}>
                <View style={styles.standView}>
                    <Text style={styles.stand}>
                        {item.standard}
                    </Text>
                    <Text style={styles.dates}>
                        {item.date}
                    </Text>
                </View>
                <View style={styles.SimplerowView}>
                    <View style={styles.widthView}>
                        <Image source={item.car} style={styles.car} resizeMode={'contain'} />
                    </View>
                    <Text style={styles.locationMyBook}>
                        {item.location}
                    </Text>
                </View>
                <View style={styles.priceView}>
                    <Text style={styles.priceMyBook}>Price - </Text>
                    <Text style={styles.priceMyBook}>{item.price}</Text>
                </View>
                <View style={styles.leftView}>
                    <TouchableOpacity>
                        <Text style={styles.cancel}>
                            {item.cancel}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.resch}>
                            {item.reschdule}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        const { preTab } = this.state;
        return (
            <View style={styles.containerMybooking}>
                <View style={styles.statusView}>
                    <StatusBar
                        translucent
                        backgroundColor={global.Colors.AppColor}
                        barStyle="light-content"
                    />
                </View>
                <Header containerStyle={styles.header} backgroundColor={global.Colors.AppColor}
                    leftComponent={
                        <TouchableOpacity style={styles.leftIcon}
                            onPress={() => { this.props.navigation.toggleDrawer() }}>
                            <Icon name={"menu"} type={"mdiMenu"} size={30} color={global.Colors.white} />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={styles.headerText}>
                            {t("MyBooking_header")}
                        </Text>
                    }
                    rightComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}>
                            <Image source={global.ASSETS.BELL} style={styles.bellS} />
                        </TouchableOpacity>
                    }
                />
                <View style={styles.containerMybooking}>

                    <View style={styles.marHorizon}>
                        <View style={styles.rowViewMyBooking}>
                            <TouchableOpacity
                                onPress={() => this.setState({ preTab: true })}
                                style={[styles.myBookTouc, { backgroundColor: preTab ? '#fff' : global.Colors.AppColor, }]}>
                                <Text style={[styles.mybook, { color: preTab ? '#C7c7c7' : '#fff', textDecorationLine: preTab ? 'underline' : 'none' }]}>
                                    {t("side_menu_MyBookings")}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ preTab: false })}
                                style={[styles.preTouc, { backgroundColor: preTab ? global.Colors.AppColor : '#fff', }]}>
                                <Text style={[styles.mybook, { color: preTab ? '#fff' : '#C7c7c7', textDecorationLine: preTab ? 'none' : 'underline' }]}>
                                    {t("myBooking_pre")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        data={preTab ? Details : preData}
                        renderItem={preTab ? ({ item, index }) => this.renderList({ item, index }) :
                            () => this.props.navigation.navigate("BookingDetail")

                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        );
    }
}


