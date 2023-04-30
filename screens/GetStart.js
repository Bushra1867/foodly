import React from "react";
import {useNavigation} from'@react-navigation/native';
import { View, Text, ImageBackground, StyleSheet, Pressable,Button} from 'react-native';
import { Icon } from "@rneui/themed";
import Enter from "./Enter";
function GetStart() {
   
  const navigation = useNavigation();
  function pressHandler(){
  navigation.navigate(Enter);
  }
    return(
           <View style={styles.screen}>
            <ImageBackground source={require('../assets/image/screen2.jpg')}  style={styles.screen}
             resizeMode={'stretch'}>
                
                       <View style={{alignItems: 'flex-end', margin: 10  }} >
                         <Pressable android_ripple={{color: 'white'}}  color={'#FFBA12'}>
                            <View
                             style={{backgroundColor: '#707070',
                              borderRadius: 18, elevation: 4, paddingLeft: 30, 
                              paddingRight: 30, paddingTop: 10,
                            paddingBottom: 10, borderColor: 'black', opacity: 0.1
                         }}>
                            <Text style={{fontSize: 14, color: 'black'}}>Skip</Text>
                            </View>
                         </Pressable>
                       </View>
                
                <View style= {styles.titleContainer}>
                    <Text style={styles.title}>Get Started</Text>
                </View>
                <View style={styles.outerContainer}>
                    <Pressable onPress={pressHandler}>
                        <View style={styles.btt} >
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.bttTitle}>Get Started</Text>
                            </View>
                            <View>
                            <Icon  name="chevron-forward-outline"
                                   type='ionicon'
                                      color='#FFFFFF' /> 
                                       </View>
                                        </View>
                               </Pressable>
                                </View>

                                
                  
            </ImageBackground>

           </View>

    );
}
export default GetStart;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
       
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 39,
        color: 'black'

    },
    outerContainer: {
        backgroundColor: '#FF0A38',
        padding: 16,
        marginVertical: 30,
        marginHorizontal: 20,
        borderRadius: 16,
    },
    bttTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        
    },
    btt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        
    }


});