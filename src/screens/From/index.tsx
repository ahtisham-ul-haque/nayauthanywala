import { StatusBar, StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Black, White } from '../../utils/Color'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the circular radio icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // For the circular radio icon


const accounts = [
,
];
const From = ({navigation}) => {
    const [selectedAccount, setSelectedAccount] = useState(null);

    const handleSelectAccount = (id,item) => {
      
      setSelectedAccount(id);
    console.log("-------",item);
    navigation.navigate('To', { item: "dssds" });
    };
  
    const renderAccountItem = ({ item }) => (
      <TouchableOpacity style={styles.accountItem} onPress={() => handleSelectAccount(item.id,item)}>
        <View>
          <Text style={styles.accountName}>{item.name}</Text>
          <Text style={styles.accountNumber}>{item.number}</Text>
        </View>
        <View style={styles.accountBalanceContainer}>
          <Text style={styles.accountBalance}>{item.balance}</Text>
          <Icon
            name={selectedAccount === item.id ? 'radio-button-checked' : 'radio-button-unchecked'}
            size={24}
            color="#000"
          />
        </View>
      </TouchableOpacity>
    );
  
  return (
    <SafeAreaView style={{backgroundColor:White,flex:1}}>
        <StatusBar backgroundColor={White} barStyle={'dark-content'}/>
    <View style={{height:50,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,backgroundColor:White,justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,flexDirection:'row'}}>
    <View style={{flexDirection:'row'}}>
<TouchableOpacity onPress={()=>navigation.goBack()}>

<Icon  name='arrow-back' color={Black} size={25}/>
</TouchableOpacity>
<View style={{marginLeft:20}}>
<Text style={{color:Black,fontSize:16,fontWeight:'600'}}>FROM</Text>
</View>
    </View>
    <View>
    <MaterialCommunityIcons  name='dots-vertical' color={Black} size={20}/>
    </View>
    </View>
   
    <TouchableOpacity 
    onPress={()=>navigation.navigate('To')}
    style={styles.accountItem} >
        <View>
          <Text style={styles.accountName}>BANK ACCOUNT</Text>
          <Text style={styles.accountNumber}>40-12-62 53812510</Text>
        </View>
        <View style={styles.accountBalanceContainer}>
          <Text style={styles.accountBalance}>£2.00</Text>
          <Icon
            name={'radio-button-checked'}
            size={24}
            color="#000"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.accountItem}     onPress={()=>navigation.navigate('To_1')}>
        <View>
          <Text style={styles.accountName}>GLOBAL MONEY ACCOUNT</Text>
          <Text style={styles.accountNumber}>40-16-72 33866556</Text>
        </View>
        <View style={styles.accountBalanceContainer}>
          <Text style={styles.accountBalance}>£2.00</Text>
          <Icon
            name={'radio-button-unchecked'}
            size={24}
            color="#000"
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default From

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 16,
      },
      accountItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        marginHorizontal:10
      },
      accountName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
      },
      accountNumber: {
        fontSize: 14,
        color: '#7E7E7E',
        marginTop: 4,
      },
      accountBalanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      accountBalance: {
        fontSize: 16,
        color: '#000',
        marginRight: 8,
      },
})