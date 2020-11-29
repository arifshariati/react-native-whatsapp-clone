import React,{ useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { View } from '../components/Themed';

import { API, Auth, graphqlOperation } from 'aws-amplify'
import { listChatRooms} from '../graphql/queries'

import { getUser } from './queries'

//components
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';

//mock Data
import chatRooms from '../data/ChatRooms';

export default function ChatsScreen() {

  const [chatRooms, setChatRooms] = useState([]);

  useEffect(()=>{

    const fetchChatRooms = async () =>{

      try{

        const userInfo = await Auth.currentAuthenticatedUser();

        const userData = await API.graphql(
          graphqlOperation(
            getUser,
            {
              id: userInfo.attributes.sub
            }
          )
        )

        setChatRooms(userData.data.getUser.chatRoomUser.items)

      }
      catch(error){
        console.log(error.message);
      }
    }
    fetchChatRooms();
  },[]);


  return (
    <View style={styles.container}>
      <FlatList 
        style={{width:'100%'}} 
        data={chatRooms} 
        renderItem={({item})=><ChatListItem chatRoom={item.chatRoom} />} 
        keyExtractor={(item)=>item.id} 
      />
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
