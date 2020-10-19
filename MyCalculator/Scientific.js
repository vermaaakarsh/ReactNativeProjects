import React,{Component} from 'react';
import {View,StyleSheet,Button,Text} from 'react-native';
import {cos, cot, e, factorial, log,log10, mod, nthRoot, pi, pow, sec, sin, sqrt, square, tan, csc, round} from 'mathjs';
import { Picker } from '@react-native-community/picker';
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';

export default class Scientific extends Component {
    constructor(props){
        super(props)
        this.state={n1:parseFloat(0),n2:parseFloat(0),result:parseFloat(0),operation:' ',deci1:false,deci2:false,c1:parseInt(1),c2:parseInt(1)}
    }
    updateOperation=(trignofun)=>{
        if(trignofun=='Sin')
            this.setState({result:parseFloat(round(sin(parseFloat(this.state.n1)*pi/180),2))})
        else if(trignofun=='Cos')
            this.setState({result:parseFloat(round(cos(parseFloat(this.state.n1)*pi/180),2))})
        else if(trignofun=='Tan')
            this.setState({result:parseFloat(round(tan(parseFloat(this.state.n1)*pi/180),2))})
        else if(trignofun=='Cosec')
            this.setState({result:parseFloat(round(csc(parseFloat(this.state.n1)*pi/180),2))})
        else if(trignofun=='Sec')
            this.setState({result:parseFloat(round(sec(parseFloat(this.state.n1)*pi/180),2))})
        else if(trignofun=='Cot')
            this.setState({result:parseFloat(round(cot(parseFloat(this.state.n1)*pi/180),2))})
    }
    constante=()=>{
        if(this.state.operation==' ')
            this.setState({result:parseFloat(e)})
        else
            this.setState({n2:parseFloat(e)})
    }
    constantpi=()=>{
        if(this.state.operation==' ')
            this.setState({result:parseFloat(pi)})
        else
            this.setState({n2:parseFloat(pi)})
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
    modlus=()=>{
        this.setState({operation:'mod'})
    }
    divideby=()=>{
        if(this.state.operation==' ')
            this.setState({n1:parseFloat(1/this.state.n1)})
        else
            this.setState({n2:parseFloat(1/this.state.n2)})
    }
    logtobase=()=>{
        this.setState({operation:'logToBase'})
    }
    topower=()=>{
        this.setState({operation:'toPower'})
    }
    square=()=>{
        if(this.state.operation==' ')    
            this.setState({result:parseFloat(square(parseFloat(this.state.n1)))})
        else
            this.setState({n2:parseFloat(square(parseFloat(this.state.n2)))})
    }
    sqroot=()=>{
        if(this.state.operation==' ')  
            this.setState({result:parseFloat(sqrt(parseFloat(this.state.n1)))})
        else
            this.setState({n2:parseFloat(sqrt(parseFloat(this.state.n2)))})
    }
    root=()=>{
        this.setState({operation:'RootOf'})
    }
    factorial=()=>{
        if(this.state.operation==' ')
            this.setState({result:parseFloat(factorial(parseInt(this.state.n1)))})
        else
            this.setState({n2:parseFloat(factorial(parseInt(this.state.n2)))})
    }
    topowerexp=()=>{
        this.setState({result:parseFloat(pow(e,parseInt(this.state.n1)))})
    }
    topowertwo=()=>{
        if(this.state.operation==' ')
            this.setState({result:parseFloat(pow(2,parseInt(this.state.n1)))})
        else
            this.setState({n2:parseFloat(pow(2,parseInt(this.state.n2)))})
    }
    topowerten=()=>{
        if(this.state.operation==' ')
            this.setState({result:parseFloat(pow(10,parseInt(this.state.n1)))})
        else
            this.setState({n2:parseFloat(pow(10,parseInt(this.state.n2)))})
    }
    log=()=>{
        if(this.state.operation==' ')
            this.setState({result:parseFloat(log10(parseFloat(this.state.n1)))})
        else
            this.setState({result:parseFloat(log10(parseFloat(this.state.n2)))})
    }
    ln=()=>{
        if(this.state.operation==' ')
            this.setState({result:parseFloat(log(parseInt(this.state.n1)))})
        else
            this.setState({result:parseFloat(log(parseInt(this.state.n2)))})
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
        this.setState({result:parseFloat(0)})
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
        else if(this.state.operation=='logToBase')
            this.setState({result:parseFloat(log10(this.state.n1))/parseFloat(log10(this.state.n2))})
        else if(this.state.operation=='toPower')
            this.setState({result:parseFloat(pow(parseInt(this.state.n1),parseInt(this.state.n2)))})
        else if(this.state.operation=='mod')
            this.setState({result:parseInt(mod(parseInt(this.state.n1),parseInt(this.state.n2)))})
        else if(this.state.operation=='RootOf')
            this.setState({result:parseFloat(nthRoot(parseFloat(this.state.n2),parseInt(this.state.n1)))})
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

    render() {
        return(
            <View style={styles.container}>

                <View style={styles.output}>
                    <Text style={styles.outputText}>{this.state.n1} {this.state.operation} {this.state.n2}</Text>
                    <Text style={styles.outputText}>=  {this.state.result}</Text>
                </View>
                <View>
                    <Picker selectedValue="Trignometry" onValueChange={this.updateOperation}>
                        <PickerItem label="Trignometry"/>
                        <PickerItem label="Sin" value="Sin"/>
                        <PickerItem label="Cos" value="Cos"/>
                        <PickerItem label="Tan" value="Tan"/>
                        <PickerItem label="Cosec" value="Cosec"/>
                        <PickerItem label="Sec" value="Sec"/>
                        <PickerItem label="Cot" value="Cot"/>
                    </Picker>
                </View>

                <View style={styles.buttonContainer}>
                <View width='16%'><Button color='lightgrey' title="An" onPress={this.Ans}></Button></View>
                <View width='16%'><Button color='lightgrey' title="pi" onPress={this.constantpi}></Button></View>
                <View width='16%'><Button color='lightgrey' title="e" onPress={this.constante}></Button></View>
                <View width='16%'><Button color='lightgrey' title="C" onPress={this.clear}></Button></View>
                <View width='16%'><Button color='lightgrey' title="<-" onPress={this.backspace}></Button></View>
                </View>
                
                <View style={styles.buttonContainer}>
                <View width='16%'><Button color='lightgrey' title="lny x" onPress={this.logtobase}></Button></View>
                <View width='16%'><Button color='lightgrey' title="1/x" onPress={this.divideby}></Button></View>
                <View width='16%'><Button color='lightgrey' title="2^x" onPress={this.topowertwo}></Button></View>
                <View width='16%'><Button color='lightgrey' title="e^x" onPress={this.topowerexp}></Button></View>
                <View width='16%'><Button color='lightgrey' title="mod" onPress={this.modlus}></Button></View>
                </View>

                <View style={styles.buttonContainer}>
                <View width='16%'><Button color='lightgrey' title="x^1/y" onPress={this.root}></Button></View>
                <View width='16%'><Button color='lightgrey' title="x^2" onPress={this.square}></Button></View>
                <View width='16%'><Button color='lightgrey' title="x^1/2" onPress={this.sqroot}></Button></View>
                <View width='16%'><Button color='lightgrey' title="!" onPress={this.factorial}></Button></View>
                <View width='16%'><Button color='lightgrey' title="/" onPress={this.division}></Button></View>
                </View>

                <View style={styles.buttonContainer}>
                <View width='16%'><Button color='lightgrey' title='x^y' onPress={this.topower}></Button></View>
                <View width='16%'><Button color='lightgrey' title='7' onPress={this.seven}></Button></View>
                <View width='16%'><Button color='lightgrey' title='8' onPress={this.eight}></Button></View>
                <View width='16%'><Button color='lightgrey' title='9' onPress={this.nine}></Button></View>
                <View width='16%'><Button color='lightgrey' title="*" onPress={this.multiplication}></Button></View>
                </View>

                <View style={styles.buttonContainer}>
                <View width='16%'><Button color='lightgrey' title='10^x' onPress={this.topowerten}></Button></View>
                <View width='16%'><Button color='lightgrey' title='4' onPress={this.four}></Button></View>
                <View width='16%'><Button color='lightgrey' title='5' onPress={this.five}></Button></View>
                <View width='16%'><Button color='lightgrey' title='6' onPress={this.six}></Button></View>
                <View width='16%'><Button color='lightgrey' title="-" onPress={this.subtraction}></Button></View>
                </View>

                <View style={styles.buttonContainer}>
                <View width='16%'><Button color='lightgrey' title='log' onPress={this.log}></Button></View>
                <View width='16%'><Button color='lightgrey' title='1' onPress={this.one}></Button></View>
                <View width='16%'><Button color='lightgrey' title='2' onPress={this.two}></Button></View>
                <View width='16%'><Button color='lightgrey' title='3' onPress={this.three}></Button></View>
                <View width='16%'><Button color='lightgrey' title="+" onPress={this.addition}></Button></View>
                </View>

                <View style={styles.buttonContainer}>
                <View width='16%'><Button color='lightgrey' title='ln' onPress={this.ln}></Button></View>
                <View width='16%'><Button color='lightgrey' title='+/-' onPress={this.signChange}></Button></View>
                <View width='16%'><Button color='lightgrey' title='0' onPress={this.zero}></Button></View>
                <View width='16%'><Button color='lightgrey' title="." onPress={this.decimal}></Button></View>
                <View width='16%'><Button color='lightgrey' title="=" onPress={this.equals}></Button></View>
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
        marginTop:'22%',
        marginBottom:'2%',
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