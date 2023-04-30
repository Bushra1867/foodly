import React, { useState } from "react";
import { View, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import { Icon } from "@rneui/themed";
import {useNavigation} from'@react-navigation/native';
import notifications from './notifications'
function search() {

  const navigation = useNavigation();
  function pressHandler(){
      navigation.navigate(notifications);
  }

  const [text, setText] = useState('');
    return (
        <View>
       <View></View>        
  <View style={styles.card}>
    <View style={styles.outerContainer}>
     <TouchableOpacity activeOpacity={0.9} onPress={pressHandler}>
      <View>
     <Icon name ='search'
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
      
        placeholder=" Enter address"
        keyboardType='name-pad'></TextInput>
                 </View>
                 <View style={styles.close}>
     <TouchableOpacity activeOpacity={0.9} onPress={() => setText('')} >
     <Icon name ='close-circle-outline'
        type='ionicon'
        color='grey' />
         </TouchableOpacity>
        </View>
                 </View>
        </View>
    )
}
export default search;

const styles = StyleSheet.create({
   card:{
        justifyContent:'space-between',
      flexDirection:'row',
      borderWidth:1,
      borderColor:'#70707036',
      borderRadius:15,
      marginVertical: 80,
      marginHorizontal: 19,
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
  
});