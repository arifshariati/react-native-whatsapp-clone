import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Image, View } from 'react-native';
import Colors from '../constants/Colors';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';


// Screens
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';

//icons
import {
  Octicons, 
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons
} from '@expo/vector-icons';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {


  return (
    <Stack.Navigator screenOptions={{ 
      
      
      headerStyle:{
        backgroundColor:Colors.light.tint, 
        shadowOpacity:0,
        elevation:0
      },
      headerTintColor:Colors.light.background,
      headerTitleAlign:'left',
      headerTitleStyle:{
        fontWeight:'bold'
      },
      
    }}>
      <Stack.Screen 
        name="Root" 
        component={MainTabNavigator} 
        options = {{
          title:"WhatsApp",
          headerRight:()=>(
            <View style={{
              marginRight:10,
              flexDirection:'row',
              width:60,
              justifyContent:'space-between'
            }}>
              <Octicons name="search" size={22} color={Colors.light.background} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.light.background} />
            </View>
          )
        }}
      />
      
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={({ route }) =>({
          title: route.params.name,
          
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <FontAwesome5 name="video" size={22} color={Colors.light.background} />
              <MaterialIcons name="call" size={22} color={Colors.light.background} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={Colors.light.background} />
            </View>
          )
        })} 
      />

    <Stack.Screen name="Contacts" component={ContactsScreen} options={{ title: 'Contacts' }} />

    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    
    </Stack.Navigator>
  );
}
