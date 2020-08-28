import React, { Component } from 'react';
import { ScrollView, Image, Text, StyleSheet, StatusBar, View, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../styles/auth/addVehicle_styles'
import global from '../../utils/global'
import { t } from 'i18n-js'
import { Icon, Header } from 'react-native-elements'


export default class AddVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: false,
            make: false,
            year: false,
            color: false,
        };
    }





    render() {
        const { model, color, year, make } = this.state;
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
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon name="chevron-left" size={32} color={global.Colors.white} />
                        </TouchableOpacity>
                    }
                    centerComponent={
                        <Text style={styles.headerText}>
                            {t("addV_AddVehicle")}
                        </Text>
                    }
                />

                <ScrollView style={styles.containerMybooking}>
                    <View style={styles.container2}>
                        <Text style={styles.addText}>
                            Please Add Your Vehicle Details
                       </Text>
                        {/* Make */}
                        <View style={styles.TopViewAddVecle}>
                            <Text style={styles.outerText}>
                                {t("addV_make")}
                            </Text>
                            <View style={styles.borderViewAddVehi}
                                onPress={() => this.setState({ make: !make })}>
                                <Text style={styles.category}>
                                    {t("addV_make")}
                                </Text>
                                {<Image source={make ? global.ASSETS.UP : global.ASSETS.DOWN} style={styles.imgForword} />}
                            </View>
                        </View>
                        {/* Model */}

                        <View style={styles.TopViewAddVecle}>
                            <Text style={styles.outerText}>
                                {t("addV_model")}
                            </Text>
                            <TouchableOpacity style={styles.borderViewAddVehi}
                                onPress={() => this.setState({ model: !model })}>
                                <Text style={styles.category}>
                                    {t("addV_model")}
                                </Text>
                                {<Image source={model ? global.ASSETS.UP : global.ASSETS.DOWN} style={styles.imgForword} />}
                            </TouchableOpacity>
                        </View>


                        {/* Year */}

                        <View style={styles.TopViewAddVecle}>
                            <Text style={styles.outerText}>
                                {t("addV_year")}
                            </Text>
                            <TouchableOpacity style={styles.borderViewAddVehi}
                                onPress={() => this.setState({ year: !year })}>
                                <Text style={styles.category}>
                                    {t("addV_year")}
                                </Text>
                                {<Image source={year ? global.ASSETS.UP : global.ASSETS.DOWN} style={styles.imgForword} />}
                            </TouchableOpacity>
                        </View>


                        {/* Color */}


                        <View style={styles.TopViewAddVecle}>
                            <Text style={styles.outerText}>
                                {t("addV_color")}
                            </Text>
                            <TouchableOpacity style={styles.borderViewAddVehi}
                                onPress={() => this.setState({ color: !color })}>
                                <Text style={styles.categoryClr}>
                                    Color
                                </Text>
                                {<Image source={color ? global.ASSETS.UP : global.ASSETS.DOWN} style={styles.imgForword} />}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.touchVIewAddVeh}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("App")}
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
