import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View,TouchableOpacity } from 'react-native'
import { useNavigation} from '@react-navigation/native'

import styles from './style'

const NewMessageButton = () => {

    const navigation = useNavigation();

    const onPress = () =>{
        navigation.navigate('Contacts');
    }
    return (
        
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name="message-reply-text" size={25} color={'white'} />
                </TouchableOpacity>
            </View>
        
        
    )
}

export default NewMessageButton;