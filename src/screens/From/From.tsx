import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
const From = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
<View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center',paddingVertical:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 0.5,}}>
  <TouchableOpacity
  onPress={()=>navigation.goBack()}
  style={{width:"20%",marginLeft:10}}>
  <Icon name="chevron-back-outline" size={25} color={'#000'}/>
  

  </TouchableOpacity>
  <View style={{width:'50%',alignItems:'center'}}>
    <Text style={{color:'#000',fontSize:17,fontWeight:'6 00'}}>From</Text>
  </View>
  <View style={{width:'20%',alignItems:'center'}}>
  <Icon name="ellipsis-horizontal" size={25} color={'#000'}/>
  </View>
</View>
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      
        <Icon name="wallet-outline" size={40} color={'#000'}/>
      <Text style={{color:'#000',textAlign:'center',width:'80%',marginTop:30,fontSize:16}}>We're unable to process this request as either you don't hold an eligible account or the personal details we hold for you are  not up to date. Please chat with us. Reference CDDINH1</Text>
    </View>
    </SafeAreaView>

  )
}

export default From

const styles = StyleSheet.create({})