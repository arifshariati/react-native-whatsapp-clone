import React,{ useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { View } from '../components/Themed';

import { API, graphqlOperation } from 'aws-amplify'
import { listChatRooms } from '../graphql/queries'

//components
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';

//mock Data
import chatRooms from '../data/ChatRooms';

export default function ChatsScreen() {

  /* const [chatRooms, setChatRooms] = useState([]);

  useEffect(()=>{

    const fetchChatRooms = async () =>{

      const chatRoomData = await API.graphql(graphqlOperation(listChatRooms));
      //console.log(chatRoomData);
      setChatRooms(chatRoomData.data.listChatRooms.items);
    }
    fetchChatRooms();
  },[]); */


  return (
    <View style={styles.container}>
      <FlatList 
        style={{width:'100%'}} 
        data={chatRooms} 
        renderItem={({item})=><ChatListItem chatRoom={item} />} 
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
