import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },
    leftContainer:{
      flexDirection:'row'  
    },
    midContainer:{
        justifyContent:'space-around',
    },
    username:{
        fontWeight:'bold'
    },
    status:{
        color:'gray',
        fontSize:12
    },
    
    avatar:{
        width:50,
        height:50,
        borderRadius:25,
        marginRight:15
    }
});

export default styles;