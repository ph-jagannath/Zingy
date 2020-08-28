import React, { Component } from 'react';
import { TextInput, ScrollView, Image, Text, StatusBar, View, Alert, } from 'react-native';
import styles from '../../styles/auth/login_styles'
import { Icon } from 'react-native-elements'
import global from '../../utils/global'
import { t } from 'i18n-js'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { login } from '../../utils/Api'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            isLoading: false,
        };
    }
    componentDidMount() {
        this.ref.focus();
    }
    handleValidation = () => {
        if (this.state.number === '')
            Alert.alert(global.CONSTANT.APPNAME, t("plzEnterPhoneNumber"))
        else if (isNaN(this.state.number))
            Alert.alert(global.CONSTANT.APPNAME, t("NotANumber"))
        else
            // login(this.state)
            this.props.navigation.navigate("App")
    }
    render() {
        return (
            <View style={styles.containerMybooking}>
                <View style={styles.statusView}>
                    <StatusBar translucent backgroundColor={global.Colors.AppColor} barStyle="light-content" />
                </View>
                <ScrollView style={styles.containerMybooking}>
                    <View style={styles.imgView}>
                        <Image style={styles.img} source={global.ASSETS.LOGO} resizeMode={'center'} />
                    </View>
                    <View style={styles.contiFb}>
                        <TouchableOpacity style={styles.touchFb}>
                            <Text style={styles.f}>
                                f
                             </Text>
                            <Text style={styles.contiwithFb}>
                                {t("login_continue_fb")}
                         </Text>
                            <Text />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.already}>
                       {t("login_alreadyUser_enterNumber")}
                     </Text>
                    <View style={styles.itNumberLogin}>
                        <Image source={global.ASSETS.FLAGE} style={styles.itly} resizeMode={'contain'} />
                        <Text style={styles.itText}>
                            {t("login_it")}
                        </Text>
                        <Icon name={"arrow-drop-down"} type={"mdiMenuDown"} size={25} color={global.Colors.iconDonwClr} />
                        <TextInput style={styles.phoneInput}
                            ref={ref => this.ref = ref}
                            autoFocus={true}
                            placeholder={t("login_phoneNumber")}
                            keyboardType={'number-pad'}
                            maxLength={9}
                            placeholderTextColor='#000'
                            value={this.state.number}
                            onChangeText={(number) => this.setState({ number })}
                        />
                    </View>
                    <TouchableOpacity style={styles.touchlogin}
                        // onPress={() => this.props.navigation.navigate("App")}>
                        onPress={() => this.handleValidation()}
                    >
                        <Text style={styles.loginText}>
                            {t("login_login")}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={styles.dontAcView}>
                    <Text style={styles.dontAccount}>
                        {t("login_DontAccount")}
                        </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>
                        <Text style={styles.dontAccount}>
                            {t("login_signUP")}
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
