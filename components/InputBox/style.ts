import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
        alignItems:'center'
    },
    mainContainer:{
        flexDirection:'row',
        padding:10,
        backgroundColor:Colors.light.background,
        borderRadius:50,
        flex:1,
        marginRight:10,
        alignItems:'center'
    },
    textInput:{
        flex:1,
        padding:5
    },
    buttonContainer:{
        backgroundColor:Colors.light.tint,
        borderRadius:25,
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    icons:{
        marginHorizontal:5,
    }
});

export default styles;