import React, { Component } from 'react';
import { ScrollView, Image, Text, StyleSheet, StatusBar, View, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../styles/auth/verifyNumber_styles'
import global from '../../utils/global'
import { t } from 'i18n-js'
import logo from '../../assets/LOGO.png'
import { Header, Icon } from 'react-native-elements'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
const time = "04:53"
export default class VerifyNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            navigation: false
        };
    }
    navigate = () => {
        if (this.state.navigation)
            this.props.navigation.navigate("WelcomeDacwash")
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusView}>
                    <StatusBar translucent backgroundColor={global.Colors.AppColor} barStyle="light-content" />
                </View>
                <Header containerStyle={styles.header} backgroundColor={"#fff"}
                    leftComponent={
                        <TouchableOpacity onPress={() => console.log("COnsole ", this.props.navigation.goBack())}>
                            <Icon name="chevron-left" size={32} style={styles.leftIcon} color={global.Colors.black} />
                        </TouchableOpacity>
                    }
                />
                <ScrollView style={styles.container}>
                    <View style={styles.logoView}>
                        <Image style={styles.logo} source={logo} resizeMode={'center'} />
                    </View>

                    <View style={styles.verfyView}>
                        <Text style={styles.verfyText}>
                            {t("verifyNumber")}
                        </Text>
                        <View style={styles.pinView}>
                            <Text style={styles.pintText}>
                                {t("enterPin")}
                            </Text>
                            <Text style={styles.numbrText}>
                                +3965656565
                            </Text>
                        </View>
                    </View>
                    <View style={styles.codeTopView}>
                        <View style={styles.codeView}>
                            <SmoothPinCodeInput
                                cellStyle={styles.cellStyle}
                                cellStyleFocused={{
                                    borderColor: 'black',
                                }}
                                keyboardType="number-pad"
                                autoFocus
                                value={this.state.code}
                                onTextChange={code => this.setState({ code }, code.length === 4 ?
                                    this.setState({ navigation: true })
                                    : null)}
                            />
                        </View>
                        <Text style={styles.time}>
                            {time}
                        </Text>
                        <Text style={styles.otp}>
                            {t("resendOtp")}
                        </Text>
                    </View>

                    <View style={styles.touchVIewAddVeh}>
                        <TouchableOpacity
                            onPress={() => this.navigate()}
                            style={styles.touchNext}>
                            <Text style={styles.loginText}>
                                {t("addV_next")}
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        );
    }
}
