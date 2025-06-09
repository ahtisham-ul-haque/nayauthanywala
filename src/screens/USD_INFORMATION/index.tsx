import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { Black, White } from '../../utils/Color';
const transactions = [
  {
    id: '1',
    date: 'Tuesday, 10 jun 2025',
    newdata:true,
    // price: ' £4.00',
    title: 'MAYUSH BUILDING ',
    subtitle: 'CONSTRUCTION COMPANY',
    amount: -55000,
    type: 'credit',
    iconname: 'person',
  },
   {
    id: '1',
    date: 'Friday, 2 May 2025',
    newdata:true,
    // price: ' £4.00',
    title: 'ALI RAZA ',
    // subtitle: 'From GBP to USD',
    amount: -10.00,
    type: 'debit',
    iconname: 'person',
  },
    {
    id: '1',
    
    title: 'Converted ',
    subtitle: 'From GBP to USD',
    amount: -13.10,
    type: 'credit',
    iconname: 'ban-outline',
  },
    {
    id: '1',
    date: 'Thursday, 1 May 2025',
    title: 'Converted ',
    subtitle: 'From GBP to USD',
    amount: -1.32,
    type: 'credit',
    iconname: 'ban-outline',
  },
  
  
  // {
  //   id: '1',
  //   price: '5.00',
  //   title: 'A Singh',
  //   subtitle: 'other',
  //   amount: 5.0,
  //   type: 'credit',
  //   iconname: 'logo-euro',
  // },
  // {
  //   id: '1',
  //   date: 'Wednesday, 12 Feb 2025',
  //   price: ' £0.00',
  //   title: 'REVERSAL OF 12:02',
  //   subtitle: 'KLARNA',
  //   amount: 81.06,
  //   type: 'credit',
  //   iconname: 'logo-euro',
  // },
  // {
  //   id: '2',
  //   date: '',
  //   title: 'KLARNA',
  //   subtitle: '',
  //   amount: -81.06,
  //   type: 'debit',
  //   iconname: 'eye',
  // },
  // {
  //   id: '3',
  //   date: 'Friday, 07 Feb 2025',
  //   title: 'REVERSAL OF 07-02',
  //   subtitle: 'KLARNA',
  //   amount: 40.53,
  //   type: 'credit',
  //   iconname: 'logo-euro',
  // },
  // {
  //   id: '4',
  //   date: '',
  //   title: 'KLARNA',
  //   subtitle: '',
  //   amount: -40.53,
  //   type: 'debit',
  //   iconname: 'eye',
  // },
  // {
  //   id: '5',
  //   date: '',
  //   title: 'REVERSAL OF 07-02',
  //   subtitle: 'KLARNA',
  //   amount: 89.93,
  //   type: 'credit',
  //   iconname: 'logo-euro',
  // },
  // {
  //   id: '6',
  //   date: '',
  //   title: 'KLARNA',
  //   subtitle: '',
  //   amount: -89.93,
  //   type: 'debit',
  //   iconname: 'eye',
  // },
  // {
  //   id: '7',
  //   date: 'Friday, 31 Jan 2025',
  //   title: 'Harpreet Singh',
  //   subtitle: 'abc',
  //   amount: -188.02,
  //   type: 'debit',
  //   iconname: 'arrow-up-circle',
  // },
];
const data = [
  { label: 'Add Money', icons: 'arrow-up-circle-outline', id: '1',screen:'PayScreen' },
  { label: 'Convert or Withdrae', icons: 'newspaper-outline', screen:'PayScreen'},
  { label: 'View and Share account details', icons: 'wallet' ,screen:'BankAccountScreen'},
  { label: 'More', icons: 'ellipsis-vertical',screen:'PayScreen' },
];
const TransactionItem = ({ item }: any) => (
  <View style={styles.itemContainer}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        paddingVertical:10
      }}>
      <View style={[styles.circles]}>
        <Icon name={item?.iconname} size={20} color={Black} />
      </View>
      <View style={{ width: '58%' }}>
        <Text style={styles.title}>{item.title}</Text>
        {item.subtitle &&
        
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        }
      </View>
      <Text
  style={[
    styles.amount,
    { color: item.type === 'credit' ? '#007e33' : '#000' },
  ]}>
  {item.type === 'credit' ? '+' : '-'}£
  {Math.abs(item.amount).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}
</Text>
    </View>

    {/* <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      {item.subtitle ? (
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      ) : null}
    </View> */}
  </View>
);
export default function USD({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={20} color={Black} style={{}} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Account information</Text>
        <Icon
          name="menu"
          size={20}
          color={Black}
          style={{ alignSelf: 'flex-end' }}
        />
      </View>
      <ScrollView>

      <View
        style={{
          height: 50,
          justifyContent: 'center',
          marginHorizontal: 10,
        }}>
        <Text style={{ color: Black, fontSize: 15,  }}>
           US Dollar
          {/* BANK A/C */}
        </Text>
        {/* <Text style={{ color: Black, fontSize: 15 }}> 40-16-64 01757407</Text> */}
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 10,
          alignItems: 'center',
          borderBottomWidth: 1,
        }}>
        <Text style={{ color: Black, fontSize: 14 }}></Text>
        <View>
          <Text style={{ color: Black, fontSize: 22, fontWeight: '800' }}>
            55,004.
            <Text style={{ color: Black, fontSize: 15, fontWeight: '500' }}>
              51 USD
            </Text>
          </Text>
          <Text style={{ color: Black, fontSize: 16,  }}>
            =£40,648.
            <Text style={{ color: Black, fontSize: 13, fontWeight: '500' }}>
              78
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        {data.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item?.screen)}
            key={index}
            style={styles.item}>
            <View style={styles.circle}>
              <Icon
                name={item?.icons}
                size={20}
                color={item?.id == '1' ? 'red' : Black}
              />
            </View>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{marginTop:40,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:18}}>
<View style={{flexDirection:'row',alignItems:'center'}}>
    <View style={{height:50,width:50,borderRadius:50,backgroundColor:'#E8E8E8',alignItems:'center',justifyContent:'center'}}>
        <Icon name='wallet' size={28} color={'red'}/>
    </View>
    <View><Text style={{color:Black,fontSize:15,marginLeft:16}}>Global Money card</Text></View>
</View>
  <Icon name='arrow-forward' size={22} color={Black}/>
      </View>
      <View style={{height:1,borderWidth:1,marginTop:20,borderColor:'#DCDCDC'    }}/>
      <View style={{marginHorizontal:20,flexDirection:'row',justifyContent:'space-between',marginVertical:25}}>
        <Text style={{color:Black,fontSize:17}}>Latest transactions</Text>
        <Icon name='search' size={20} color={Black}/>
      </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity>
        <Text style={{ color: 'black', marginHorizontal: 80 }}>USD</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ color: 'black', marginHorizontal: 80 }}>All</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', position: 'absolute', bottom: -5, left: 0, right: 0, }}>
        <View style={{ flex: 1, height: 3, backgroundColor: 'red' }} />
        <View style={{ flex: 1, height: 3, backgroundColor: 'black' }} />
      </View>

    
    </View>
    <View style={{marginVertical:5,height:30,backgroundColor:'#DCDCDC',justifyContent:'center'}}>
    <Text style={{color:Black,marginHorizontal:20}}>Transactions</Text>
    </View>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
      ListFooterComponent={
        <View style={{flexDirection:'row',alignItems:'center'}}>

        <Text
          onPress={() => navigation.navigate('Transactions')}
          style={styles.viewMore}>  View all transactions ->
        </Text>
          </View>
      }
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <>
            {item.date ? (
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={styles.date}>{item.date}</Text>
                
                <Text style={styles.date}>{item.price}</Text>
              </View>
            ) : null}
            <TransactionItem item={item} />
          </>
        )}
      />
      </ScrollView>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  headerContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    paddingLeft: 10,
    width: '90%',
  },
  listContent: { paddingHorizontal: 16, paddingBottom: 20 },
  date: { fontSize: 14, color: '#666', marginTop: 20, marginBottom: 8 },
  itemContainer: {},
  title: { fontSize: 14, fontWeight: '500', color: '#222', marginLeft: 10 },
  subtitle: { fontSize: 13, color: '#777', marginLeft: 10 },
  amount: { fontSize: 16, fontWeight: '600',textAlign:'right',width:'30%' },
  viewMore: {
    color: '#000',
    textAlign:'center',
    fontSize: 13,
    paddingVertical: 16,
    width:'95%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute items evenly
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    alignItems: 'center',
    flex: 1,
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: 10,
  },
  circles: {
    height: 40,
    width: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: 10,
  },

  label: {
    color: 'black',
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'center',
  },
});
