import React, { useEffect } from 'react';
import * as ImagePicker from "expo-image-picker";
import CustomButton from '../components/customButton';
import { View, Text, Image, ImageBackground } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

///import { loadingToast } from '../utils/toasts';

import { styles } from '../styles/profileScreen';


///loadingToast('Loading');
// Toast.hide();
const ProfileScreen = ({ navigation }) => {

    return(
        <ImageBackground
        source={require("../assets/images/abstract.jpg")}
        style={styles.background}
        blurRadius={1}
    >
 
 
     </ImageBackground>

    );
}

export default ProfileScreen;