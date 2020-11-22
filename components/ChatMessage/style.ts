import {StyleSheet,Dimensions} from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    messageBox:{
        borderRadius:5,
        padding:10
    },
    name:{
        fontWeight:'bold',
        color: Colors.light.tint,
        marginBottom:5
    },
    message:{
        width:'100%'
    },
    media:{
        width:'100%',
        height:Dimensions.get('screen').width -105,
        marginVertical:10
        
    },
    time:{
        alignSelf:'flex-end',
        fontSize:12,
        color:'gray'
    }
});

export default styles;