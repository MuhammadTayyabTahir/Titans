import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex:1 ,backgroundColor:'orange',marginTop:10}}>

        {/* 1st flex */}

        <View style={{flex:0.75, backgroundColor:'red'}}>
          <View style={{flexDirection:'row',flex:1}}>

<View style={{flex:3,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
<Text style={{fontWeight:'bold',fontSize:30,left:20}}>Kuperic</Text>
<Text style={{left:30,}}>Tailandia</Text>

</View>
<View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
  <TouchableOpacity>

  <Image
  style={{width:30,height:30,tintColor:'red'}}
  
  source={require('../assets/images/im1.jpg')}
  />
  </TouchableOpacity>
</View>


          </View>
          
{/* 2nd flex */}

        </View>
        <View style={{flex:0.75, backgroundColor:'white'}}>
        <View style={{flex:1, flexDirection:'row'}}>
          <TouchableOpacity style={{flex:1,backgroundColor:'lightgray',justifyContent:'center',alignItems:'center'}}>

          <View style={{}}>

            <Text style={{color:'grey',fontSize:20,fontWeight:'bold'}}>Norte</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
          <View style={{}}>
          <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Destinos A-Z</Text>
          </View>
          </TouchableOpacity>
        </View>

        </View>

        {/* 3rd flex */}

        <View style={{flex:6, backgroundColor:'blue'}}>

          <ScrollView>
            <View style={{flex:1,height:1100}}>
              {/* image 1 */}
      <View style={{flex:1,backgroundColor:'red'}}>

<Image 
        style={{width:'100%',height:undefined,aspectRatio:2}}
        source={require('../assets/images/im3.jpg')}
        />
        <Text style={{position:'absolute',color:'white',left:30,fontWeight:'bold',fontSize:30,top:85}}>1st text</Text>

      </View>
           {/* image 2 */}
      <View style={{flex:1,backgroundColor:'red' }}>

      <Image 
        style={{width:'100%',height:undefined,aspectRatio:2}}
        source={require('../assets/images/im4.jpg')}
        />
        <Text style={{position:'absolute',color:'white',left:30,fontWeight:'bold',fontSize:30,top:85}}>2nd text</Text>
      </View>
{/* image 3 */}
      <View style={{flex:1,backgroundColor:'red',}}>
     
      <Image 
        style={{width:'100%',height:undefined,aspectRatio:2}}
        source={require('../assets/images/im5.jpg')}
        />
        <Text style={{position:'absolute',color:'white',left:30,fontWeight:'bold',fontSize:30,top:85}}>3rd text</Text>
      </View>
 {/* image 4 */}
      <View style={{flex:1,backgroundColor:'red'}}>
     
      <Image 
        style={{width:'100%',height:undefined,aspectRatio:2}}
        source={require('../assets/images/im7.jpg')}
        />
        <Text style={{position:'absolute',color:'white',left:30,fontWeight:'bold',fontSize:30,top:85}}>4th text</Text>
      </View>
{/* image 5 */}
      <View style={{flex:1,backgroundColor:'red'}}>
     
      <Image 
        style={{width:'100%',height:undefined,aspectRatio:2}}
        source={require('../assets/images/im7.jpg')}
        />
        <Text style={{position:'absolute',color:'white',left:30,fontWeight:'bold',fontSize:30,top:85}}>5th text</Text>
      </View>
 {/* image 6 */}
      <View style={{flex:1,backgroundColor:'red'}}>
    
      <Image 
        style={{width:'100%',height:undefined,aspectRatio:2}}
        source={require('../assets/images/im8.jpg')}
        />
        <Text style={{position:'absolute',color:'white',left:30,fontWeight:'bold',fontSize:30,top:85}}>6th text</Text>
      </View>
  {/* image 7 */}
      <View style={{flex:1,backgroundColor:'red'}}>
   
      <Image 
        style={{width:'100%',height:undefined,aspectRatio:2}}
        source={require('../assets/images/im9.jpg')}
        />
        <Text style={{position:'absolute',color:'white',left:30,fontWeight:'bold',fontSize:30,top:85}}>7th text</Text>
      </View>
 {/* image 8 */}
      <View style={{flex:1,backgroundColor:'red'}}>
     
      <Image 
        style={{width:'100%',height:undefined,aspectRatio:2}}
        source={require('../assets/images/im10.jpg')}
        />
        <Text style={{position:'absolute',color:'white',left:30,fontWeight:'bold',fontSize:30,top:85}}>8th text</Text>
      </View>
      </View>

      </ScrollView>



        </View>

        

         
 
          
      </View>



    );
  }
}

export default Screen2;
