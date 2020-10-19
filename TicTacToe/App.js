import React, { Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, Alert, LogBox} from 'react-native';

LogBox.ignoreAllLogs(true)
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      gameState:[
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ],
    currentPlayer:1
    }
  }
  componentDidMount(){
    this.initializeGame();
  }
  initializeGame=()=>{
    this.setState({gameState:[
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]})
    this.setState({currentPlayer:1})
  }
  onTilePress=(row,col)=>{
    var val=this.state.gameState[row][col];
    if(val!==0) {return}

    var currPlayer=this.state.currentPlayer;
    var arr=this.state.gameState.slice();
    arr[row][col]=currPlayer;
    this.setState({gameState:arr})

    this.setState({currentPlayer:this.state.currentPlayer*-1})

    var winner=this.getWinner();
    if(winner==1){
      Alert.alert("Player 1 won!");
      this.initializeGame();
    }
    else if(winner==-1){
      Alert.alert("Player 2 won!");
      this.initializeGame();
    }

    else{
      if(arr[0][0]!=0 && arr[0][1]!=0 && arr[0][2]!=0 && arr[1][0]!=0 && arr[1][1]!=0 && arr[1][2]!=0 && arr[2][0]!=0 && arr[2][1]!=0 && arr[2][2]!=0)
      {
        Alert.alert("Nobody won the game!");
        this.initializeGame();
      }
    }
  }
  getWinner=()=>{
    const Num_Tile=3;
    var arr=this.state.gameState;
    var sum;

    for(var i=0;i<Num_Tile;i++){
      sum=arr[i][0]+arr[i][1]+arr[i][2];
      if(sum==3){return 1}
      else if(sum==-3){return -1}
    }

    for(i=0;i<Num_Tile;i++){
      sum=arr[0][i]+arr[1][i]+arr[2][i];
      if(sum==3){return 1}
      else if(sum==-3){return -1}
    }

    sum= arr[0][0]+ arr[1][1]+ arr[2][2];
    if(sum==3){return 1}
      else if(sum==-3){return -1}
    
    sum= arr[0][2]+ arr[1][1]+ arr[2][0];
    if(sum==3){return 1}
      else if(sum==-3){return -1}
      
    return 0;
  }
  renderIcon=(row,col)=>{
    var value=this.state.gameState[row][col];
    switch(value)
    {
      case 1:return <Text style={styles.tileX}>X</Text>;
      case -1:return <Text style={styles.tileO}>O</Text>;
      default:return <View/> ;
    }
  }
  newGamePress=()=>{
    this.initializeGame();
  }
  render(){
    return (
      <View style={styles.container}>
        
        <View style={{flexDirection:'row',width:'80%',marginBottom:'5%'}}>
          <Text style={styles.text}>Player 1:{<Text style={{color:'red',fontSize:35}}>X</Text>}</Text>
          <Text style={styles.text}>Player 2:{<Text style={{color:'green',fontSize:35}}>O</Text>}</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={[styles.tile,{borderTopWidth:0,borderLeftWidth:0,alignItems:'center',justifyContent:'center'}]} onPress={()=>this.onTilePress(0,0)}>
          {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile,{borderTopWidth:0,alignItems:'center',justifyContent:'center'}]} onPress={()=>this.onTilePress(0,1)}>
          {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile,{borderTopWidth:0,borderRightWidth:0,alignItems:'center',justifyContent:'center'}]} onPress={()=>this.onTilePress(0,2)}>
          {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={[styles.tile,{borderLeftWidth:0,alignItems:'center',justifyContent:'center'}]} onPress={()=>this.onTilePress(1,0)}>
          {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile,{alignItems:'center',justifyContent:'center'}]} onPress={()=>this.onTilePress(1,1)}>
          {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile,{borderRightWidth:0,alignItems:'center',justifyContent:'center'}]} onPress={()=>this.onTilePress(1,2)}>
          {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={[styles.tile,{borderBottomWidth:0,borderLeftWidth:0,alignItems:'center',justifyContent:'center'}]} onPress={()=>this.onTilePress(2,0)}>
          {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile,{borderBottomWidth:0,alignItems:'center',justifyContent:'center'}]} onPress={()=>this.onTilePress(2,1)}>
          {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile,{borderBottomWidth:0,borderRightWidth:0,alignItems:'center',justifyContent:'center'}]} onPress={()=>this.onTilePress(2,2)}>
          {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
        
        <View style={{padding:20,marginTop:'10%'}}>
        <TouchableOpacity onPress={this.newGamePress}><Text style={styles.buttonStyle}>New Game</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle:{
    color:'blue',
    fontSize:22
  },
  text:{
    color:'black',
    width:'55%',
    fontSize:30,
    
  },
  tile:{
    borderWidth:5,
    width:100,
    height:100,
    borderColor:'#8a2113'
  },
  tileX:{
    color:'red',
    fontSize:80,
  
  },
  tileO:{
    color:'green',
    fontSize:80,
   
  },
});
