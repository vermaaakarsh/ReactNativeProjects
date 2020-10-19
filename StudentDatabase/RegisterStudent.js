import React, {useState } from 'react';  
import { StyleSheet,View, Button, Alert,Text,TextInput } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'geuStudent.db' });
const RegisterStudent = ({ navigation }) => {
  let [stuname, setStuName] = useState('');
  let [stuage, setStuAge] = useState('');
  let [stubranch, setStuBranch] = useState('');

  let register_student = () => {
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

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO student (stuname, stuage , stubranch) VALUES (?,?,?)',
        [stuname, stuage, stubranch],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('StudentDB'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        }
      );
    });
  };

  return (
            <View style={styles.container}>
            <View style={styles.buttoncontainer}>
            <TextInput placeholder="ENTER NAME" value={stuname} 
             onChangeText={(stuname) => setStuName(stuname)}></TextInput></View>
            <View style={styles.buttoncontainer}><TextInput placeholder="ENTER BRANCH"
            value={stubranch} 
            onChangeText={(stubranch) => setStuBranch(stubranch)}></TextInput></View>
            <View style={styles.buttoncontainer}><TextInput  placeholder="ENTER AGE"
            value={stuage} keyboardType="numeric" 
            onChangeText={(stuage) => setStuAge(stuage)}></TextInput></View>
            <View style={styles.buttoncontainer}>
            <Button color='green' title="REGISTER" onPress={register_student}></Button></View>          
          </View>);
};

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
export default RegisterStudent