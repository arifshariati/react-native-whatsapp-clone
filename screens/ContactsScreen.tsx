import React,{ useState, useEffect} from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { View } from '../components/Themed';

import { API, graphqlOperation } from 'aws-amplify'
import { listUsers } from '../graphql/queries'
//components
import ContactListItem from '../components/ContactListItem';

//mock Data
//import users from '../data/Users';

export default function ContactsScreen() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{

    const fetchUsers = async () =>{

      try{

        const userData = await API.graphql(graphqlOperation(listUsers));

        if(userData){
          setUsers(userData.data.listUsers.items);
        }

      }
      catch(error){
        console.log(error.message);
      }
      
    }

    fetchUsers();
  },[]);

  return (
    <View style={styles.container}>
      <FlatList 
        style={{width:'100%'}} 
        data={users} 
        renderItem={({item})=><ContactListItem user={item} />} 
        keyExtractor={(item)=>item.id} 
      />
      
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
