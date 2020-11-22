import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
    container:{
        width:50,
        height:50,
        borderRadius:25,
        padding:10,
        backgroundColor:Colors.light.tint,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:20,
        right:20
    }
});

export default styles;