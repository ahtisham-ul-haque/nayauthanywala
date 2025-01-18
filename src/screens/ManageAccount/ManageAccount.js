import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Black, LightGrey, White } from '../../utils/Color'
import Ionicons from 'react-native-vector-icons/Ionicons';
const ManageAccount = ({navigation}) => {
  return (
  <SafeAreaView style={{flex:1,backgroundColor:White}}>
 <View style={{flexDirection:'row',paddingVertical:10,height:40,backgroundColor:White}}>
                     <TouchableOpacity
                     onPress={()=>navigation.goBack()}
                     style={{width:'20%'}}
                     >
                        <Ionicons name='chevron-back-outline' color={'#000'} size={25} />
                     </TouchableOpacity>
                     <View style={{width:'80%'}}>
        
                     <Text style={{color:'#000',textAlign:'center',width:'80%',fontSize:17}}>Manage account</Text>
                     </View>
                </View>
                <View style={{backgroundColor:LightGrey,height:60,justifyContent:'center',paddingHorizontal:10}}>
                    <Text style={{color:Black}}>Curency</Text>

                </View>
                <View style={{backgroundColor:White,height:60,paddingHorizontal:10,flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
                   <View>

                    <Text style={{color:Black}}>Curency</Text>
                    <Text style={{color:Black}}>USD</Text>
                   </View>
<View>
<Ionicons name='chevron-forward-outline' color={'#000'} size={25} />
</View>
                </View>
  </SafeAreaView>
  )
}

export default ManageAccount

const styles = StyleSheet.create({})