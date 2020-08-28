import React, { Component } from 'react';
import { FlatList, ScrollView, Image, Text, StyleSheet, StatusBar, View, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../styles/app/faq_styles'
import global from '../../utils/global'
import { t } from 'i18n-js'
import { Icon, Header } from 'react-native-elements'

const data = [
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },
    {
        one: `Before booking Do i need to be present before,during,or after the service?`,
        two: `Not necessarily\nThe app will notify you one the washer arrives.You can also add specific instructions for the washer to follow on arrival within the booking notes,any questions and can be communication by the app message or call.`
    },


]


export default class Faqs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: false,
            content: false,

        };
    }
    renderList = ({ item }) => {
        const { icon } = this.state;
        return (
            <View>
                <View style={[styles.listContainerFaq, { backgroundColor: icon ? global.Colors.AppColor : global.Colors.white, }]}>

                    <View style={styles.betweenView}>
                        {/* <Text style={styles.oneText}> */}
                        <Text style={[styles.oneText, { color: icon ? '#fff' : global.Colors.black, }]}>
                            {item.one}
                        </Text>
                        <TouchableOpacity onPress={() => this.setState({ icon: !this.state.icon })}>
                            {<Image source={icon ? global.ASSETS.UP : global.ASSETS.DOWN} style={[styles.iconStyleFaq, { tintColor: icon ? global.Colors.white : global.Colors.black, }]} />}
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    this.state.icon &&

                    <View style={styles.shadowViewFaq}>
                        <Text style={styles.textTwo} >
                            {item.two}
                        </Text>
                    </View>
                }
            </View>
        )
    }
    render() {
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
                        <TouchableOpacity style={styles.leftIcon} onPress={() => this.props.navigation.toggleDrawer()}>
                            <Icon name={"menu"} type={"mdiMenu"} size={30} color={global.Colors.white} />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={styles.headerText}>
                            {t("faq_header")}
                        </Text>
                    }
                    rightComponent={
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Notification")}
                            style={styles.rightCom}>
                            <Image source={global.ASSETS.BELL} style={styles.bellS} color={global.Colors.white} />
                            <View style={styles.notiView}>
                                <Text style={styles.notText}>
                                    16
                                </Text>
                            </View>
                        </TouchableOpacity>
                    }
                />
                <View style={styles.containerMybooking}>
                    <FlatList
                        contentContainerStyle={styles.flatView2}
                        data={data}
                        renderItem={({ item, index }) => this.renderList({ item, index })}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.state}
                    />
                </View>
            </View>
        );
    }
}