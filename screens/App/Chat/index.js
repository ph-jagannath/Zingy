import React, { Component } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Header, Icon } from "react-native-elements";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import Fire_Chat from "../../../utils/Fire_Chat";
import global from "../../../utils/global";
import { t } from "i18n-js";
import styles from "./styles";
export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    Fire_Chat.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Fire_Chat.closeChat();
  }

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground source={global.ASSETS.BGIMAGE} style={styles.container}>
        <Header
          containerStyle={styles.header}
          statusBarProps={{ backgroundColor: global.COLOR.PRIMARY_LIGHT }}
          backgroundColor={global.COLOR.PRIMARY_LIGHT}
          leftComponent={
            <TouchableOpacity
              style={styles.touchLeft}
              onPress={() => navigation.goBack()}
            >
              <Icon name="chevron-left" size={32} color={global.COLOR.white} />
            </TouchableOpacity>
          }
          centerComponent={
            <Text style={styles.headerText}>
              {global.BOOKING_DETAILS.first_name}
            </Text>
          }
        />
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => Fire_Chat.sendMessage(messages)}
          multiline={false}
          renderBubble={(props) => {
            return (
              <Bubble
                {...props}
                wrapperStyle={{
                  // left: {
                  //   backgroundColor: "#fff",
                  //   borderWidth: 1,
                  //   borderColor: "#e2e2e2",
                  //   padding: 7,
                  // },
                  right: {
                    backgroundColor: global.COLOR.PRIMARY_DARK,
                    padding: 7,
                  },
                }}
                // textStyle={{
                //   right: {
                //     color: "#000",
                //   },
                // }}
              />
            );
          }}
          user={{
            _id: Fire_Chat.getUid(),
          }}
        />
      </ImageBackground>
    );
  }
}
