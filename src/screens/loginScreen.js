import React, { useEffect, useState } from 'react';
import { View, ImageBackground, TouchableOpacity, Linking, Keyboard } from 'react-native';
import * as Yup from "yup";
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-tiny-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { decodeToken } from "./../utils/token";

import { styles } from '../styles/loginScreen';
import { loginUser } from "../../api/users";
import { customToast, loadingToast, successToast } from '../utils/toasts';
import {CustomText,
    CustomForm,
    CustomFormField,
    SubmitButton, Screen
} from "../components";


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required(" email is required")
        .email(" email is not valid"),
    password: Yup.string()
        .required(" password is required")
        .min(6, "at least 6 characters")
        .max(30, "at least 30 characters"),
});


const LoginScreen = ({ navigation, route }) => {


     useEffect(() => {
        const checkForNet = async () => {
            const state = await NetInfo.fetch();
            if (!state.isConnected) { customToast('please connect to the internet'); }
            //confirmationAlert();
            else {
                const token = await AsyncStorage.getItem("token");
                const userId = JSON.parse(await AsyncStorage.getItem("userId"));

                if (token !== null && userId !== null) {
                    const decodedToken = decodeToken(token);

               ///     dispatch(userAction(decodedToken.user));

                    if (decodedToken.userId !== userId)
                       /// navigation.dispatch(StackActions.replace("Home"));

               ///     else
                    {
                        await AsyncStorage.removeItem("token");
                        await AsyncStorage.removeItem("userId");
                    }
                }
            }
        };
        checkForNet();
    }, []);


         const handleUserLogin = async (user) => {
             try {
                loadingToast("Connecting...");
                Keyboard.dismiss () ;
                const status = await loginUser(user);
                
                if (status === 200) {
                    Toast.hide();
                    successToast("welcome...");
    
                     navigation.reset({
                         index: 0,
                         routes: [{ name: "Home" }],
                     });
                } else {
                    Toast.hide();
                    customToast(" email or password is not valid! ");
                }
            } catch (err) {
                Toast.hide();
                console.log(err);
            }
        };


    return (

        <ImageBackground
            source={require("../assets/images/abstract.jpg")}
            style={styles.background}
            blurRadius={1} >
            <Screen style={styles.container}>
                <CustomForm initialValues={{ email: "", password: "" }}


                  onSubmit={(user) => {
                    handleUserLogin(user);
                     }}
                    validationSchema={validationSchema}
                >

                
                        <CustomFormField
                            placeholder="Email"
                            autoCompleteType="email"
                            autoCorrect={false}
                            keyboardType="email-address"
                            icon="email"
                            name="email"
                            placeholderTextColor="royalblue"
                        />
                       
                        <CustomFormField
                            placeholder="Password"
                            autoCompleteType="password"
                            autoCorrect={false}
                            icon="onepassword"
                            name="password"
                            placeholderTextColor="royalblue"
                            secureTextEntry
                        />
                       

                    <View style={styles.buttonContainer}>
                        <SubmitButton title="Submit" />
                    </View>
                       
                </CustomForm>

                <CustomText fontFamily="arimoBold" size="2" color="rgba(9,19,128,1)" >
                    Create new account? or Forgot Password?
                </CustomText>
                <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('https://SofTestingca.com')}>
                  <CustomText fontFamily="arimoBold" size="2" color="rgba(9,19,128,1)" >
                     Go to:   https://SofTestingca.com
                  </CustomText>
                </TouchableOpacity>
                   

            </Screen>

        </ImageBackground>


    );
}

export default LoginScreen;