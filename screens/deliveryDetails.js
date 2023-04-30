import React, { useState } from "react";
import { View, StyleSheet,TouchableOpacity, TextInput, Text} from 'react-native';
import { Icon } from "@rneui/themed";
import {useNavigation} from'@react-navigation/native';
import notifications from './notifications'
function deliveryDetails() {

  const navigation = useNavigation();
  function pressHandler(){
      navigation.navigate(notifications);
  }

  const [text, setText] = useState('');
    return (
        <View>
       <View style={styles.textContainer}>
        <Text  style={styles.text}>Delivery details</Text>
        </View>        
  <View style={styles.card}>
    <View style={styles.outerContainer}>
     <TouchableOpacity activeOpacity={0.9} onPress={pressHandler}>
      <View>
     <Icon name ='location'
        type='ionicon'
        color='grey' />
        </View> 
    </TouchableOpacity>
       </View>
    <View style={styles.inputstyle}>
    <TextInput onChangeText={(newValue)=> setText(newValue)}
        onBlurSubmit autoCapitalize='none'
        value={text}
        maxLength={30}
      
        placeholder=" Enter a new address"
        keyboardType='name-pad'></TextInput>
                 </View>
         </View>
         <Text  style={styles.text} >When</Text>
        </View>
    )
}
export default deliveryDetails;

const styles = StyleSheet.create({
   card:{
      flexDirection:'row',
      borderWidth:1,
      borderColor:'#70707036',
      borderRadius:15,
      marginHorizontal:9,
      height: 61,
      opacity:1,
      
          },
  inputstyle:{
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:8,
    right:180
  },

  close:{
    paddingHorizontal:5,
    marginVertical:18,
    right:60
  },
  outerContainer: {
     padding:15,
    marginVertical:4,
    marginHorizontal:99,
    borderRadius: 12,
    justifyContent:'flex-start',
    height:80,
    right:90,
  
},

text:{
   
    fontSize:20,
    fontWeight:'bold',
   
},
textContainer:{
    alignItems:'center',
    textAlign:'center',
    marginVertical:65,
}
  
});