import firebase from "firebase";
import moment from "moment";
import global from "./global";
import { api_send_push_notif } from "./Api";
class Fire_Chat {
  uid = "";
  messageRef = null;

  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyBKeDPnuTSTNiElCtke3R6WQ06JZoWId2A",
      authDomain: "dacwash.firebaseapp.com",
      databaseURL: "https://dacwash.firebaseio.com",
      projectId: "dacwash",
      storageBucket: "dacwash.appspot.com",
      messagingSenderId: "244777178350",
      appId: "1:244777178350:web:ec2ee54e5cf047d5348fff",
      measurementId: "G-D2MN5CS9GW",
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            alert(error.message);
          });
      }
    });
  }

  setUid(value) {
    // this.uid = value;
    this.uid = global.AUTHTOKEN;
  }
  getUid() {
    // return this.uid;
    return global.AUTHTOKEN;
  }

  loadMessages(callback) {
    const d = global.BOOKING_DETAILS;
    let chat_id =
      Number(global.AUTHTOKEN) > Number(d.booking_driver_id)
        ? `${global.AUTHTOKEN}_${d.booking_driver_id}`
        : `${d.booking_driver_id}_${global.AUTHTOKEN}`;

    this.messageRef = firebase
      .database()
      .ref()
      .child("ChatHistory")
      .child(`${chat_id}`);
    this.messageRef.off();

    const onRecieve = (data) => {
      const msg = data.val();
      console.log(msg);
      callback({
        _id: data.key,
        text: msg.Message,
        createdAt: moment(msg.Date).format(),
        user: {
          _id: msg.SenderId,
          name: msg.Sendername,
          avatar: global.ASSETS.PROFILE,
        },
      });
    };
    this.messageRef.limitToLast(20).on("child_added", onRecieve);
  }

  sendMessage(msg) {
    let data = global.BOOKING_DETAILS;
    for (let i = 0; i < msg.length; i++) {
      this.messageRef.push({
        Message: msg[i].text,
        Time: "",
        Date: Date.now(),
        Timestamp: "",
        chatType: "Text",
        SenderId: global.AUTHTOKEN,
        ReciverId: data.booking_driver_id,
        Sendername: `${global.USER.first_name} ${global.USER.last_name}`,
        Receivername: data.first_name,
        Count: "0",
        sendImage: global.ASSETS.SELECT_VEHICLE_IMAGE,
      });
      api_send_push_notif({
        id: data.booking_driver_id,
        msg: msg[i].text,
      });
    }
  }
  closeChat() {
    if (this.messageRef) {
      this.messageRef.off();
    }
  }
}
export default new Fire_Chat();
