import React, { useEffect } from 'react';
import CustomButton from '../components/customButton';
import { View, Text, Image, ImageBackground } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

///import { loadingToast } from '../utils/toasts';

import { styles } from '../styles/welcomeScreen';
///import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


///loadingToast('Loading');
// Toast.hide();
const WelcomeScreen = ({ navigation }) => {
  
    useEffect(() => {
        const checkForNet = async () => {
            const state = await NetInfo.fetch();
            if (!state.isConnected) { customToast('please connect to the internet'); }
            //confirmationAlert();
            else {
   
                navigation.setOptions({
                  tabBarStyle: {display: 'none'}
                
                  });
                // const token = await AsyncStorage.getItem("token");
                // const userId = JSON.parse(await AsyncStorage.getItem("userId"));

                // if (token !== null && userId !== null) {
                //     const decodedToken = decodeToken(token);

                //     dispatch(userAction(decodedToken.user));

                //     if (decodedToken.user.userId === userId)
                //         navigation.dispatch(StackActions.replace("Home"));
                //     else {
                //         await AsyncStorage.removeItem("token");
                //         await AsyncStorage.removeItem("userId");
                //         navigation.navigate("Login");
                //     }
                // }
            }
        };
        checkForNet();
    }, []);


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
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title="Signing personal documents"
                    color="rgba(9,19,128,1)"
                    onPress={() => { }}
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
                    title="Track your contracts in SofTesting"
                    color="rgba(9,19,128,1)"
                    onPress={() => { }} />

                <CustomButton
                    title="Assign SofTesting's contracts"
                    color="rgba(9,19,128,1)"
                    onPress={() => { }} />

            </View>
        </ImageBackground>
    );
}

export default WelcomeScreen;