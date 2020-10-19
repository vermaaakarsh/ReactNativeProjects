import React, { Component } from 'react';  
import { StyleSheet,View, Button,Text, ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class CovidDis extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            isLoading:true ,
            dataSource:null,
        };
    }
    isInLine(district){
        if(district=="North and Middle Andaman")
            return "N. & M. Andaman";
        else if(district=="South Salmara Mankachar")
            return "South S. Mankachar";
        else if(district=="Dakshin Bastar Dantewada")
            return "D. Bastar Dantewada";
        else if(district=="Gaurela Pendra Marwahi")
            return "G. Pendra Marwahi";
        else if(district=="Dadra and Nagar Haveli")
            return "Dadra & Nagar Haveli";
        else if(district=="Shahid Bhagat Singh Nagar")
            return "S. Bhagat Singh Nagar";
        else if(district=="Bhadradri Kothagudem")
            return "Bhad. Kothagudem";
        else if(district=="Jayashankar Bhupalapally")
            return "Jaya. Bhupalapally";
        else if(district=="Gautam Buddha Nagar")
            return "G. Buddha Nagar";
        else
            return district;
    }
    componentDidMount()
        {
            return fetch('https://api.covid19india.org/v2/state_district_wise.json')
            .then((response)=>response.json())
            .then((responseJson)=>{
                this.setState({
                    isLoading:false,
                    dataSource:responseJson
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
          let State=this.state.dataSource.map((val,key)=>{
            return(
                <View key={key}>
            <View style={styles.textContainer}>
            <View style={styles.buttonContainer}><Button color='#4f4a4a' title={val.state}/></View>

            <Text style={styles.text}>{val.districtData.map((v,k)=>{
                return(
                    <View k={k}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{this.isInLine(v.district)}</Text>
                </View>

                    </View>
                );
            }) }</Text>

            <Text style={styles.text}>{val.districtData.map((v,k)=>{
                return(
                    <View k={k}>
                <View style={styles.textContainer}>
                    <Text style={styles.confirmStyle}>{v.confirmed}</Text>
                </View>

                    </View>
                );
            }) }</Text>
            <Text style={styles.text}>{val.districtData.map((v,k)=>{
                return(
                    <View k={k}>
                <View style={styles.textContainer}>
                    <Text style={styles.activeStyle}>{v.active}</Text>
                </View>

                    </View>
                );
            }) }</Text>

            <Text style={styles.text}>{val.districtData.map((v,k)=>{
                return(
                    <View k={k}>
                <View style={styles.textContainer}>
                    <Text style={styles.deathStyle}>{v.deceased}</Text>
                </View>

                    </View>
                );
            }) }</Text>

            <Text style={styles.text}>{val.districtData.map((v,k)=>{
                return(
                    <View k={k}>
                <View style={styles.textContainer}>
                    <Text style={styles.recoverStyle}>{v.recovered}</Text>
                </View>

                    </View>
                );
            }) }</Text>
                </View>
                </View>
            );
          }
        );
        
        return(
            <ScrollView >
                <ScrollView  horizontal>
            <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textformat}>STATE</Text>
                <Text style={styles.textformat}>DISTRICT</Text>   
                <Text style={styles.textformat}>CONFIRMED</Text>
                <Text style={styles.textformat}>ACTIVE</Text>    
                <Text style={styles.textformat}>DEATH</Text>
                <Text style={styles.textformat}>RECOVERED</Text>
            </View>
             {State}
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
        textContainer:{
            backgroundColor:'#ebfafa',
            flexDirection:'row',
            justifyContent:'space-between',
        },
        confirmStyle:
        {
         fontSize:22,
         width:150,
         color:'blue'    
        },
        activeStyle:
        {
         fontSize:22,
         width:150,
         color:'#c9c012'    
        },
        deathStyle:
        {
         fontSize:22,
         width:150,
         color:'#bf0a1f'    
        },
        recoverStyle:
        {
         fontSize:22,
         width:150,
         color:'green'    
        },
        textformat:
        {
        width:160,
        fontSize:22,
        color:'#000',
        justifyContent:'center',
        fontStyle:'italic',    
        },
        text:
        {
        fontSize:22,
        width:220,
        color:'#000',
        justifyContent:'center',    
        }
    }
);