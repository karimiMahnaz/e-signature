import AsyncStorage from "@react-native-async-storage/async-storage";

import http from "./";



export const loginUser = async (user) => {
    try {
        const { data, status } = await http.post(
            `${http.url}/api/user/login`,
            JSON.stringify(user)
        );
   //     console.log('status', status);
    //    console.log('data', data.email);
        if (status === 200) {
          await AsyncStorage.setItem("token", JSON.stringify(data.token));
          await AsyncStorage.setItem("userId", JSON.stringify(data.userId));
          await AsyncStorage.setItem("email", JSON.stringify(data.email));
         
        }
        return status;
    } catch (err) {
        console.log(err);
    }
};


export const getProfile = async (email) => {
    try {

    
        const res = await http.get(
            `${http.url}/api/user/getProfile`,
            { params: {email}}
        );
      //  console.log('status', res.status);
      //  console.log('resdata', res.data);
        if (res.status === 200) {
            return  res;
        }
        return res.status;
    } catch (err) {
        console.log(err);
    }
};
