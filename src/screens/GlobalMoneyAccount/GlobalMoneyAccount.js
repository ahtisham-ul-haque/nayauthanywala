import { StyleSheet, Text, View,TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
const GlobalMoneyAccount = ({navigation}) => {
  return (
    <SafeAreaView>

    <View style={styles.cantainer}>
        <View style={{flexDirection:'row',paddingVertical:10,height:50,}}>
             <TouchableOpacity
             onPress={()=>navigation.goBack()}
             style={{width:'20%'}}
             >
                <Ionicons name='chevron-back-outline' color={'#000'} size={25} />
             </TouchableOpacity>
             <View style={{width:'80%'}}>

             <Text style={{color:'#000',textAlign:'center',width:'80%',fontSize:18}}>Global Money Account</Text>
             </View>
        </View>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('GlobalBritishPounds')} 
        style={{height:Dimensions.get('screen').height/10,margin:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={{height:Dimensions.get('screen').height/14}}>
<Text style={{color:'#000',fontSize:16}}>Global British Pounds</Text>
<Text style={{color:'#000',}}>0.00 GBP</Text>
<Text style={{color:'#000',}}>= 0.00 USD</Text>
</View>
<View>
<Ionicons name='chevron-forward-outline' color={'#000'} size={20} />
</View>
        </TouchableOpacity>
        <TouchableOpacity 
        
        onPress={()=>navigation.navigate('CurrenciesScreen')}
        style={{height:Dimensions.get('screen').height/24,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:10}}>
        <Text style={{color:'#000',fontSize:16}}>See more currencies</Text>
        <Ionicons name='chevron-down-outline' color={'#000'} size={20} />
        </TouchableOpacity>
    </View>
    </SafeAreaView>

  )
}

export default GlobalMoneyAccount

const styles = StyleSheet.create({
    cantainer :{
        flex:1,
        backgroundColor:'#fff',
    },
})