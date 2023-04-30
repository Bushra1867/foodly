import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetStart from './screens/GetStart';
import Foodly from './screens/Foodly';
import Enter from './screens/Enter';
import Mail from './screens/Mail';
import passWord from './screens/passWord';
import notifications from './screens/notifications';
import search from './screens/search';
import Home from './screens/Home';
import findLocation from './screens/findLocation';
import deliveryDetails from './screens/deliveryDetails';
import Profile from './screens/Profile';
import { StyleSheet} from 'react-native';
import { Icon } from "@rneui/themed";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const BottomTab =createBottomTabNavigator();
function App(){
return(
  <SafeAreaProvider>
  <NavigationContainer>
       <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
       <Stack.Screen name='Foodly' component={Foodly}  />
        <Stack.Screen name='GetStart' component={GetStart}  />
        <Stack.Screen name='Enter' component={Enter}  />
        <Stack.Screen name='Mail' component={Mail}  />
        <Stack.Screen name='passWord' component={passWord}  />
        <Stack.Screen name='notifications' component={notifications}  />
        <Stack.Screen name='Tab' component={Tab} />
        <Stack.Screen name='search' component={search}  />
       <Stack.Screen name='findLocation' component={findLocation}  />
       <Stack.Screen name='deliveryDetails' component={deliveryDetails}  />
        </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    
);}
function Tab(){ 
  return(
    <SafeAreaProvider>
  <BottomTab.Navigator>
        <BottomTab.Screen name='Home' 
        component={Home} options={{
          tabBarIcon: ({color,size}) => { return<Icon name='home'
          type='ionicon'
          color={color}
          size={size} />
          } }}/>
        <BottomTab.Screen name='search' component={search}
        options={{
          tabBarLabel: 'search',
          tabBarIcon: ({color,size}) => {
         return <Icon name='search'
          type='ionicon'
          color={color}
          size={size} />
          }  }}/>
        <BottomTab.Screen name='Profile' component={Profile}
        options={{
          tabBarLabel: 'profile',
          tabBarIcon: ({color,size}) => {
         return <Icon name='person'
          type='ionicon'
          color={color}
          size={size} />
          }  }}/>
   </BottomTab.Navigator>
   </SafeAreaProvider>
    )
  } 

export default App;
const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
});




