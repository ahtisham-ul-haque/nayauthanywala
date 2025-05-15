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
    date: 'Wednesday, 7 May 2025',
    price: ' £27.72',
    title: 'NISA LOCAL ',
    amount: - 15.00,
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
  },
  {
    id: '1',
    price: ' £6.00',
    title: 'WESTFIELD STRATFORD',
    // subtitle: 'WESTFIELDS',
    amount: - 6.00,
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
  },
    {
    id: '1',
    price: ' £6.00',
    title: 'INDI-GO RASOL',
    subtitle: 'WESTFIELDS',
    amount: - 6.00,
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
  },
   {
    id: '1',
    price: ' £6.00',
    title: 'SQ *MRS CHEW* CHINESE',
    subtitle: 'KL',
    amount: - 9.90,
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
  },
    {
    id: '1',
    // date: 'Wednesday, 7 May 2025',
    price: ' £27.72',
    title: 'NISA LOCAL ',
    amount: - 5.98,
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
  },
   {
    id: '1',
    date: 'Tuesday, 6 May 2025',
    price: ' £48.70',
    title: 'IMAAN PERMIUM QUALITY Vajda ',
    // subtitle: 'sister',
    amount: -11.30,
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
  },
   {
    id: '1',
    // date: 'Tuesday, 6 May 2025',
    price: ' £48.70',
    title: 'Added ',
    subtitle: 'From 40-16-64 01757407',
    amount: -56.00,
       type: 'credit',
    iconname: 'albums-outline',
  },
   {
    id: '1',
    date: 'Friday, 2 May 2025',
    price: ' £4.00',
    title: 'Converted ',
    subtitle: 'From GBP to USD',
    amount: -10.00,
    type: 'debit',
    iconname: 'person',
  },
   {
    id: '1',
    // date: 'Tuesday, 6 May 2025',
    price: ' £48.70',
    title: 'Added ',
    subtitle: 'From BANK A/C',
    amount: -14.00,
       type: 'credit',
    iconname: 'albums-outline',
  },
     {
    id: '1',
    date: 'Friday, 1 May 2025',
    price: ' £0.00',
    title: 'Converted ',
    subtitle: 'From GBP to USD',
    amount: -1.00,
    type: 'debit',
    iconname: 'person',
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
  { label: 'Add Money', icons: 'arrow-up-circle-outline', id: '1' },
  { label: 'Convert or Withdrae', icons: 'newspaper-outline' },
  { label: 'View and Share account details', icons: 'wallet' },
  { label: 'More', icons: 'ellipsis-vertical' },
];
const TransactionItem = ({ item }: any) => (
  <View style={styles.itemContainer}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        paddingVertical: 20,
      }}>
      <View style={[styles.circles]}>
        <Icon name={item?.iconname} size={20} color={Black} />
      </View>
      <View style={{ width: '70%' }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
      <Text
        style={[
          styles.amount,
          { color: item.type === 'credit' ? '#007e33' : '#000' },
        ]}>
        {item.type === 'credit' ? '+' : '-'}£{Math.abs(item.amount).toFixed(2)}
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
export default function Gratish_British_Pound({ navigation }: any) {
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
          marginTop: 20,
        }}>
        <Text style={{ color: Black, fontSize: 15,  }}>
            Great British Pounds
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
            £4.
            <Text style={{ color: Black, fontSize: 15, fontWeight: '500' }}>
              92
            </Text>
          </Text>
          {/* <Text style={{ color: Black, fontSize: 22, fontWeight: '800' }}>
            £0.
            <Text style={{ color: Black, fontSize: 15, fontWeight: '500' }}>
              00
            </Text>
          </Text> */}
        </View>
      </View>
      <View style={styles.row}>
        {data.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('PayScreen')}
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
      <View style={{marginHorizontal:20,flexDirection:'row',justifyContent:'space-between',marginVertical:25}}>
        <Text style={{color:Black}}>Latest transactions</Text>
        <Icon name='search' size={20} color={Black}/>
      </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity>
        <Text style={{ color: 'black', marginHorizontal: 80 }}>GBP</Text>
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
          style={styles.viewMore}> View all transactions ->
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
  title: { fontSize: 16, fontWeight: '600', color: '#222', marginLeft: 10 },
  subtitle: { fontSize: 13, color: '#777', marginLeft: 10 },
  amount: { fontSize: 16, fontWeight: '600' },
  viewMore: {
    color: '#000',
    fontSize: 13,
    paddingVertical: 16,
    width:'95%',
    textAlign:'center'
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
    backgroundColor: White,
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
