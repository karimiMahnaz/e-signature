import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logo: {
        width: 200,
        height: 80,
        borderRadius:15,
    },
    logoContainer: {
        position: "absolute",
        top: 100,
        alignItems: "center",
    },
    buttonContainer: {
        width: "100%",
        padding: 20,
        alignItems: "center"
    },
    firstText: {
        fontFamily: "arimoBold",
        fontSize: 16,
        top: 25,
        color: "rgba(9,19,128,1)",
        fontWeight:'bold',
    },
    email:{
        fontFamily: "arimoBold",
        fontSize: 14,
        top: 30,
        color: "rgba(9,19,128,1)",
        fontWeight:'bold',
    },
    useremail:{
        fontFamily: "arimoBold",
        fontSize: 12,
        top: 70,
        color: "rgba(9,19,128,1)",
        fontWeight:'bold',
    }
});