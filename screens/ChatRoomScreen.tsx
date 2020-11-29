import React,{useState,useEffect} from 'react'
import { FlatList,ImageBackground } from 'react-native'

import { useRoute } from '@react-navigation/native'

import { API,Auth,graphqlOperation} from 'aws-amplify'
import { messagesByChatRoom } from '../graphql/queries'

// component
import ChatMessage from '../components/ChatMessage';
import InputBox from '../components/InputBox';

//mock data
//import chatRoomData from '../data/Chats';

//background image
import backgroundImage from '../assets/images/background-image.jpg';

const ChatRoomScreen = () => {

    const [messages, setMessages] = useState([]);
    const [myId,setMyId]=useState(null);

    const route = useRoute();

    useEffect(()=>{

        const fetchMessages = async () => {

            const messagesData = await API.graphql(
                graphqlOperation(
                    messagesByChatRoom,
                    { 
                        chatRoomID: route.params.id, 
                        sortDirection:'DESC'
                    }
                )
            );

            setMessages(messagesData.data.messagesByChatRoom.items)
        }
        fetchMessages();
    },[])

    useEffect(()=>{

        const getMyId = async () =>{

            const userInfo = await Auth.currentAuthenticatedUser();
            setMyId(userInfo.attributes.sub);
        }

        getMyId();

    },[]);

    return (
        <ImageBackground source={backgroundImage} style={{width:'100%',height:'100%'}}>
            <FlatList
                data={messages}
                renderItem={({item})=><ChatMessage myId={myId} message={item} />}
                inverted
            />
            <InputBox chatRoomID = { route.params.id } />
        </ImageBackground>
        
    )
}

export default ChatRoomScreen;
