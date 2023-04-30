import React,{ useState } from "react";
import { View, StyleSheet,ImageBackground,Text,TextInput,Pressable,Image, ScrollView } from "react-native";
import { Icon } from "@rneui/themed";
import {useNavigation} from'@react-navigation/native';
import Mail from "./Mail";
import InformationItem from "../componant/InformationItem";
import {INFORMATIONS} from "../data/countries.data";
import { TouchableOpacity } from "react-native";
function Enter () {
   
  const [visible, isVisible]= useState(false);
  const [value, onChangeText]= useState('');
  const [selected,isSelected]= useState('+1');
  const [selectedFlag,isselectedFlag]= useState(require('../assets/image/download1.jpg'));
 function listHandler (){
    isVisible (true);
  }
function selectedIdHandler(element){
    return (
      isSelected(element.id),
      isVisible(false),
      isselectedFlag(element.imageUrl),
      console.log(selectedFlag));
 }
function RenderItemFtnc (element){
    return <TouchableOpacity  onPress= {selectedIdHandler.bind(this,element)} >
    <InformationItem id = {element.id}/>
    </TouchableOpacity>
    }
 const navigation = useNavigation();
  function pressHandler(){
  navigation.navigate(Mail);
  }
  return(
    <View style={styles.image}>
    <ImageBackground source={require('../assets/image/Group3279.jpg')}
    style={styles.image}>
    <View style={styles.View4}>
    <View style={styles.textview}>
    <Text style={styles.text}> Enter your mobile number </Text>
    </View>
    <View style={styles.card}>
      <View>
 <Image source={selectedFlag} style={styles.flag} />
      </View>
      <View style={styles.buttonDropDwon} >
 <Icon  name="caret-down-outline"
        type='ionicon'
        style={{ transform:[{rotate: visible ? '180deg' : '0deg'}]
      }}
        onPress={listHandler} 
        /> 
  </View>
    <View style={styles.number}>
    <Text> {selected} </Text>
    </View>
    <View style={styles.inputstyle}>
    <TextInput style={styles.input}
      value={value}
      onChangeText={onChangeText}
      maxLength={12}
      keyboardType= "numeric"
      placeholder="(201) 111-0000"
      placeholderTextColor="grey"/>
     </View>
     <View style={styles.outerContainer}>
     <Pressable android_ripple={{color:'#FF0A38'}} style= {({pressed}) =>[styles.image, pressed ? styles.imagePressed:null]}
     onPress={pressHandler}>
      <View style={styles.buttonOpen}>
     <Icon name ='arrow-forward-outline'
  
  
        type='ionicon'
        color='#FFFFFF' />
        </View> 
    </Pressable>
       </View>
     </View>
     {visible&&
     <View style={styles.idContainer}>
    <View  style={styles.button}>
    <ScrollView>
      {
        INFORMATIONS.map((element)=> {return RenderItemFtnc (element)})
      }
      
    </ScrollView>
    </View>
     </View>}
     </View>
     </ImageBackground>
    </View>
    )

}
export default Enter;
const styles = StyleSheet.create({
    image:{
        flex:1,
        padding:2,
          },
   button: {
    alignItems:'center',
    alignItems:'center',
    backgroundColor:"white",
    border:12,
  },
  idContainer:{
       backgroundColor:'white',
       width:60,
       left:89,
       height:100,
       borderColor:'black',
       baddingVertical:100,
       padding:1,
},
  input: {
            opacity:2,
            right:10,
            color:'grey',
            height: 61,
            justifyContent: 'center',
            alignContent:'center',
            padding:20,
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
          },

          View4:{
            flexDirection:'column',
            justifyContent: 'center',
            alignContent:'center',
            marginVertical:370,
        },

        button: {
          flexDirection:'row',
          borderWidth:1,
          borderColor:'grey',
          borderRadius:4,
        },

        card:{
          justifyContent:'center',
          flexDirection:'row',
          borderWidth:1,
          borderColor:'#70707036',
          borderRadius:12,
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
        borderRadius: 12,
        justifyContent:'flex-end',
        height:53,
        left:29,
        marginVertical:2,
       },

    number:{
      alignItems:'center',
      justifyContent:'center',
      left: 15, },

 flag:{
alignContent:'center',
justifyContent:'flex-start',
width:40,
height: 40,
marginHorizontal:1,
marginVertical:8,
borderRadius:20,

    },
 buttonOpen:{
    left:2,
    alignItems:'center',
    justifyContent:'center',
      },

      buttonDropDwon:{
        left:10,
        alignItems:'center',
        justifyContent:'center',
      }

})