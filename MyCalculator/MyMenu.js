import React, {Component} from 'react';
import {LogBox, StyleSheet} from 'react-native';
import Standard from './Standard';
import Scientific from './Scientific';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

LogBox.ignoreAllLogs(true)

const Stack = createStackNavigator();
export default function MyApp(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Standard" styles={styles.container} component={Standard}/>
                <Stack.Screen name="Scientific" styles={styles.container} component={Scientific}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e6f3f5',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });