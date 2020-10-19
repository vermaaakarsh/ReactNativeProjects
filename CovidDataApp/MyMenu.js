import React, {Component} from 'react';
import {LogBox, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Covid19Data from './Covid19Data';
import CovidDis from './CovidDis';

LogBox.ignoreAllLogs(true)

const Stack = createStackNavigator();
export default function MyApp(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Covid19Data" styles={styles.container} component={Covid19Data}/>
                <Stack.Screen name="CovidDis" styles={styles.container} component={CovidDis}/>
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