import React,{useState,useEffect} from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import styles from './style';

import { API, graphqlOperation, Auth} from 'aws-amplify'
import { createMessage, updateChatRoom } from '../../graphql/mutations'

//icons
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';



const InputBox = (props) => {

    const { chatRoomID } = props;

    const [message,setMessage] = useState('');
    const [myUserId,setMyUserId] = useState(null);


    const onMicrophonePress = () =>{
        console.warn("Microphone");
    }

    const updateChatRoomLastMessage = async (messageId:string) => {

        try{

            await API.graphql(
                graphqlOperation(
                    updateChatRoom,
                    {
                        input:{
                            id: chatRoomID,
                            lastMessageID:messageId,
                        }
                    }
                )
            )
        } 
        catch(error){
            console.log(error.message);
        }
    }
    const onSendPress = async () => {
        try {
          const newMessageData = await API.graphql(
            graphqlOperation(
              createMessage, {
                input: {
                  content: message,
                  userID: myUserId,
                  chatRoomID
                }
              }
            )
          )
    
          await updateChatRoomLastMessage(newMessageData.data.createMessage.id)
        } catch (e) {
          console.log(e);
        }
    
        setMessage('');
      }

    const onPress = () =>{
        if(!message){
            onMicrophonePress();
        }else{
            onSendPress();
        }
    }

    useEffect(()=>{

        const fetchUser = async () => {

            const userInfo = await Auth.currentAuthenticatedUser();
            
            setMyUserId(userInfo.attributes.sub);


        }
        fetchUser();
    },[]);


    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={20} color={'gray'} style={styles.icons} />
                <TextInput 
                    placeholder={'Type Message'} 
                    multiline 
                    style={styles.textInput} 
                    value={message} 
                    onChangeText={setMessage} 
                    
                />
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
