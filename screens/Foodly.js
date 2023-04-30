import React from "react";
import{View,ImageBackground, StyleSheet, Button, Image} from 'react-native';
import {useNavigation} from'@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import GetStart from "./GetStart";
function Foodly(){
    
    const navigation = useNavigation();
    function pressHandler(){
    navigation.navigate(GetStart);
    
    }
return( 
<View style={styles.View1}>
<LinearGradient  style={styles.linearGradient1} colors={['#FFDE0A', '#FF0A38']}>
<ImageBackground source={require('../assets/image/screen11.jpg') } style={styles.View1}
 imageStyle={{opacity: 0.15}}>
<View  style={styles.view4}>
<Image  source={require('../assets/image/Group3283.jpg')}/>
<Button  style={styles.button4} title="start" color={'#FFBA12'} onPress={pressHandler}></Button>
</View>
</ImageBackground>
</LinearGradient>
</View>
     );
    }
 export default Foodly;
 const styles = StyleSheet.create({
 View1:{
  flex:1,},
    linearGradient1: {
      flex:1,}, 
  
    linearGradient4: {
      flex:1,
    },
    text2:
    {
      textAlign:'center',
      color:'white',
      fontSize: 55,
      alignContent:'center',
      fontWeight: 'bold',
    
    },
    button4:{
      padding:50,
        borderRadius:50,
        width: '100%' , },

        view4:{
            flex:1,
            alignContent:'center',
            justifyContent:'center',
            alignItems:'center',
        },
})