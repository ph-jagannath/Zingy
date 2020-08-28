import { AsyncStorage, Alert } from "react-native";


// login api
export async function login(state) {
    Alert.alert("Welcome", state.number)
}

export async function signUp(state)
 {
     Alert.alert("Welcome",state.name)
 }

//

