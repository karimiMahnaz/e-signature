import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from '../styles/welcomeScreen';
import { customToast } from '../utils/toasts';
import CustomButton from '../components/customButton';


///loadingToast('Loading');
// Toast.hide();


const WelcomeScreen = ({ navigation }) => {
  

    const [email, setEmail] = useState('');

    useEffect(() => {
        const checkForNet = async () => {
            const state = await NetInfo.fetch();
            if (!state.isConnected) { 
                customToast('please connect to the internet'); 
            } else {

                navigation.setOptions({
                    tabBarStyle: {display: 'none'}
                  
                    });
               }
            }
        checkForNet();
    }, []);

   
    useEffect(() => {

        const readStorage = async() =>{
            const x = await AsyncStorage.getItem('email');
            setEmail(JSON.parse(x));
            return (email);
        }
         readStorage();
    
    }, []);

    const handleLogout= async() =>{
     
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("userId");
            await AsyncStorage.removeItem("email");
            setEmail(null);
         ///   navigation.dispatch(StackActions.replace("Welcome"));
              customToast("Logout");
        }


    return (
        <ImageBackground
            source={require("../assets/images/abstract.jpg")}
            style={styles.background}
            blurRadius={1}
        >

            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/images/logo.jpg")}
                    style={styles.logo}
                />
                <Text style={styles.firstText}>
                    Software Design, Development & Testing
                </Text>
                <Text style={styles.email}>
                    hello@SofTestingCa.com
                </Text>

                {email ? <Text style={styles.useremail}>  Welcome {email} </Text> : null}

            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title="Signature"
                    color="rgba(9,19,128,1)"
                    onPress={() => {navigation.navigate("signature") }}
                />

                <CustomButton
                    title="Login"
                    color="rgba(9,19,128,1)"
                    onPress={() => {navigation.navigate("login")}} />

                 <CustomButton
                    title="Profile"
                    color="rgba(9,19,128,1)"
                    onPress={() => {navigation.navigate("profile") }} />

                <CustomButton
                    title="Documents"
                    color="rgba(9,19,128,1)"
                    onPress={() => {navigation.navigate("document") }} />

                 <CustomButton
                    title="Logout"
                    color="rgba(9,19,128,1)"
                    onPress={handleLogout} /> 

            </View>
        </ImageBackground>
    );
}

export default WelcomeScreen;