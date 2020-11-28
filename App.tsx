import { StatusBar } from 'expo-status-bar';
import React,{ useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

import { Auth, API, graphqlOperation } from 'aws-amplify'

import { withAuthenticator } from 'aws-amplify-react-native'

import { getUser } from './graphql/queries'
import {  createUser } from './graphql/mutations'

const randomImages = [
  "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg",
  "https://www.abc.net.au/cm/rimage/9298152-3x2-xlarge.jpg?v=4",
  "https://nationaltoday.com/wp-content/uploads/2019/01/museum-selfie-day.jpg",
  "https://i.pinimg.com/736x/2c/35/a7/2c35a7af60ccbd2a770516d174e66895.jpg",
  "https://appagg.co/ii/000/032/994/32994069.jpg"
];


function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () =>{

    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }

  useEffect(()=>{

    const fetchUser = async () => {

      const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});

      if(userInfo){

        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));

        if(userData.data.getUser){

          console.log("User is already registered in database");
          return;
        }

        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri: getRandomImage(),
          status: "Hey, I am using whatsapp"
        }

        await API.graphql(graphqlOperation(createUser,{ input: newUser}));

      }
    }

    fetchUser();

  },[]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);