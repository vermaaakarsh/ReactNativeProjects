import React, {Component} from 'react';
import {LogBox, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StudentDB from './StudentDB';
import RegisterStudent from './RegisterStudent';
import ViewAllStudent from './ViewAllStudents';
import UpdateStudent from './UpdateStudent';
import DeleteStudent from './DeleteStudent';
import SearchStudent from './SearchStudent';

LogBox.ignoreAllLogs(true)

const Stack = createStackNavigator();
export default function MyApp(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="StudentDB" styles={styles.container} component={StudentDB}/>
                <Stack.Screen name="RegisterStudent" styles={styles.container} component={RegisterStudent}/>
                <Stack.Screen name="UpdateStudent" styles={styles.container} component={UpdateStudent}/>
                <Stack.Screen name="ViewAllStudent" styles={styles.container} component={ViewAllStudent}/>
                <Stack.Screen name="SearchStudent" styles={styles.container} component={SearchStudent}/>
                <Stack.Screen name="DeleteStudent" styles={styles.container} component={DeleteStudent}/>
                
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