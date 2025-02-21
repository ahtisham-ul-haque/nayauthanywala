import { StyleSheet, Text, View,TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
const GlobalMoneyAccount = ({navigation}) => {
  return (
    <SafeAreaView style={styles.cantainer}>

    <View >
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
<Text style={{color:'#000',fontSize:16}}>Great British Pounds</Text>
<Text style={{color:'#000',}}>9.00 GBP</Text>
{/* <Text style={{color:'#000',}}>= 0.00 USD</Text> */}
</View>
<View>
<Ionicons name='chevron-forward-outline' color={'#000'} size={20} />
</View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('GlobalBritishPounds')} 
        style={{height:Dimensions.get('screen').height/10,margin:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={{height:Dimensions.get('screen').height/14}}>
<Text style={{color:'#000',fontSize:16}}>UAE Dirham</Text>
<Text style={{color:'#000',}}>9.27 AED</Text>
<Text style={{color:'#000',}}>= 2.01 GBP</Text>
</View>
<View>
<Ionicons name='chevron-forward-outline' color={'#000'} size={20} />
</View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('GlobalBritishPounds')} 
        style={{height:Dimensions.get('screen').height/10,margin:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={{height:Dimensions.get('screen').height/14}}>
<Text style={{color:'#000',fontSize:16}}>Euro</Text>
<Text style={{color:'#000',}}>2.38 Euro</Text>
<Text style={{color:'#000',}}>= 1.99 GBP</Text>
</View>
<View>
<Ionicons name='chevron-forward-outline' color={'#000'} size={20} />
</View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('GlobalBritishPounds')} 
        style={{height:Dimensions.get('screen').height/10,margin:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={{height:Dimensions.get('screen').height/14}}>
<Text style={{color:'#000',fontSize:16}}>US Dollar</Text>
<Text style={{color:'#000',}}>1.24 USD</Text>
<Text style={{color:'#000',}}>= 0.99 GBP</Text>
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
    <View style={styles.tabBars}>
                <View style={styles.tabItems}>
                  <Ionicons name="wallet" size={24} color="red" />
                  <Text style={[styles.tabTexts, { color: 'red' }]}>Accounts</Text>
                </View>
                <View style={styles.tabItems}>
                  <Ionicons name="swap-horizontal-outline" size={24} color="gray" />
                  <Text style={styles.tabTexts}>Pay & Transfer</Text>
                </View>
                <View style={styles.tabItems}>
                  <Ionicons name="bar-chart-outline" size={24} color="gray" />
                  <Text style={styles.tabTexts}>Plan</Text>
                </View>
                <View style={styles.tabItems}>
                  <Ionicons name="help-circle-outline" size={24} color="gray" />
                  <Text style={styles.tabTexts}>Support</Text>
                </View>
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
    tabBars: {
      position:'absolute',
      bottom:0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      paddingVertical: 8,
      backgroundColor: '#fff',
      width:'100%'
    },
    tabItems: {
      alignItems: 'center',
    },
    tabTexts: {
      fontSize: 12,
      marginTop: 4,
      color: '#666',
    },
    headerContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
})