import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../src/screens/welcomeScreen";
import LoginScreen from '../src/screens/loginScreen';
import ProfileScreen from '../src/screens/profileScreen';
import SignScreen from '../src/screens/signScreen';
import DocumentScreen from '../src/screens/documentScreen';


const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="welcome"
            screenOptions={({ route }) => (
                {
                    "tabBarActiveTintColor": "dodgerblue",
                    "tabBarInactiveTintColor": "gray",
                    "tabBarActiveBackgroundColor": "linen",
                    "tabBarLabelStyle": {
                        "fontFamily": "arimoRegular",
                        "fontSize": RFPercentage(1.5)
                    },
                    "tabBarStyle": [
                        {
                            "display": "flex"
                        },
                        null
                    ]
                },
                {
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "signature") {
                            iconName = focused    
                                ? "archive-search" 
                                : "archive-search-outline";
                        } else if (route.name === "profile") {
                            iconName = focused
                                ? "face-man-profile"
                                : "face-woman-profile";
                        } else if (route.name === "login") {
                            iconName = "login";
                        } else if (route.name === "document") {
                            iconName = focused 
                                ? "file-document"
                                : "file-document-edit-outline"
                        // } else if (route.name === "assigning") {
                        //     iconName = focused ? "file-link"
                        //         : "file-link-outline"
                        } else if (route.name === "welcome") {
                            iconName = focused 
                                ? "water-well"
                                : "water-well-outline"
                        }

                        return (
                            <MaterialCommunityIcons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}

        // tabBarOptions={{
        //     activeTintColor: "tomato",
        //     inactiveTintColor: "gray",
        //     activeBackgroundColor: "light",
        //     labelStyle: {
        //         fontFamily: "arimoRegular",
        //         fontSize: RFPercentage(1.5),
        //     },
        // }}


        >



            <Tab.Screen
                name="welcome"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="signature"
                component={SignScreen}
                options={{
                    // tabBarLabel: "document",
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="login"
                component={LoginScreen}
                options={{
                    //  tabBarLabel: "login",
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    //  tabBarLabel: "profile",
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="document"
                component={DocumentScreen}
                options={{
                    headerShown: false,
                    tabBarBadge: 3,
                }}
            />
            
        </Tab.Navigator>
    );
};
    
export default TabsNavigator;
