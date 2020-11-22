import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';

//screens
import ChatsScreen from '../screens/ChatsScreen';
import ContactsScreen from '../screens/ContactsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
//icons
import { Fontisto,Ionicons } from '@expo/vector-icons'

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].background,
      style:{
        backgroundColor:Colors[colorScheme].tint,
      },
      indicatorStyle:{
        backgroundColor:Colors[colorScheme].background,
        height:3
      },
      labelStyle:{
        fontWeight:'bold'
      },
      showIcon:true
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={20} />,
          tabBarLabel:()=>null
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatsScreen}
      />
      <MainTab.Screen
        name="Status"
        component={ContactsScreen}
      />
      <MainTab.Screen
        name="Calls"
        component={TabTwoNavigator}
      />
    </MainTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={ChatsScreen}
        options={{ headerShown: false}}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}
