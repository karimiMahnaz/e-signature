import React, { useState, useEffect } from 'react';
import * as ImagePicker from "expo-image-picker";
import { View, Image, Text, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { MaterialIcons } from '@expo/vector-icons';
import Toast from "react-native-tiny-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ItemSeparator from "../components/itemSeparator";
import { CustomText, Screen } from "../components";
import { customToast, loadingToast } from '../utils/toasts';
import { styles } from '../styles/profileScreen';
import { getProfile } from "../../api/users";

///loadingToast('Loading');
// Toast.hide();
const ProfileScreen = ({ navigation }) => {

    const [getImage, setImage] = useState(null);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [company, setCompany] = useState('');
    const [education, setEducation] = useState('');
    const [userName, setuserName] = useState('');
    const [requester, setRequester] = useState('');
    const [provider, setProvider] = useState('');
    const [design, setDesign] = useState('');
    const [develop, setDevelop] = useState('');
    const [security, setSecurity] = useState('');
    const [qa, setQa] = useState('');
    const [profile, setProfile] = useState('');

    useEffect(() => {
        const checkForNet = async () => {
            const state = await NetInfo.fetch();
            if (!state.isConnected) { customToast('please connect to the internet'); }

        }
        checkForNet();
    }, []);


    useEffect(() => {
       
        loadingToast("Connecting...");

        try {

            const readStorage = async () => {

                const mail = await AsyncStorage.getItem('email');
                setEmail(mail);

                const imageUri = await AsyncStorage.getItem("Image");
                if ((imageUri !== null) && (email !==null) && (email !== '')) {
                    setImage(imageUri);
               
                } else {setImage(null);}

               if (mail !== null && mail !=='') {
                let {data} = await getProfile(mail);
          
                setProfile(data);

                if (data) {
                    setuserName(data.userName);
                    setPhone(data.phone);
                    setCountry(data.country);
                    setEducation(data.education);
                    setCompany(data.companyName);
    
                    if (data.role.substr(0, 1) === '1') { setRequester(true) } else { setRequester(false) }
                    if (data.role.substr(1, 1) === '1') { setProvider(true) } else { setProvider(false) }
                    if (data.teams.substr(0, 1) === '1') { setDesign(true) } else { setDesign(false) }
                    if (data.teams.substr(1, 1) === '1') { setDevelop(true) } else { setDevelop(false) }
                    if (data.teams.substr(2, 1) === '1') { setSecurity(true) } else { setSecurity(false) }
                    if (data.teams.substr(3, 1) === '1') { setQa(true) } else { setQa(false) }
                
                    data.imageName !==null && data.imageName !=='' ? 
                    setImage(`https://api.softestingca.com/uploaded-files/` + data.email.replace(' ', '').trim()+'_profile/'+ data.imageName)
                    : null 

                    console.log(getImage);
                    data= ''
              }
            }
        }
            readStorage();
            Toast.hide();
        }
        catch (err) {
            Toast.hide();
            console.log(err);
        }
      
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.cancelled) {
            await AsyncStorage.setItem("Image", result.uri);
            setImage(result.uri);
        }
    };

     


    return (
        <ImageBackground  
            source={require("../assets/images/abstract.jpg")}
            style={styles.background}
            blurRadius={1}
        >

            <View style={styles.headercontainer}>
                <TouchableOpacity onPress={pickImage}>
                    <Image
                        style={styles.image}
                        source={getImage ? { uri: getImage } : require("../assets/images/user.png")}
                    />

                </TouchableOpacity>

                <View style={styles.details}>
                    <CustomText fontFamily="arimoRegular" size="2.2">
                        {userName}
                    </CustomText>
                    <CustomText
                        fontFamily="arimoRegular"
                        size="1.9"
                        styles={styles.subTitle}
                    >
                        {email ? JSON.parse(email) : null}
                    </CustomText>
                </View>
                <TouchableOpacity onPress={() => { }} style={styles.settings}>
                    <MaterialIcons name="settings" size={24} color="tomato" />
                </TouchableOpacity>
            </View>
            <ItemSeparator height={3} />

            <Screen style={styles.detailContainer}>

                <Text style={ provider || requester? styles.service: styles.inactive }>
                    {provider ? 'Service Provider ' : null}
                    {requester ? 'Service Requester ' : null}
                </Text>
                <View style={styles.columnContainer}>
                    <View style={design? styles.serviceContainer: styles.inactive} >
                        <Text style={design? styles.service: styles.inactive}>
                            {design ? 'Design' : null}
                        </Text>
                    </View>
                    <View style={develop? styles.serviceContainer: styles.inactive} >
                        <Text style={develop? styles.service: styles.inactive}>
                            {develop ? 'Development' : null}
                        </Text>
                    </View>
                    <View style={security? styles.serviceContainer:styles.inactive} >
                        <Text style={security? styles.service :styles.inactive}>
                            {security ? 'Security Testing' : null}
                        </Text>
                    </View>

                 
                    <View style={qa ? styles.serviceContainer : styles.inactive} >
                        <Text style={ qa ? styles.service : styles.inactive}>  
                            {qa ? 'QA Testing' : null}
                        </Text>
                    </View>
                </View>

                <Text style={styles.service}>
                    phone :{phone}
                </Text>
                <Text style={styles.service}>
                    country :{country}
                </Text>
                <Text style={styles.service}>
                    education :{education}
                </Text>
                <Text style={styles.service}>
                    company :{company}
                </Text>


                <View style={styles.note}>
                    <CustomText fontFamily="arimoBold" size="2.2" color="rgba(9,19,128,1)" >
                        change or complete your profile?
                    </CustomText>
                    <TouchableOpacity style={styles.link} onPress={() => Linking.openURL('https://SofTestingca.com')}>
                        <CustomText fontFamily="arimoBold" size="2.2" color="rgba(9,19,128,1)" >
                            Go to:   https://SofTestingca.com
                        </CustomText>
                    </TouchableOpacity>
                </View>
            </Screen>

        </ImageBackground>

    );
}

export default ProfileScreen;