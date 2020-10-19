import React, { Component, useEffect } from 'react';  
import { StyleSheet,View, Button, Alert,Text,ScrollView } from 'react-native';
import { openDatabase} from 'react-native-sqlite-storage';
   
    var db=openDatabase({name:'geuStudent.db'});
    const StudentDB=({navigation})=>
    {
        useEffect(()=>{
           db.transaction(function (t){
               t.executeSql("SELECT name FROM sqlite_master where type='table' and name='student'",[],
               function(tx,res){
                   if(res.rows.length==0)
                   {
                       t.executeSql('DROP TABLE IF EXISTS student ',[]);
                     t.executeSql('CREATE TABLE IF NOT EXISTS student (stuid integer PRIMARY KEY AUTOINCREMENT , stuname varchar(50) , stuage varchar(3) , stubranch varchar(50))',[]);
                     console.log('Message : ','TABLE CREATED');
                     console.log("Table",'CREATE TABLE IF NOT EXISTS student (stuid integer PRIMARY KEY AUTOINCREMENT , stuname varchar(50) , stuage varchar(3) , stubranch varchar(50))');
                    }
               },(error)=>{
                   console.log(error);
               });
           });     
        });
    
         return(
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.buttoncontainer}>
                    <View><Button color='grey' title="ADD RECORD" style={styles.buttonstyle}
                    onPress={()=>navigation.navigate('RegisterStudent')}></Button></View>
                </View>
                <View style={styles.buttoncontainer}>
                    <View><Button color='grey' title="Update Record" style={styles.buttonstyle}
                    onPress={()=>navigation.navigate('UpdateStudent')}></Button></View>
                </View>
                <View style={styles.buttoncontainer}>
                    <View><Button color='grey' title="VIEW RECORD" style={styles.buttonstyle}
                    onPress={()=>navigation.navigate('ViewAllStudent')}></Button></View>
                </View>
                <View style={styles.buttoncontainer}>
                    <View><Button color='grey' title="Search Record" style={styles.buttonstyle}
                    onPress={()=>navigation.navigate('SearchStudent')}></Button></View>
                </View>
                <View style={styles.buttoncontainer}>
                    <View><Button color='grey' title="Delete Record" style={styles.buttonstyle}
                    onPress={()=>navigation.navigate('DeleteStudent')}></Button></View>
                </View>
                 
            </View>
            </ScrollView>

        );
    }

const styles=StyleSheet.create(
    {
    container:{
        flex:1,
        margin:20,
        justifyContent:'center',
        color:'#000000'
    },
    buttoncontainer:{
        marginTop:'5%',
        marginBottom:'18%',
    },
    buttonstyle:{
        fontSize:30,
        fontStyle:'italic',
        borderRadius:40,
    }
    }
);
export default StudentDB