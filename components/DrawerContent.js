import React, { Component } from 'react';
import { ScrollView, Image, Text, StyleSheet, StatusBar, View, } from 'react-native';
import global from '../utils/global'
import { t } from "i18n-js";
import styles from '../styles/app/drawer_styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
const userName = "Hi,Nakul"

export default class DrawerContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    nextScreen = (next) => {
        this.props.navigation.navigate(next)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusView}>
                    <StatusBar
                        translucent
                        backgroundColor={global.Colors.AppColor}
                        barStyle="light-content"
                    />
                </View>
                <TouchableOpacity onPress={() => this.nextScreen("Profile")}>
                    <Image source={global.ASSETS.LOGO} style={styles.logoS} resizeMode={'contain'} />
                </TouchableOpacity>
                <Text style={styles.Username}>
                    {userName}
                </Text>
                <ScrollView style={styles.container}>
                    <View style={styles.TopViewDrawer}>
                        <TouchableOpacity
                            onPress={() => this.nextScreen("Home")}
                            style={styles.contentTop}>
                            <Text style={styles.content} >
                            {t("side_menu_home")}
                         </Text>
                            <Icon name="chevron-right" size={32} style={styles.iconStyle} color="#ccc" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.nextScreen("MyVehicle")} style={styles.contentTop}>
                            <Text style={styles.content} >
                            {t("side_menu_MyVehicle")}
                         </Text>
                            <Icon name="chevron-right" size={32} style={styles.iconStyle} color="#ccc" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.nextScreen("MyBookings")} style={styles.contentTop}>
                            <Text style={styles.content} >
                            {t("side_menu_MyBookings")}
                         </Text>
                            <Icon name="chevron-right" size={32} style={styles.iconStyle} color="#ccc" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.nextScreen("Package")} style={styles.contentTop}>
                            <Text style={styles.content} >
                                {t("side_menu_Packages")}
                         </Text>
                            <Icon name="chevron-right" size={32} style={styles.iconStyle} color="#ccc" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.nextScreen("Location")}
                            style={styles.contentTop}>
                            <Text style={styles.content} >
                                {t("side_menu_Locations")}
                         </Text>
                            <Icon name="chevron-right" size={32} style={styles.iconStyle} color="#ccc" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.nextScreen("Faqs")} style={styles.contentTop}>
                            <Text style={styles.content} >
                                {t("side_menu_FAQs")}
                         </Text>
                            <Icon name="chevron-right" size={32} style={styles.iconStyle} color="#ccc" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.nextScreen("Message")}
                            style={styles.contentTop}>
                            <Text style={styles.content} >
                                {t("side_menu_Messages")}
                         </Text>
                            <Icon name="chevron-right" size={32} style={styles.iconStyle} color="#ccc" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.nextScreen("Contact")} style={styles.contentTop}>
                            <Text style={styles.content} >
                                {t("side_menu_Contact")}
                         </Text>
                            <Icon name="chevron-right" size={32} style={styles.iconStyle} color="#ccc" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.nextScreen("ChangeLanguage")} style={styles.contentTop}>
                            <Text style={styles.content} >
                                {t("changeLanguage_header")}
                         </Text>
                            <Icon name="chevron-right" size={32} style={styles.iconStyle} color="#ccc" />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Auth")} style={styles.contentTop}>
                            <Text style={styles.content} >
                                {t("side_menu_Logout")}
                         </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>



        );
    }
}

