import React, { useState } from "react";
import {View, StyleSheet,ImageBackground,Text,TextInput,TouchableOpacity} from 'react-native';
import { Icon } from "@rneui/themed";
import {useNavigation} from'@react-navigation/native';
import findLocation from "./findLocation";
import Mail from "./Mail";
function passWord (){
  const navigation = useNavigation();
  
  function backHandler(){
  navigation.navigate(Mail);}

  function pressHandler1(){
    navigation.navigate(findLocation);
}
  const [characters, onChangeCharacters]=useState('');
 
    return(

  
    <View style={styles.image}>
    <ImageBackground source={require('../assets/image/Group3287.jpg')}
    style={styles.image}>
    <View style={styles.back}>
    <TouchableOpacity activeOpacity={0.9} onPress={backHandler}>
    <Icon name="arrow-back"></Icon>
    </TouchableOpacity></View>
    <View style={styles.View4}>
    <View style={styles.textview}>
    <Text style={styles.text}> Create your account password </Text>
    </View>
    <View style={styles.card}>
    <View style={styles.inputstyle}>
         <TextInput
        style={styles.input}
        onChangeText={ onChangeCharacters}
        onBlurSubmit autoCapitalize='none'
        value={characters}
        maxLength={8}
        secureTextEntry={true}
        placeholder=" Minimum 8 characters"
        keyboardType='name-pad'  >
     </TextInput>
     </View>
     <View style={styles.outerContainer}>
     <TouchableOpacity activeOpacity={0.9} onPress={pressHandler1}>
      <View>
     <Icon name ='arrow-forward-outline'
        type='ionicon'
        color='#FFFFFF' />
        </View> 
    </TouchableOpacity>
       </View>
     </View>
     </View>
    </ImageBackground>
    </View>
   )

}
export default passWord;
const styles = StyleSheet.create({
    image:{
        flex:1,
        padding:2,
          },
          input: {
            opacity:2,
            color:'grey',
            height: 61,
            justifyContent:'flex-start',
            alignContent:'center',
            padding:1,
            left:8,
          },
          text:{
            color:'black',
            fontSize: 20,
            fontWeight: 'bold',
          },
          textview:{
            justifyContent: 'center',
            textAlign:'left',
            height:30,
            marginHorizontal:10,
            marginVertical:10
          },
          View4:{
            flexDirection:'column',
            justifyContent: 'center',
            alignContent:'center',
            marginVertical:370,
        },
        card:{
          flexDirection:'row',
          borderWidth:1,
          borderColor:'#70707036',
          borderRadius:15,
          marginVertical: 2,
          marginHorizontal: 18,
          height: 61,
          opacity:1,
          
              },
      inputstyle:{
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:8,
      },
      outerContainer: {
        backgroundColor: '#FF0A38',
        padding:15,
        marginVertical: 2,
        marginHorizontal:99,
        borderRadius: 12,
        justifyContent:'flex-end',
        height:54,
        left: 15
      
    },
    outerContainer1:{
      justifyContent:'center',
      alignItems:'center',
      left:80,
      
    },

    back:{
    
       padding:5,
       marginVertical: 2,
       marginHorizontal:9,
       justifyContent:'flex-end',
       height:50,
       right:160,
     
    },
    show:{
      padding:5,
      justifyContent:'center',
      alignItems:'center',
      


    }
})