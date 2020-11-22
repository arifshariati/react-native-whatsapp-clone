import React,{useState} from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import styles from './style';

//icons
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';



const InputBox = () => {

    const [message,setMessage] = useState('');

    const onMicrophonePress = () =>{
        console.warn("Microphone");
    }

    const onSendPress = () =>{
        console.warn(`Sending: ${message}`);

        setMessage('');
    }

    const onPress = () =>{
        if(!message){
            onMicrophonePress();
        }else{
            onSendPress();
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={20} color={'gray'} style={styles.icons} />
                <TextInput placeholder={'Type Message'} multiline style={styles.textInput} value={message} onChangeText={setMessage} />
                <Entypo name="attachment" size={20} color={'gray'} style={styles.icons} />
                {
                    !message && <Fontisto name="camera" size={20} color={'gray'} style={styles.icons} />
                }
                
            </View>

            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {
                        !message ? (
                            <MaterialCommunityIcons name="microphone" size={25} color={'white'} />
                        ):(
                            <MaterialIcons name="send" size={25} color={'white'} />
                        )
                    }
                
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default InputBox;
