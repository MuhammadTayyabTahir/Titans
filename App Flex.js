import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './.vscode/HomeScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
   
      <View style={{flex:1,backgroundColor:"pink"}}>
       
        <View style={{flex:1,backgroundColor:"red",alignItems:"center",justifyContent:"center"}}>
        <Text
              style={{
                fontSize: 30,
                color: "black",
                fontWeight: "bold",
              
                textAlign: "center",
           
              }}
            >
              Red
            </Text>
        </View>

        <View style={{flex:1.5,backgroundColor:"yellow",flexDirection:'row'}}>
        <View style={{flex:1,backgroundColor:"pink"}}>
        <View
            style={{
              flex: 1,
              backgroundColor:"yellow",

              left : 0,
              right : 0,
              bottom : 0,
              top : 0,
              margin : 'auto',

              justifyContent: "center",
              alignItems: "center",
              fontSize: 20,
                color: "black",
                fontWeight: "bold",
                width: 100,
                textAlign: "center",
            
                height: 100,
                borderRadius: 75,
                
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: "bold",
              
                textAlign: "center",
            
          
              }}
            >
              yellow
            </Text>
          </View>
        </View>





        
        <View style={{flex:1,backgroundColor:"green"}}>

        <View
            style={{
              flex: 1,
              backgroundColor:"white",
              left : 0,
              right : 0,
              bottom : 0,
              top : 0,
              margin : 'auto',

              justifyContent: "center",
              alignItems: "center",
              fontSize: 20,
                color: "black",
                fontWeight: "bold",
                width: 100,
                textAlign: "center",
            
                height: 100,
                borderRadius: 75,
                
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: "bold",
              
                textAlign: "center",
            
      
              }}
            >
              white
            </Text>
          
          </View>
        </View>
        </View>
        
        
        <View style={{flex:1.5,backgroundColor:"orange",flexDirection:'row'}}>
        <View style={{flex:1,backgroundColor:"black"}}>
        <View
            style={{
              flex: 1,
              backgroundColor:"red",
              justifyContent: "center",
              left : 0,
              right : 0,
              bottom : 0,
              top : 0,
              margin : 'auto',

              alignItems: "center",
              fontSize: 20,
                color: "black",
                fontWeight: "bold",
                width: 100,
                textAlign: "center",
            
                height: 100,
                borderRadius: 75,
                
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: "bold",
              
                textAlign: "center",
                
              }}
            >
              red
            </Text>  
          </View>
        </View>




        <View style={{flex:1,backgroundColor:"grey"}}>
        <View
            style={{
              flex: 1,
              backgroundColor:"blue",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 20,
              left : 0,
              right : 0,
              bottom : 0,
              top : 0,
              margin : 'auto',
                color: "black",
                fontWeight: "bold",
                width: 100,
                textAlign: "center",
            
                height: 100,
                borderRadius: 75,
                
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: "bold",
              
                textAlign: "center",
                         
              }}
            >
              blue
            </Text>         
          </View>
          </View> 
        </View>





        <View style={{flex:2,backgroundColor:"red",flexDirection:'row'}}>
        <View style={{flex:1,backgroundColor:"pink"}}></View>
        <View style={{flex:1,backgroundColor:"white"}}></View>
        </View>

        <View style={{flex:3,backgroundColor:"green"}}></View>

        <View style={{flex:1,backgroundColor:"blue",flexDirection:"row",}}>

        <View style={{flex:1,backgroundColor:"blue"}}>
        <View
            style={{
              flex: 1,
              backgroundColor:"red",
              justifyContent: "center",
              left : 0,
              right : 0,
              bottom : 0,
              top : 0,
              margin : 'auto',

              alignItems: "center",
              fontSize: 20,
                color: "black",
                fontWeight: "bold",
                width: 75,
                textAlign: "center",
            
                height: 75,
                borderRadius: 75,
                
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: "bold",
              
                textAlign: "center",
            
                
              }}
            >
              Footer
            </Text>
          
          </View>
        </View>
        <View style={{flex:1,backgroundColor:"blue"}}>
        <View
            style={{
              flex: 1,
              backgroundColor:"orange",
              justifyContent: "center",
              left : 0,
              right : 0,
              bottom : 0,
              top : 0,
              margin : 'auto',

              alignItems: "center",
              fontSize: 20,
                color: "black",
                fontWeight: "bold",
                width: 75,
                textAlign: "center",
            
                height: 75,
                borderRadius: 75,
                
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: "bold",
              
                textAlign: "center",                
              }}
            >
              Footer
            </Text>
          
          </View>
        </View>
        <View style={{flex:1,backgroundColor:"blue"}}>
        <View
            style={{
              flex: 1,
              backgroundColor:"white",
              justifyContent: "center",
              left : 0,
              right : 0,
              bottom : 0,
              top : 0,
              margin : 'auto',

              alignItems: "center",
              fontSize: 20,
                color: "black",
                fontWeight: "bold",
                width: 75,
                textAlign: "center",
            
                height: 75,
                borderRadius: 75,
                
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: "bold",
              
                textAlign: "center",
            
          
            
                
              }}
            >
              Footer

            </Text>
          
          </View>
        </View>
        <View style={{flex:1,backgroundColor:"blue"}}>
        <View
            style={{
              flex: 1,
              backgroundColor:"brown",
              justifyContent: "center",
              left : 0,
              right : 0,
              bottom : 0,
              top : 0,
              margin : 'auto',

              alignItems: "center",
              fontSize: 20,
                color: "black",
                fontWeight: "bold",
                width: 75,
                textAlign: "center",
            
                height: 75,
                borderRadius: 75,
                
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "black",
                fontWeight: "bold",
              
                textAlign: "center",
            
          
              }}
            >
              Footer

            </Text>
          
          </View>
        </View>
        
        </View>
      </View>
    );
  }
}

