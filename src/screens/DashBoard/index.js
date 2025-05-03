import { ImageBackground, StyleSheet,ScrollView, Text, View,FlatList,TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Black, White } from '../../utils/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
const DATA = [
  {
    name: 'Global Money Account',
    icon: 'globe-outline',
    type: 'Ionicons',
  },
  {
    name: 'Credit Card',
    icon: 'wallet-outline',
    type: 'Ionicons',
  },
  {
    name: 'Loans',
    icon: 'cash-outline',
    type: 'Ionicons',
  },
  {
    name: 'Investments',
    icon: 'pulse-outline',
    type: 'Ionicons',
  },
  {
    name: 'Ways to Borrow',
    icon: 'home-city-outline',
    type: 'MaterialCommunityIcons',
  },
  {
    name: 'Overdrafts',
    icon: 'credit-card-chip-outline',
    type: 'MaterialCommunityIcons',
  },
  {
    name: 'Mortgages',
    icon: 'home-city-outline',
    type: 'MaterialCommunityIcons',
  },
  {
    name: 'Savings',
    icon: 'card-outline',
    type: 'MaterialCommunityIcons',
  },
  {
    name: 'Current Accounts',
    icon: 'wallet-outline',
    type: 'Ionicons',
  },
  {
    name: 'International Services',
    icon: 'home-city-outline',
    type: 'MaterialCommunityIcons',
  },
  {
    name: 'Insurance',
    icon: 'umbrella-outline',
    type: 'Ionicons',
  },
  {
    name: 'Rewards and Offers',
    icon: 'gift-outline',
    type: 'MaterialCommunityIcons',
  },
  {
    name: 'Business Banking',
    icon: 'wallet-outline',
    type: 'MaterialCommunityIcons',
  },
];
const DashBoard = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ScrollView>

            <>
            <ImageBackground
        source={require('../../assets/images/redbg.jpeg')}
        style={{ borderWidth: 1, height: 200 }}>
        
        {/* Header Section */}
        <View
          style={{
            height: 80,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginHorizontal: 10,
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              marginLeft: 10,
              borderRadius: 25,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="person-outline" color={'#181818'} size={20} />
          </View>
          <TouchableOpacity
          onPress={()=>navigation.navigate("SettingsScreen")}
            style={{
              height: 50,
              width: 50,
              marginLeft: 10,
              borderRadius: 25,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="notifications-outline" color={'#181818'} size={20} />
          </TouchableOpacity>
        </View>
        
        {/* Text and Title */}
        <View style={{ height: 100, justifyContent: 'flex-end' }}>
          <Text
            style={{
              marginVertical: 10,
              marginHorizontal: 10,
              color: '#fff',
              fontSize: 25,
              fontWeight: '800',
            }}>
            Accounts
          </Text>
        </View>
      </ImageBackground>
      <View style={{backgroundColor:White}}>

      <TouchableOpacity onPress={()=>navigation.navigate('DashBoard')}>

      <View
        style={{
          marginVertical: 10,
          paddingVertical: 10,
          marginHorizontal: 15,
          borderBottomWidth: 0.5,
      
        }}>
        <Text style={{ color: '#181818', fontSize: 16 }}>BASIC BANK </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: '#989898', fontSize: 16 }}>40-22-22</Text>
          <Text style={{ color: '#989898', fontSize: 16, paddingLeft: 7 }}>
          41721143
          </Text>
        </View>
        <Text
          style={{
            color: '#181818',
            fontSize: 23,
            textAlign: 'right',
            marginRight: 10,
          }}>
         £7.00
        </Text>
      </View>
      </TouchableOpacity>
      {/* <TouchableOpacity 
      onPress={()=>navigation.navigate('GlobalMoneyAccount')}
      style={{marginVertical:20,marginHorizontal:15}}>
<Text style={{color:Black,fontSize:16,fontWeight:'500'}}>GLOBAL MONEY ACCOUNT</Text>
<View style={{alignItems:'flex-end'}}>

<Icon name='chevron-forward-outline' size={25} color={'#181818'}/>
</View>
<Text style={{color:'#181818',fontSize:15,fontWeight:'500'}}>View currency balances</Text>
      </TouchableOpacity> */}
      {/* <View style={{borderWidth:0.3,marginHorizontal:15,borderColor:'grey',marginBottom:20}}>

      </View> */}
      {/* <View style={{marginHorizontal:15,borderBottomWidth:0.5,marginVertical:10}}>
<Text style={{color:Black,fontSize:16,fontWeight:'500'}}>FLEX SAVER </Text>
<Text style={{ color: '#989898', fontSize: 16, }}>40-16-63 31793209
          </Text>
          <View style={{flexDirection:'row',justifyContent:"space-between"}}>
          <Text style={{color:'#181818',fontSize:15,fontWeight:'500',marginVertical:10}}></Text>

<View style={{alignItems:'flex-end'}}>
<Text style={{color:'#000',fontSize:22,fontWeight:'400'}}>£0.00</Text>
</View>
          </View>
      </View> */}
      {/* <View style={{marginHorizontal:15,borderBottomWidth:0.5,marginVertical:10}}>
<Text style={{color:Black,fontSize:16,fontWeight:'500'}}>FLEX RATE ISA </Text>
<Text style={{ color: '#989898', fontSize: 16, }}>40-16-63 71799207
          </Text>
          <View style={{flexDirection:'row',justifyContent:"space-between"}}>
          <Text style={{color:'#181818',fontSize:15,fontWeight:'500',marginVertical:10}}></Text>

<View style={{alignItems:'flex-end'}}>
<Text style={{color:'#000',fontSize:22,fontWeight:'400'}}>£0.00</Text>
</View>
          </View>
      </View> */}
      {/* <View style={{marginHorizontal:15}}>
<Text style={{color:Black,fontSize:16,fontWeight:'500'}}>HSBC CURRENCY ACCOUNT</Text>
<Text style={{ color: '#989898', fontSize: 16, }}>40-11-99 92814236
          </Text>
          <View style={{flexDirection:'row',justifyContent:"space-between"}}>
          <Text style={{color:'#181818',fontSize:15,fontWeight:'500',marginVertical:25}}>View currency balances</Text>

<View style={{alignItems:'flex-end'}}>
<Text style={{color:'#000',fontSize:18,fontWeight:'800'}}>€0.00</Text>
<Text style={{color:'#000',fontSize:16}}>€0.00</Text>
</View>
          </View>
      </View> */}
      </View>

      </>
      <View style={{marginTop:15,backgroundColor:White}}>
      <Text style={{color:Black,marginHorizontal:15,marginVertical:10,fontSize:18,fontWeight:'500'}}>Product & Services</Text>

      <FlatList
      data={DATA}
   
      renderItem={({item})=>{
        return(
        <View style={{marginHorizontal:5}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>

<View style={{height:50,width:50,alignItems:'center',justifyContent:'center'}}>
{item.type === 'Ionicons' ? (
        <Icon name={item.icon} size={25} color="black" />
      ) : item.type === 'MaterialCommunityIcons' ? (
        <MaterialCommunityIcons name={item.icon} size={25} color="black" />
      ) : null}
</View>
<View style={{alignItems:"center",justifyContent:'center'}}>
  <Text style={{color:Black,fontSize:15,fontWeight:'400'}}>{item?.name}</Text>
</View>
          </View>
       
       <Icon name={'chevron-forward-outline'} size={25} color="black" style={{marginRight:10}} />
          </View>
          </View>
        )
      }
      
      }
      scrollEnabled={false}
      />
      </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({});
