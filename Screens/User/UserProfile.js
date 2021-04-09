import React, {useContext, useState, useCallback} from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { Container } from 'native-base'
import { useFocusEffect } from "@react-navigation/native"
import AsyncStorage from "@react-native-community/async-storage"

import axios from "axios"
import baseURL from "../../assets/common/baseUrl"

import AuthGlobal from "../../Context/store/AuthGlobal"
import { logoutUser } from "../../Context/actions/Auth.actions"
import { useEffect } from 'react/cjs/react.development';

const UserProfile = (props) => {
    const context = useContext(AuthGlobal)
    const [userProfile, setUserProfile] = useState()

    useEffect(() => {
        if(
            context.stateUser.isAuthenticated === false ||
            context.stateUser.isAuthenticated === null
        ) {
            props.navigation.navigate("Login")
        }

        AsyncStorage.getItem("jwt")
        .then((res) => {
            axios
                .get(`${baseURL}users/${context.stateUser.user.sub}`, {
                    headers: { Authorization: `Bearar ${res}` },
                })
                .then((user) => setUserProfile(user.data))
        })
        .catch((error) => console.log(error))
        console.log(userProfile.name);

    return () => {
        setUserProfile();
    }

    }, [context.stateUser.isAuthenticated])
    return(
        <Container>
            <ScrollView>
                <Text style={{ fontSize: 30}}>
                    {userProfile ? userProfile.name : ""}
                </Text>
                <View style={{marginTop: 20}}>
                    <Text style={{margin: 10}}>
                        Email: {userProfile ? userProfile.email : ""}
                    </Text>
                    <Text style={{margin: 10}}>
                        Phone: {userProfile ? userProfile.phone : ""}
                        
                    </Text>
                    
                </View>
                
                <View style={{ marginTop: 80 }}>
                    <Button title={"Sign Out"} onPress={() => [
                        AsyncStorage.removeItem("jwt"),
                        logoutUser(context.dispatch)
                    ]}/>
                </View>
            </ScrollView>
        </Container>
    )
}

export default UserProfile;