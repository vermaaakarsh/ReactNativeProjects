import React, { Component, useState } from 'react';  
import { StyleSheet,View, Button, Alert,TextInput } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'geuStudent.db' });
const UpdateStudent=({navigation})=>{ 
    let [stuid,setStuID]=useState('')
    let [stuname,setStuName]=useState('')
    let [stuage,setStuAge]=useState('')
    let [stubranch,setStuBranch]=useState('')
    let updateData=(name,branch,age)=>{
        setStuName(name);
        setStuAge(age);
        setStuBranch(branch);
    }
    let searchStudent=()=>{
        console.log(stuid);
        db.transaction((t)=>{
            t.executeSql('SELECT * FROM student where stuid = ?'
            ,[stuid],(t,results)=>{
                var len = results.rows.length;
                if(len>0)
                {
               let result=results.rows.item(0);
               updateData(result.stuname,result.stubranch,result.stuage)     
                }
                else{
                 alert("No Record Found");
                 updateData('','','');       
                }
            })
        })
    }
    let updateStudent=()=>{
        console.log(stuname, stuage,stubranch);

    if (!stuname) {
      alert('Please fill Name');
      return;
    }
    if (!stuage) {
      alert('Please fill Age');
      return;
    }
    if (!stubranch) {
      alert('Please fill Branch');
      return;
    }
    db.transaction((t)=>{
        t.executeSql('UPDATE student set stuname=?, stuage=?, stubranch=? where stuid=?'
        ,[stuname,stuage,stubranch,stuid],(t,results)=>{
            console.log('Results ',results.rowsAffected);
            if(results.rowsAffected>0)
            {
              Alert.alert("Success",'Student Record Updated Successfully',[
                  {
                      text:"Ok",
                      onPress:()=>navigation.navigate("StudentDB"),
                  },
              ]);  
            }
            else
            {
                alert("Updation Failed");   
            }
        })
    })
    }
        return(
            <View style={styles.container}>
            <View style={styles.buttoncontainer}><TextInput  placeholder="ENTER YOUR ID"
            value={stuid} keyboardType="numeric" 
            onChangeText={(stuid) => setStuID(stuid)}></TextInput></View>
            <View style={styles.buttoncontainer}>
            <Button color='#3ea9fa' title="SEARCH" onPress={searchStudent}></Button></View>
            <View style={styles.buttoncontainer}>
            <TextInput placeholder="ENTER YOUR NAME" value={stuname} editable={false}
             onChangeText={(stuname) => setStuName(stuname)}></TextInput></View>
            <View style={styles.buttoncontainer}><TextInput placeholder="ENTER YOUR BRANCH"
            value={stubranch} 
            onChangeText={(stubranch) => setStuBranch(stubranch)}></TextInput></View>
            <View style={styles.buttoncontainer}><TextInput  placeholder="ENTER YOUR AGE"
            value={stuage} keyboardType="numeric" 
            onChangeText={(stuage) => setStuAge(stuage)}></TextInput></View>
            <View style={styles.buttoncontainer}>
            <Button color='green' title="UPDATE" onPress={updateStudent}></Button></View>          
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
export default UpdateStudent;