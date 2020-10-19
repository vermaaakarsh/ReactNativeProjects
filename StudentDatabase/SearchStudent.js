import React, { Component, useState } from 'react';  
import { StyleSheet,View, Button, Alert,TextInput ,Text} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'geuStudent.db' });
const SearchSrudent=({navigation})=>{ 
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
        return(
            <View style={styles.container}>
            <View style={styles.buttoncontainer}><TextInput  placeholder="ENTER YOUR ID" value={stuid} keyboardType="numeric" onChangeText={(stuid) => setStuID(stuid)}></TextInput></View>
            <View style={styles.buttoncontainer}>
            <Button color='#3ea9fa' title="SEARCH" onPress={searchStudent}></Button>
            </View>
            <View style={styles.outputStyle}>
                <Text style={styles.textStyle}>{stuname}</Text>
                <Text style={styles.textStyle}>{stubranch}</Text>
                <Text style={styles.textStyle}>{stuage}</Text>
            </View>          
            </View>
        );
    }

const styles=StyleSheet.create(
    {
    container:{
        flex:1,
        margin:20,
        marginBottom:10,
        justifyContent:'center'
    },
    buttoncontainer:{
    marginTop:10,
    marginBottom:10,
    color:'#000000'
    },
    outputStyle:{
        flex:.5,
        margin:'2%',
    },
    textStyle:{
        flex:1,
        fontSize:25,
        includeFontPadding:true,
    },
    buttonstyle:{
        fontSize:30,
        fontStyle:'italic',
    }
    }
);
export default SearchSrudent;