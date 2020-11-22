import React from 'react'
import { FlatList,ImageBackground } from 'react-native'

import { useRoute } from '@react-navigation/native'

// component
import ChatMessage from '../components/ChatMessage';
import InputBox from '../components/InputBox';

//mock data
import chatRoomData from '../data/Chats';

//background image
import backgroundImage from '../assets/images/background-image.jpg';

const ChatRoomScreen = () => {

    const route = useRoute();

    return (
        <ImageBackground source={backgroundImage} style={{width:'100%',height:'100%'}}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({item})=><ChatMessage message={item} />}
                inverted
            />
            <InputBox />
        </ImageBackground>
        
    )
}

export default ChatRoomScreen;
