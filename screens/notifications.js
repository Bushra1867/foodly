import React from "react";
import {useNavigation} from'@react-navigation/native';
import { View,Text,Image, StyleSheet, Pressable} from 'react-native';
import { Icon } from "@rneui/themed";
import deliveryDetails from "./deliveryDetails";
import search from "./search";
function notifications() {
 const navigation = useNavigation();
  function pressHandler(){
  navigation.navigate(search);
  }

  function pressHandler1(){
    navigation.navigate(deliveryDetails);
    }
    return(
<View style={styles.screen}>
    <View style={styles.image}>
 <Image source={require('../assets/image/Group3278.jpg')} >
 </Image>
 </View>
             <View style= {styles.Container1}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Always know the status</Text>
                    </View>
                   <Text style={styles.title2}>push notifications are used to provide</Text>
                    <Text style={styles.title2}>updates on your orde.</Text>
                </View>
                <View style= {styles.Container}>
                <View style={styles.outerContainer}>
                    <Pressable onPress={pressHandler1}>
                        <View style={styles.btt} >
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.bttTitle}>Enable push notifications</Text>
                            </View>
                            <View>
                            <Icon  name="chevron-forward-outline"
                                   type='ionicon'
                                      color='#FFFFFF' /> 
                                       </View>
                                        </View>
                               </Pressable>
                                </View>

                        <View style={styles.outerContainer2}>
                    <Pressable onPress={pressHandler}>
                        <View style={styles.btt} >
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.bttTitle2}>Skip for now</Text>
                            </View>
                  </View>
                               </Pressable>
                                </View>
                                </View>

 </View>
    );
}
export default notifications;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    
        },
      
     Container:{
     flexDirection:'column' , 
     marginVertical:20,
     } , 
     Container1:{
        flexDirection:'column' , 
        marginVertical:10,
        justifyContent:'center'
        } , 
        titleContainer:{
            marginVertical:5,
            height:75,
        },
           
    title: {
        fontSize:28,
        color: 'black',
        fontWeight:'bold',
        justifyContent: 'center',
        marginVertical:5,

    },
  
    title2: {
        fontSize:18,
        justifyContent: 'center',
        color:'grey',

    },
image:{
justifyContent:'center',
alignItems:'center',
marginVertical:60
    },

    outerContainer: {
        backgroundColor: '#FF0A38',
        padding: 16,
        marginHorizontal: 20,
        borderRadius: 16,
        marginVertical:10,
        
    },
    outerContainer2: {
        backgroundColor: '#E8E8E8',
        padding: 16,
        borderRadius: 16,
        marginHorizontal: 20,
    },
    bttTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        
    },
    bttTitle2: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        fontWeight:'bold',
        
    },
    btt: {
        flexDirection: 'row',
        justifyContent: 'space-between',     
    }
});