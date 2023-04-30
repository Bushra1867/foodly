import React  from "react";
import { View, StyleSheet, Text} from "react-native";
function InformationItem ({id}){
    
    return(
    <View>
    <Text style={styles.title}> {id} </Text>
    </View>
    )

}
export default InformationItem;
const styles = StyleSheet.create({
title:{
    textAlign: 'center',
    fontSize:16,
    fontWeight: 'bold',
    padding: 5,
    marginTop: 1,
    color:'black',
},

})