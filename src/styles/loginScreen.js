import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
    },
    container: {
        marginTop: Constants.statusBarHeight + 80,
        alignItems: "center",
    },
    buttonContainer:{
        width:"90%",
        backgroundColor: "rgba(9,19,128,1)",
        borderRadius:15,
        marginTop:20,
        marginBottom:20,
        paddingHorizontal:30
    },
    link:{
        width:"90%",
        marginTop:20,
    }
   
   
});