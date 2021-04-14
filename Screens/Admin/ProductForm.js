import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native'
import { Item, Picker } from "native-base"
import FormContainer from "../../Shared/Form/FormContainer"
import Input from "../../Shared/Form/Input"
import MyButton from "../../Shared/StyledComponents/MyButton"
import Error from "../../Shared/Error"
import Icon from "react-native-vector-icons/FontAwesome"
import Toast from "react-native-toast-message"
import AsyncStorage from "@react-native-community/async-storage"
import baseURL from "../../assets/common/baseUrl"
import axios from "axios"

const ProductForm = (props) => {

    const [pickerValue, setPickerValue] = useState();
    const [brand, setBrand] = useState();
    const [name, setName] = useState();


    return (
        <View>
            <Text>ProductForm Screen</Text>
        </View>
    )
}

export default ProductForm;