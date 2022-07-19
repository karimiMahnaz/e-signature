import React, { useRef } from "react";
import { ImageBackground, View } from "react-native";
import SignatureScreen from "react-native-signature-canvas";
import Constans from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {CustomButton} from '../components';
import { styles } from '../styles/signScreen';


const SignScreen = ({ onOK }) => {
    const ref = useRef();

    const handleOK = async (signature) => {
        //console.log(signature);
        ///  onOK(signature);
        await AsyncStorage.setItem("sign", JSON.stringify(signature));
    };

    const handleClear = () => {
        ref.current.clearSignature();
    };

    const handleConfirm = async () => {
        console.log("end");
        ref.current.readSignature();
       
    };

    ///  const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;

    const imgWidth = 350;
    const imgHeight = 450;
    const style = `.m-signature-pad {box-shadow: 1px gray; border:none; } 
                   .m-signature-pad--body {border:1px solid gray;}
                   .m-signature-pad--footer {display: none; margin: 0px; }
                   body,html {
                   width: ${imgWidth}px; height: ${imgHeight-20}px;}`;

    return (
        <ImageBackground  
        source={require("../assets/images/abstract.jpg")}
        style={styles.background}
        blurRadius={1}
        >
        <View style={{ width: imgWidth, height: imgHeight+20 , marginTop: Constans.statusBarHeight + 50,}}>
            <SignatureScreen ref={ref} onOK={handleOK} webStyle={style} />
            <View style={styles.column}>
                <CustomButton title="Clear" color="rgba(9,19,128,1)" onPress={handleClear} />
                <CustomButton title="Confirm"  color="rgba(9,19,128,1)" onPress={handleConfirm} />
            </View>
        </View>
        </ImageBackground>
    );

}

export default SignScreen;