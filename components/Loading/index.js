import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Overlay } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import global from "../../utils/global";
export default class Loading extends Component {
  static loadingInstance;
  // static myComponentInstance

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      text: "",
    };

    Loading.loadingInstance = this;
  }

  static show() {
    this.loadingInstance._show();
  }

  _show() {
    this.setState({ visible: true });
  }
  static hide() {
    this.loadingInstance._hide();
  }

  _hide() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <Overlay
        isVisible={this.state.visible}
        overlayBackgroundColor="transparent"
        overlayStyle={styles.overlay}
        containerStyle={styles.overlay}
      >
        <View style={{ backgroundColor: "transparent" }}>
          <Animatable.Image
            animation="rotate"
            duration={2000}
            iterationCount="infinite"
            source={global.ASSETS.LOGO_ICON}
            style={styles.image}
          />
          {/* <Text style={styles.loadingText}>Loading ...</Text> */}
        </View>
      </Overlay>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    borderColor: global.COLOR.PRIMARY_DARK,
    borderWidth: 1,
    opacity: 1,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
  loadingText: {
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    marginVertical: 5,
    color: global.COLOR.PRIMARY_DARK,
  },
});
