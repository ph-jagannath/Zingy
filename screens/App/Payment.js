import React, { Component } from 'react';
import { Image, Text, StatusBar, View, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon, Header } from 'react-native-elements'
import styles from '../../styles/app/payment_styles'
import global from '../../utils/global'
import { t } from 'i18n-js'

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: false,
            content: false,
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusView}>
                    <StatusBar
                        translucent
                        backgroundColor='#6ABC45'
                        barStyle="light-content"
                    />
                </View>
                <Header containerStyle={styles.header} backgroundColor={"#6ABC45"}
                    leftComponent={
                        <TouchableOpacity style={styles.leftIcon}
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={32} color="#fff" />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={styles.headerText}>
                            {t("payment_header")}
                        </Text>
                    }
                    rightComponent={
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Notification")}>
                            <Image source={global.ASSETS.BELL} style={styles.bellS} />
                        </TouchableOpacity>
                    }
                />
                <View style={styles.paymentView}>
                    <Text style={styles.payment}>
                        {t("payment_selectMathod")}
                    </Text>
                    <View style={styles.TopViewPayment}>
                        <View style={styles.rowView}>
                            <Image source={global.ASSETS.RADIO} style={styles.radioStyle} />
                            <Icon style={styles.card} ame="credit-card" size={16} type={"mdiCreditCardMultipleOutline"} color="#000" />
                            <Text style={styles.cardText}>
                                {t("payment_card")}
                            </Text>
                        </View>
                    </View>

                </View>
                <View style={styles.roundViewPayment}>
                    <View style={styles.roundView}>
                        <Text style={styles.audText}>
                            {t("payment_aud")}
                        </Text>
                        <Text style={styles.audText}>
                            52.00
                          </Text>
                    </View>
                </View>
                <View style={styles.btmViewPayment}>
                    <Text style={styles.allPrice}>
                        {t("payment_priceInclude")}
                    </Text>
                    <TouchableOpacity style={styles.touchlogin}
                        onPress={() => this.props.navigation.navigate("CreDebitCardDetail")}>
                        <Text style={styles.loginText}>
                            {t("payment_pNow")}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

