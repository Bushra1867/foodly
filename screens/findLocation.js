import React, { useState } from "react";
import {useNavigation} from'@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { Icon } from "@rneui/themed";
import search from "./search";


function findLocation() {

    const navigation = useNavigation();
    function pressHandler(){
        navigation.navigate(search);
    }

    const [characters, onChangeCharacters]=useState('');

    return(
<View style={styles.screen}>
<View style={styles.View4}>
    <View>
  <Text style={styles.title}>Find food near you</Text>
  </View>

  <Text style={styles.title1}>We need to know your address in </Text>
  <Text style={styles.title1}> order to find delicioud</Text>
  <View style={styles.contCard}>
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
       <View  style={styles.inputstyle}>
    <TextInput onChangeText={ onChangeCharacters}
        onBlurSubmit autoCapitalize='none'
        value={characters}
        maxLength={30}
        secureTextEntry={true}
        placeholder=" Enter address"
        keyboardType='name-pad'
        style={styles.input}></TextInput>
                 </View>
                 </View>
                 </View>
                 </View>
                 </View>
               
    );
}
export default findLocation;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    
        },
  
    title: {
        fontSize:28,
        color: 'black',
        fontWeight:'bold',
        justifyContent: 'center',
        marginVertical:5,
        marginHorizontal:12,

    },
    title1: {
        fontSize:18,
        color: '#000000',
        justifyContent: 'center',
        marginVertical:5,
        marginHorizontal:12,
        textAlign:'left'
    },
    contCard:{
        marginVertical:30,
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
     marginVertical:16,
},

 input:{
     marginHorizontal:1,
     alignItems:'center',
     right:180
   

  },

  outerContainer: {
    padding:15,
    marginVertical:4,
    marginHorizontal:90,
    justifyContent:'flex-start',
    height:100,
    right:90,
  
},
View4:{
    flexDirection:'column',
    justifyContent: 'center',
    alignContent:'center',
    marginVertical:90,
},
  
});