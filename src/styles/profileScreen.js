import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inactive:{
        display:"none",
        margin:0,
        padding:0,
        height:0
    },
    background: {
        flex: 1,
     
    },
    headercontainer:{
        flexDirection: "row",
        margin: 20,
        padding: 15,
    },
   
    image: {
        top:20,
        width: 100,
        height: 100,
        borderRadius: 35,
    },
    details: {
        marginLeft: 12,
        justifyContent: "center",
    },
    subTitle: {
        color: "#6e6969",
    },
    settings: {
        top:60,
        alignSelf: "center",
        marginLeft: 20,
    },
    detailContainer: {
        flex:1,
        flexDirection: "column",
        marginHorizontal: 20,
        padding: 15,
        backgroundColor:`#f0f8ff`,
        opacity:.7
    },
    columnContainer:{

        flexDirection: "column",
        justifyContent: "stretch",
        padding: 10,
        marginHorizontal:5,
        minWidth:'50%',
        fontSize:16,
    }, 
    serviceContainer:{
        fontFamily:"arimoBold",
        fontSize:16,
        width:'50%', 
     
    },
    service:{ 
         fontFamily:"arimoBold",
         fontSize:16,
         padding:3,
         marginBottom:10,
         height:30,

    },
     link:{
        width:"90%",
        margin:15,
        alignItems:"center",
        fontFamily:"arimoBold"
    },
    note:{
        top:20,
        alignItems:"center",
        fontFamily:"arimoBold"
    }

})