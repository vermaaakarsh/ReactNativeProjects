import React, { Component, useState} from 'react';  
import { StyleSheet,View, Button, Alert,TextInput } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'geuStudent.db' });
const DeleteStudent=({navigation})=>
{
 let [stuid,setStuID]=useState('');
 let delStudent=()=>{
    db.transaction((t)=>{
        t.executeSql('DELETE FROM student where stuid=?',[stuid],
        (t,results)=>{
            if(results.rowsAffected>0)
            {
            Alert.alert('Success','Student Deleted Succefffully',
            [
             {
               text:'Ok',
               onPress:()=>navigation.navigate("StudentDB"),  
             },   
            ],{cancelable:false})    
            }
            else{
              alert('Enter Valid User ID');  
            }
        });
    });
 }
    
        return(
            <View style={styles.container}>
            <View style={styles.buttoncontainer}><TextInput  placeholder="ENTER YOUR ID"
            value={stuid} keyboardType="numeric" 
            onChangeText={(stuid) => setStuID(stuid)}></TextInput></View>
            <View style={styles.buttoncontainer}>
            <Button color='darkred' title="DELETE" onPress={delStudent}></Button></View>
            </View>
        );
    
}
const styles=StyleSheet.create(
    {
    container:{
        flex:1,
        margin:20,
        justifyContent:'center'
    },
    buttoncontainer:{
    marginTop:10,
    
    color:'#000000'
    },
    buttonstyle:{
        fontSize:30,
        fontStyle:'italic',
        
    }
    }
);
export default DeleteStudent;