import React, { Component } from 'react';  
import { StyleSheet,View, Button,Text, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CovidDis from './CovidDis';
export default class Covid19Data extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            isLoading:true ,
            dataSource:null,
        };
    }
    componentDidMount()
        {
            return fetch('https://api.covid19india.org/data.json')
            .then((response)=>response.json())
            .then((responseJson)=>{
                this.setState({
                    isLoading:false,
                    dataSource:responseJson.statewise
                })
            })
        }
    render(){
            if(this.state.isLoading==true)
            {
               return(
                   <View>
                       <ActivityIndicator/>
                   </View>
               ); 
            }
            else
            {
          let statewise=this.state.dataSource.map((val,key)=>{
            return(
                <View key={key}>
            <View style={styles.textContainer}>
            <View style={styles.buttonContainer}><Button color='#4f4a4a' title={val.state}/></View>   
            <Text style={styles.confirmStyle}>{val.confirmed}</Text>
            <Text style={styles.activeStyle}>{val.active}</Text>    
            <Text style={styles.deathStyle}>{val.deaths}</Text>
            <Text style={styles.recoverStyle}>{val.recovered}</Text>
            <Text style={styles.text}>{val.lastupdatedtime}</Text>  
                </View>
                </View>
            );
          });
        
        return(
            <ScrollView>
            <View >
            <View style={styles.ScreenButton}><Button color='#a13de3' title="State Wise"/></View>
            <View style={styles.ScreenButton}><Button color='#e33dbc' title="District Wise" onPress={()=>this.props.navigation.navigate(CovidDis)}/></View>
            </View>
                <ScrollView  horizontal>
            <View style={styles.container}>
            <View style={styles.textContainer}>
            <Text style={styles.textformat}>STATE</Text>   
            <Text style={styles.textformat}>CONFIRMED</Text>
            <Text style={styles.textformat}>ACTIVE</Text>    
            <Text style={styles.textformat}>DEATH</Text>
            <Text style={styles.textformat}>RECOVERED</Text>
            <Text style={styles.textformat}>LAST UPDATED</Text>
            </View> 
             {statewise}
             </View>
             </ScrollView>
             </ScrollView>
        );
    }
}
}
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            marginTop:'.5%',
            justifyContent:'center'
        },
        buttonContainer:{
            color:'#ebfafa',
            width:'13%',
            marginBottom:'.5%',
        },
        ScreenButton:{
            marginBottom:'1%'
        },
        textContainer:{
            backgroundColor:'#ebfafa',
            flexDirection:'row',
            justifyContent:'space-between',
        },
        confirmStyle:
        {
         fontSize:24,
         width:150,
         color:'blue'    
        },
        activeStyle:
        {
         fontSize:24,
         width:150,
         color:'#c9c012'    
        },
        deathStyle:
        {
         fontSize:24,
         width:150,
         color:'#bf0a1f'    
        },
        recoverStyle:
        {
         fontSize:24,
         width:150,
         color:'green'    
        },
        textformat:
        {
        width:180,
        fontSize:20,
        color:'#000',
        justifyContent:'center',
        fontStyle:'italic',    
        },
        text:
        {
        fontSize:20,
        width:180,
        color:'#000',
        justifyContent:'center',    
        }
    }
);