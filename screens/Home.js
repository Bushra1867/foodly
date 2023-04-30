import React from "react";
import { View, Text, StyleSheet} from 'react-native'
function Home() {
    return (
        <View  style={styles.Screen}>
<Text style={styles.Text}> Home </Text>
        </View>
    )
}
export default Home;
const styles = StyleSheet.create({
    Screen: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',},
      Text:{
      fontWeight:'blod',
    },
  });
