import React, { useState, useCallback, useEffect } from "react";
import { I18nManager, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import WelcomeScreen from "./src/screens/welcomeScreen";
import LoginScreen  from "./src/screens/loginScreen";
import ProfileScreen  from "./src/screens/profileScreen";
import SignScreen  from "./src/screens/signScreen";
import DocumentScreen  from "./src/screens/documentScreen";
import TabsNavigator from "./containers/tabsNavigator";
import  './src/utils/ignoreWarnings';


//* Support for RTL
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);



export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const Stack = createNativeStackNavigator();

  const fetchFonts = () =>
    Font.loadAsync({
        arimoBold: require("./src/assets/fonts/ArimoBold.ttf"),
        arimoRegular: require("./src/assets/fonts/ArimoRegular.ttf"),
    });

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
    //    await Font.loadAsync(Entypo.font);
          fetchFonts();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  


  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
        return null;
  }

     if (appIsReady) {  
     
       return(
         <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
               <Stack.Screen name="Home" component={TabsNavigator}  />
               <Stack.Screen name="welcome" component={WelcomeScreen}  />          
               <Stack.Screen name="login" component={LoginScreen} />
               <Stack.Screen name="profile" component={ProfileScreen} />
               <Stack.Screen name="signature" component={SignScreen} />
               <Stack.Screen name="document" component={DocumentScreen} />
                {/* options={{headerTitle: 'profile', headerShown: true}} */}
                {/* options={{headerShown: false}} */}
            </Stack.Navigator>
         </NavigationContainer>
  )} else{
    return(
        <View  
              styleSheet = {styles.container} onLayout={onLayoutRootView}>
                <Text>SplashScreen Demo! 👋</Text>
        </View>
    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
