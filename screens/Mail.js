import React , {useState} from "react";
import {View, StyleSheet,ImageBackground,Text,TextInput,TouchableOpacity, BackHandler} from 'react-native';
import { Icon } from "@rneui/themed";
import {useNavigation} from'@react-navigation/native';
import passWord from "./passWord";
import Enter from "./Enter";
import { SafeAreaProvider } from "react-native-safe-area-context";
function Mail (){
  const navigation = useNavigation();
  function pressHandler(){
  navigation.navigate(passWord);
}

function BackHandler (){
    navigation.navigate(Enter);
  }

const [text, setText] = useState('');

    return(
  <SafeAreaProvider>
    <View style={styles.image}>
    <ImageBackground source={require('../assets/image/Group3286.jpg')}
    style={styles.image}>
    <View style={styles.back}>
   <TouchableOpacity activeOpacity={0.9} onPress={BackHandler}>
    <Icon name="arrow-back"></Icon>
    </TouchableOpacity></View>
    <View style={styles.View4}>
    <View style={styles.textview}>
    <Text style={styles.text}> What' your email address </Text>
    </View>
    <View style={styles.card}>
    <View style={styles.inputstyle}>
         <TextInput
        style={styles.input}
        onChangeText={(newValue)=> setText(newValue)}
        onBlurSubmit autoCapitalize='none'
        value={text}
        maxLength={20}
        placeholder=" youremailaddres.com"
        keyboardType='name-pad'  >
     </TextInput>
     </View>
     <View style={styles.outerContainer1}>
     <TouchableOpacity activeOpacity={0.9} onPress={() => setText('')}>
     <Icon name ='close-circle-outline'
        type='ionicon'
        color='#70707036' />
         </TouchableOpacity>
        </View>
     <View style={styles.outerContainer}>
     <TouchableOpacity activeOpacity={0.9} onPress={pressHandler}>
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
    </SafeAreaProvider>
   )

}
export default Mail;
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
            padding:5,
            left:1,
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
            marginHorizontal:7
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
        height:53,
        left:20,
      
    },
    outerContainer1:{
      justifyContent:'center',
      alignItems:'center',
      left:95,
      
    },

    back:{
    
       padding:5,
       marginVertical: 2,
       marginHorizontal:9,
       justifyContent:'flex-end',
       height:50,
       right:160,
     
    }
})