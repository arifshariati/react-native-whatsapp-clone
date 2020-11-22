# react-native-whatsapp-clone

react-native with TypeScript - whatsApp clone with AWS amplify backend. Chats are real-time and almost resembles whatsApp but not entire feature of whatsApp.

## Work Flow

- Front-End (completed)
  - Chat List Screen - where all chat heads are listed with their last messages
  - Chat Message Screen - where individual chat room messages are listed.
    - messages Component - where all messages are listed - Here i have included media field which at the moment only hard coded for images however in real-life scenario media could be videoes, gifs etc. all. This needs more filter on media extension and with regards to the same, respective reac-native component comes in action. However, for now i am just focusing on hard coded `<Image>` component of react-native.
    - input compnent - consists of `<InputText>` component of react-native and icons set. bit of trick here such as when user starts typing message, icons for MICROPHONE changes to SEND icon and CAMERA icon disapears, like what happens in whatsApp.
  - Contact List - List of all contacts - also re-used in Status Tab
- Back-End (still waiting to resolve my credit card issue, so i can create account in aws amplify)
  - Authentication Module
  - real-time chat module
  - GraphQL implementation- which takes care of key feature of react state management (redux)

## Screens

![chat-list]('assets/images/screens/chat-list.png')
![chat-screen]('assets/images/screens/chat-screen.png')
![contact-list]('assets/images/screens/contact-list.png')
