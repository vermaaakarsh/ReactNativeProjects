import { Picker } from '@react-native-community/picker';
import React,{Component} from 'react';
import {View,StyleSheet,Button,Text,color} from 'react-native';

export default class Standard extends Component {
    constructor(props){
        super(props)
        this.state={n1:parseFloat(0),n2:parseFloat(0),result:parseFloat(0),operation:' ',deci1:false,deci2:false,c1:parseInt(1),c2:parseInt(1)}
    }
    addition=()=>{
        this.setState({operation:'+'})
    }
    subtraction=()=>{
        this.setState({operation:'-'})
    }
    multiplication=()=>{
        this.setState({operation:'*'})
    }
    division=()=>{
        this.setState({operation:'/'})
    }
    zero=()=>{
        if(this.state.operation==' ')
        {
            if(this.state.deci1)
            {
                this.setState({n1:parseFloat(this.state.n1+(0/(this.state.c1*10)))})
                this.setState({c1:parseInt(this.state.c1+10)});
            }
            else
                this.setState({n1:parseFloat(this.state.n1*10+0)})
        }
        else
        {
            if(this.state.deci2)
            {
                this.setState({n2:parseFloat(this.state.n2+(0/(this.state.c2*10)))})
                this.setState({c2:parseInt(this.state.c2+10)});
            }
            else
                this.setState({n2:parseFloat(this.state.n2*10+0)});
        }
    }
    one=()=>{
        if(this.state.operation==' ')
        {
            if(this.state.deci1)
            {
                this.setState({n1:parseFloat(this.state.n1+(1/(this.state.c1*10)))})
                this.setState({c1:parseInt(this.state.c1+10)});
            }
            else
                this.setState({n1:parseFloat(this.state.n1*10+1)})
        }
        else
        {
            if(this.state.deci2)
            {
                this.setState({n2:parseFloat(this.state.n2+(1/(this.state.c2*10)))})
                this.setState({c2:parseInt(this.state.c2+10)});
            }
            else
                this.setState({n2:parseFloat(this.state.n2*10+1)});
        }
    }
    two=()=>{
        if(this.state.operation==' ')
        {
            if(this.state.deci1)
            {
                this.setState({n1:parseFloat(this.state.n1+(2/(this.state.c1*10)))})
                this.setState({c1:parseInt(this.state.c1+10)});
            }
            else
                this.setState({n1:parseFloat(this.state.n1*10+2)})
        }
        else
        {   
            if(this.state.deci2)
            {
                this.setState({n2:parseFloat(this.state.n2+(2/(this.state.c2*10)))})
                this.setState({c2:parseInt(this.state.c2+10)});
            }
            else
                this.setState({n2:parseFloat(this.state.n2*10+2)});
        }
    }
    three=()=>{
        if(this.state.operation==' ')
        {
            if(this.state.deci1)
            {
                this.setState({n1:parseFloat(this.state.n1+(3/(this.state.c1*10)))})
                this.setState({c1:parseInt(this.state.c1+10)});
            }
            else
                this.setState({n1:parseFloat(this.state.n1*10+3)})
        }
        else
        {
            if(this.state.deci2)
            {
                this.setState({n2:parseFloat(this.state.n2+(3/(this.state.c2*10)))})
                this.setState({c2:parseInt(this.state.c2+10)});
            }
            else
                this.setState({n2:parseFloat(this.state.n2*10+3)});
        }
    }
    four=()=>{
        if(this.state.operation==' ')
        {
            if(this.state.deci1)
            {
                this.setState({n1:parseFloat(this.state.n1+(4/(this.state.c1*10)))})
                this.setState({c1:parseInt(this.state.c1+10)});
            }
            else
                this.setState({n1:parseFloat(this.state.n1*10+4)})
        }
        else
        {
            if(this.state.deci2)
            {
                this.setState({n2:parseFloat(this.state.n2+(4/(this.state.c2*10)))})
                this.setState({c2:parseInt(this.state.c2+10)});
            }
            else
                this.setState({n2:parseFloat(this.state.n2*10+4)});
        }
    }
    five=()=>{
        if(this.state.operation==' ')
        {
            if(this.state.deci1)
            {
                this.setState({n1:parseFloat(this.state.n1+(5/(this.state.c1*10)))})
                this.setState({c1:parseInt(this.state.c1+10)});
            }
            else
                this.setState({n1:parseFloat(this.state.n1*10+5)})
        }
        else
        {
            if(this.state.deci2)
            {
                this.setState({n2:parseFloat(this.state.n2+(5/(this.state.c2*10)))})
                this.setState({c2:parseInt(this.state.c2+10)});
            }
            else
                this.setState({n2:parseFloat(this.state.n2*10+5)});
        }
    }
    six=()=>{
        if(this.state.operation==' ')
        {
            if(this.state.deci1)
            {
                this.setState({n1:parseFloat(this.state.n1+(6/(this.state.c1*10)))})
                this.setState({c1:parseInt(this.state.c1+10)});
            }
            else
                this.setState({n1:parseFloat(this.state.n1*10+6)})
        }
        else
        {
            if(this.state.deci2)
            {
                this.setState({n2:parseFloat(this.state.n2+(6/(this.state.c2*10)))})
                this.setState({c2:parseInt(this.state.c2+10)});
            }
            else
                this.setState({n2:parseFloat(this.state.n2*10+6)});
        }
    }
    seven=()=>{
        if(this.state.operation==' ')
        {
            if(this.state.deci1)
            {
                this.setState({n1:parseFloat(this.state.n1+(7/(this.state.c1*10)))})
                this.setState({c1:parseInt(this.state.c1+10)});
            }
            else
                this.setState({n1:parseFloat(this.state.n1*10+7)})
        }
        else
        {
            if(this.state.deci2)
            {
                this.setState({n2:parseFloat(this.state.n2+(7/(this.state.c2*10)))})
                this.setState({c2:parseInt(this.state.c2+10)});
            }
            else
                this.setState({n2:parseFloat(this.state.n2*10+7)});
        }
    }
    eight=()=>{
        if(this.state.operation==' ')
        {
            if(this.state.deci1)
            {
                this.setState({n1:parseFloat(this.state.n1+(8/(this.state.c1*10)))})
                this.setState({c1:parseInt(this.state.c1+10)});
            }
            else
                this.setState({n1:parseFloat(this.state.n1*10+8)})
        }
        else
        {
            if(this.state.deci2)
            {
                this.setState({n2:parseFloat(this.state.n2+(8/(this.state.c2*10)))})
                this.setState({c2:parseInt(this.state.c2+10)});
            }
            else
                this.setState({n2:parseFloat(this.state.n2*10+8)});
        }
    }
    nine=()=>{
        if(this.state.operation==' ')
        {
            if(this.state.deci1)
            {
                this.setState({n1:parseFloat(this.state.n1+(9/(this.state.c1*10)))})
                this.setState({c1:parseInt(this.state.c1+10)});
            }
            else
                this.setState({n1:parseFloat(this.state.n1*10+9)})
        }
        else
        {
            if(this.state.deci2)
            {
                this.setState({n2:parseFloat(this.state.n2+(9/(this.state.c2*10)))})
                this.setState({c2:parseInt(this.state.c2+10)});
            }
            else
                this.setState({n2:parseFloat(this.state.n2*10+9)});
        }
    }
    decimal=()=>{
        if(this.state.operation==' ')
            this.setState({deci1:true})
        else
            this.setState({deci2:true});
    }
    signChange=()=>{
        if(this.state.operation==' ')
            this.setState({n1:this.state.n1*(-1)})
        else
            this.setState({n2:this.state.n2*(-1)});
    }
    backspace=()=>{
        if(this.state.operation==' ')
            this.setState({n1:parseFloat(0)})
        else
            this.setState({n2:parseFloat(0)});
    }
    Ans=()=>{
        this.setState({n1:this.state.result})
        this.setState({n2:parseFloat(0)})
        this.setState({operation:' '})
        this.setState({c2:parseInt(1)})
        this.setState({deci2:false})
    }
    equals=()=>{
        if(this.state.operation=='+')
            this.setState({result:parseFloat(this.state.n1)+parseFloat(this.state.n2)})
        else if(this.state.operation=='-')
            this.setState({result:parseFloat(this.state.n1)-parseFloat(this.state.n2)})
        else if(this.state.operation=='*')
            this.setState({result:parseFloat(this.state.n1)*parseFloat(this.state.n2)})
        else if(this.state.operation=='/')
            this.setState({result:parseFloat(this.state.n1)/parseFloat(this.state.n2)})
        else if(this.state.operation==' ')
            this.setState({result:parseInt(this.state.n1)})
        else
            this.setState({result:"Error"})
        
    }
    clear=()=>{
        this.setState({n1:parseFloat(0)})
        this.setState({n2:parseFloat(0)})
        this.setState({operation:' '})
        this.setState({result:parseFloat(0)})
        this.setState({c1:parseInt(1)})
        this.setState({c2:parseInt(1)})
        this.setState({deci1:false})
        this.setState({deci2:false})
    }
    state={mode:''}
    updateState=(mode)=>{
        this.setState({mode:mode})
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                <View width='45%' ><Button title="Standard" color='lightgrey' style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('Standard')}></Button></View>
                <View width='45%' ><Button title="Scientific" color='lightgrey' style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('Scientific')}></Button></View>
                </View>
                
                <View style={styles.output}>
                    <Text style={styles.outputText}>{this.state.n1} {this.state.operation} {this.state.n2}</Text>
                    <Text style={styles.outputText}>=  {this.state.result}</Text>
                </View>
                <View >

                <View style={styles.buttonContainer}>
                <View width='20%'><Button color='lightgrey' title='+/-' onPress={this.signChange}></Button></View>
                <View width='20%'><Button color='lightgrey' title="C" onPress={this.clear}></Button></View>
                <View width='20%'><Button color='lightgrey' title="<-" onPress={this.backspace}></Button></View>
                <View width='20%'><Button color='lightgrey' title="/" onPress={this.division}></Button></View>
                </View>

                <View style={styles.buttonContainer}>
                <View width='20%'><Button color='lightgrey' title='7' onPress={this.seven}></Button></View>
                <View width='20%'><Button color='lightgrey' title='8' onPress={this.eight}></Button></View>
                <View width='20%'><Button color='lightgrey' title='9' onPress={this.nine}></Button></View>
                <View width='20%'><Button color='lightgrey' title="*" onPress={this.multiplication}></Button></View>
                </View>

                <View style={styles.buttonContainer}>
                <View width='20%'><Button color='lightgrey' title='4' onPress={this.four}></Button></View>
                <View width='20%'><Button color='lightgrey' title='5' onPress={this.five}></Button></View>
                <View width='20%'><Button color='lightgrey' title='6' onPress={this.six}></Button></View>
                <View width='20%'><Button color='lightgrey' title="-" onPress={this.subtraction}></Button></View>
                </View>

                <View style={styles.buttonContainer}>
                <View width='20%'><Button color='lightgrey' title='1' onPress={this.one}></Button></View>
                <View width='20%'><Button color='lightgrey' title='2' onPress={this.two}></Button></View>
                <View width='20%'><Button color='lightgrey' title='3' onPress={this.three}></Button></View>
                <View width='20%'><Button color='lightgrey' title="+" onPress={this.addition}></Button></View>
                </View>

                <View style={styles.buttonContainer}>
                <View width='20%'><Button color='lightgrey' title='An' onPress={this.Ans}></Button></View>
                <View width='20%'><Button color='lightgrey' title='0' onPress={this.zero}></Button></View>
                <View width='20%'><Button color='lightgrey' title="." onPress={this.decimal}></Button></View>
                <View width='20%'><Button color='lightgrey' title="=" onPress={this.equals}></Button></View>
                </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#e6f3f5',
        paddingTop:'4%',
    },
    output: {
        margin:'2%',
        marginTop:'47%',
        padding:'5.5%',
        fontSize:20,
        borderRadius:10,
        justifyContent:'space-between',
        textAlign:'center',
        backgroundColor:'lightgrey',
    },
    outputText: {
        justifyContent:'center',
        fontSize:20,
        textAlign:'right',
    },
    buttonContainer: {
        fontSize:20,
        marginTop:'.8%',
        marginBottom:'.8%',
        padding:'.5%',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',
        width:'100%',
    },
  });