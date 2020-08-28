import React, { Component } from 'react';
import { ScrollView, AsyncStorage, Image, Text, StyleSheet, StatusBar, View, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../styles/app/changeLanguage_styles'
import global from '../../utils/global'
import { t } from 'i18n-js'

import { Icon, Header } from 'react-native-elements'

export default class ChangeLanguage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioDefault: false,
            language: global.USER.language,
        };
        // alert(this.state.language)
    }
    english() {
        Alert.alert(global.CONSTANT.APPNAME, "You Choose English Language")
    }
    italy() {
        Alert.alert(global.CONSTANT.APPNAME, "You Choose Italian Language")
    }
    changeBtn = (lan) => {
        // console.log("   d",this.state.language)
        const { radioDefault } = this.state;
        if (lan === 'en') {
            this.setState({
                radioDefault: !this.state.radioDefault, language: lan
            }, radioDefault ? this.italy() : this.english())
            this.setState({ language: lan });
        }
        else if (lan === "es") {
            this.setState({ radioDefault: !this.state.radioDefault, language: lan }, radioDefault ? this.italy() : this.english())
        }
        else { }

    }

    changeLang = () => {
        console.warn(this.state.language)
    }

    render() {
        const { radioDefault } = this.state;
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
                        <TouchableOpacity style={styles.menuIcon}
                            onPress={() => { this.props.navigation.toggleDrawer() }}>
                            <Icon name={"menu"} type={"mdiMenu"} size={30} color='#fff' />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={styles.headerText}>
                            {t("changeLanguage_header")}
                        </Text>
                    }
                />
                <ScrollView style={styles.containerMybooking}>
                    <View style={styles.RowView}>
                        <View style={styles.leftView}>
                            <Image source={global.ASSETS.ENGLISH} style={styles.leftIcon} resizeMode={'center'} />
                            <Text style={[styles.langText, { color: radioDefault ? global.Colors.AppColor : global.Colors.black }]}>
                                ENGLISH
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => this.changeBtn("en")}>
                            <Image source={global.ASSETS.RADIO} style={[styles.radio, { tintColor: radioDefault ? global.Colors.AppColor : global.Colors.black }]} resizeMode={'contain'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.RowView}>
                        <View style={styles.leftView}>
                            <Image source={global.ASSETS.FLAGE} style={styles.leftIcon} resizeMode={'center'} />
                            <Text style={[styles.langText, { color: radioDefault ? global.Colors.black : global.Colors.AppColor }]}>
                                ITALIAN
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => this.changeBtn("es")}>
                            <Image source={global.ASSETS.RADIO} style={[styles.radio, { tintColor: radioDefault ? global.Colors.black : global.Colors.AppColor }]}
                                resizeMode={'contain'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.touchVIewChangePass}>
                        <TouchableOpacity
                            onPress={() => this.changeLang()}
                            // onpress={() => this.changeLang()}
                            style={styles.touchNext}>
                            <Text style={styles.loginText}>
                                {t("save")}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}