import React, { Component } from 'react';
import { ScrollView, Image, Text, StyleSheet, StatusBar, View, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../styles/app/bookingDetails_styles'
import global from '../../utils/global'
import { t } from 'i18n-js'
import Stars from 'react-native-stars';
import { Icon, Header } from 'react-native-elements'

export default class BookingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            star: 0,
            preTab: true,
        };
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
                        <TouchableOpacity style={styles.touchLeft}
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={32} color={global.Colors.white} />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={styles.headerText}>
                            {t("bookingDetails_header")}
                        </Text>
                    }
                />
                <ScrollView style={styles.containerMybooking}>
                    <View style={styles.underScroll}>
                        <Image source={global.ASSETS.EMP} style={styles.empImg} resizeMode={'cover'} />
                    </View>
                    <View style={styles.wahrView}>
                        <Text style={styles.waherText}>
                            {t("bookingD_Washertest")}
                        </Text>
                        <Text style={styles.number}>
                            123456454
                       </Text>
                    </View>

                    <View style={styles.starView}>
                        <Stars
                            default={0}
                            count={5}
                            spacing={10}
                            starSize={50}
                            fullStar={<Image source={global.ASSETS.STAR}
                                style={styles.starStyle}
                            />}
                            emptyStar={<Image source={global.ASSETS.STAR} style={styles.emptyStar}
                            />}
                        />
                    </View>
                    <TouchableOpacity style={styles.msgTouch}>
                        <Image style={styles.msgImg} source={global.ASSETS.MESSAGE} />
                    </TouchableOpacity>
                    <View style={styles.horizoView}>
                        <View style={styles.spacBetView}>
                            <View style={styles.leftViewBookingDetails}>
                                <Text style={styles.ModeText}>
                                    {t("bookingD_PaymentMode")}
                                </Text>
                                <Text style={styles.paymText}>
                                    Card
                                </Text>
                            </View>
                            <Text style={styles.EuroText}>
                                €52.00
                              </Text>
                        </View>
                        <View style={styles.spacBetView}>
                            <View style={styles.leftViewBookingDetails}>
                                <Text style={styles.ModeText}>
                                    {t("bookingD_location")}
                                </Text>
                            </View>
                            <Text style={styles.locationText}>
                                Lungotevere Marzio 12,00186 Rome
                              </Text>
                        </View>
                        <Text style={styles.viewPhoto}>
                            {t("bookingD_PhotoGallery")}
                        </Text>
                        <View style={styles.rowViewMyBooking}>
                            <TouchableOpacity
                                onPress={() => this.setState({ preTab: true })}
                                style={[styles.myBookTouc, { backgroundColor: preTab ? '#fff' : global.Colors.AppColor, }]}>
                                <Text style={[styles.mybook, { color: preTab ? '#C7c7c7' : '#fff', textDecorationLine: preTab ? 'underline' : 'none' }]}>
                                    {t("bookingD_PreWash")}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ preTab: false })}
                                style={[styles.preTouc, { backgroundColor: preTab ? global.Colors.AppColor : '#fff', }]}>
                                <Text style={[styles.mybook, { color: preTab ? '#fff' : '#C7c7c7', textDecorationLine: preTab ? 'none' : 'underline' }]}>
                                    {t("bookingD_AfterWash")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}




