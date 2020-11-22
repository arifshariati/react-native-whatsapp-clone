import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { View } from '../components/Themed';

//components
import ContactListItem from '../components/ContactListItem';

//mock Data
import users from '../data/Users';

export default function ContactsScreen() {
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
