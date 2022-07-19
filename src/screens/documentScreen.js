import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground, Keyboard } from 'react-native';
///import Pdf from "react-native-pdf";

import { styles } from '../styles/documentScreen';
import { customToast } from '../utils/toasts';
import {CustomText,
    CustomForm,
    CustomFormField,
    SubmitButton, Screen
} from "../components";


const DocumentScreen = ({ navigation }) => {



    return (
        <ImageBackground  
        source={require("../assets/images/abstract.jpg")}
        style={styles.background}
        blurRadius={1}
    >
        <Screen>
            
        </Screen>

        </ImageBackground>
        );
    }
    
    export default DocumentScreen;