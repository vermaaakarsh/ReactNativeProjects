import React, { Component, useEffect, useState } from 'react';  
import { View,Text,SafeAreaView,FlatList } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'geuStudent.db' });
const ViewAllStudent=()=>{

let [flatListItem,setFlatListItems]=useState([]);
useEffect(()=>{
    db.transaction((t)=>{
        t.executeSql('SELECT * FROM student ORDER BY stuname ASC ',[],(t,results)=>{
            var record=[];
            for(let i=0;i<results.rows.length;++i)
            record.push(results.rows.item(i));
            setFlatListItems(record);
        });
    });
},[]);    
let listItemSep=()=>{
   return(<View style={{height:0.2,width:'100%',backgroundColor:'#d7e2f5'}}>

   </View>) 
}
let listItemView=(item)=>{
    return(
        <View key={item.stuid}
         style={{backgroundColor:'#d1dcf0',padding:16}}>
        <Text style={{fontSize:20}}>STUDENT ID :- {item.stuid}</Text>
        <Text style={{fontSize:18}}>Name       : {item.stuname}</Text>
        <Text style={{fontSize:18}}>Branch     : {item.stubranch}</Text>
        <Text style={{fontSize:18}}>Age          : {item.stuage}</Text>     
        </View>
    )
}
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'#d7e2f5'}}>
            <View style={{flex:1}}>
            <FlatList data={flatListItem}
            ItemSeparatorComponent={listItemSep} 
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=>listItemView(item)}>
            </FlatList>
            </View>
            </View>
        </SafeAreaView>
    );
}



export default ViewAllStudent;