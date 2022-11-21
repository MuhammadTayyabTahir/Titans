import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <View style={{flex:1}}>
          

          <View style={{flex:1 ,backgroundColor:'green',}}></View>
          <ScrollView 
          
          horizontal={true}
          
          >
              <View style={{flex:6,backgroundColor:'red',}}>
                  
          <View style={{flex:1 ,backgroundColor:'yellow',width:200}}></View>

          <View style={{flex:1 ,backgroundColor:'black',width:600}}></View>
          <View style={{flex:1 ,backgroundColor:'yellow',width:100}}></View>
          <View style={{flex:1 ,backgroundColor:'blue',width:100}}></View>
          <View style={{flex:1 ,backgroundColor:'orange',width:100}}></View>
          <View style={{flex:1 ,backgroundColor:'green',width:100}}></View>



          </View>

</ScrollView>
          <View style={{flex:1 ,backgroundColor:'blue'}}></View>

          
          
          <View style={{flex:1 ,backgroundColor:'white'}}></View>

          <View style={{flex:1 ,backgroundColor:'black'}}></View>

          <View style={{flex:1 ,backgroundColor:'pink'}}></View>
          <View style={{flex:1 ,backgroundColor:'yellow'}}></View>

          <View style={{flex:1 ,backgroundColor:'lightgrey'}}></View>
          
       
      </View>
    );
  }
}

export default HomeScreen;
