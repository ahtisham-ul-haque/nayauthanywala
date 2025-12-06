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
    date: 'Thursday, 04 Dec 2025',
    price: ' £1.25',
    title: '401298 15382238 ',
    subtitle: 'INTERNET TRANSFER',
    amount:  "1.00",
    type: 'debit',
    iconname: 'person',
  },
     {
    id: '1',
    date: 'Thursday, 25 Nov 2025',
    price: ' £2.25',
    title: 'Marianas Moldovean',
    subtitle: 'tickts',
    amount:  "15.00",
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
  },
     {
    id: '1',
    date: 'Thursday, 24 Nov 2025',
    price: ' £17.25',
    title: 'M Moldoveanu',
    subtitle: 'FRIEND',
    amount:  "7.00",
    type: 'credit',
  iconname: 'logo-euro',
  },
  {
    id: '1',
    date: 'Wednesday, 19 Nov 2025',
    price: ' £10.25',
    title: 'Mohammedabbas shai ',
    subtitle: 'Friend',
    amount:  "1,100,00",
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
  },
   {
     id: '1',
    price: ' £6.00',
    title: 'REVERSAL OF 19:11',
    // subtitle: 'WESTFIELDS',
    amount:  "490.00",
   
    type: 'credit',
    iconname: 'logo-euro',
  },
    {
     id: '1',
    price: ' £6.00',
    title: 'Mihai Roman',
    subtitle: 'Owner',
    amount:  "490.00",
   
    type: 'debit',
      iconname: 'arrow-up-circle-outline',
  },
    {
     id: '1',
    price: ' £6.00',
    title: 'Mihai Roman',
    subtitle: 'Owner',
    amount:  "500.00",
   
    type: 'debit',
      iconname: 'arrow-up-circle-outline',
  },
   {
     id: '1',
    price: ' £6.00',
    title: 'Mihai Roman',
    subtitle: 'Owner',
    amount:  "400.00",
   
    type: 'debit',
      iconname: 'arrow-up-circle-outline',
  },
   {
     id: '1',
    price: ' £6.00',
    title: 'Mihai Roman',
    subtitle: 'Owner',
    amount:  "490.00",
   
    type: 'debit',
      iconname: 'arrow-up-circle-outline',
  },
   {
     id: '1',
    price: ' £6.00',
    title: 'Mihai Roman',
    subtitle: 'Owner',
    amount:  "700.00",
   
    type: 'debit',
      iconname: 'arrow-up-circle-outline',
  },
  
  
  //   {
  //   id: '1',
  //   date: 'Thursday, 22 May 2025',
  //   price: ' £2.45',
  //   title: 'Zettle... *Westex ser ',
  //   subtitle: 'Hayes',
  //   amount:  "6.00",
  //   type: 'debit',
  //   iconname: 'arrow-up-circle-outline',
  // },

  //   {
  //   id: '1',
  //   date: 'Wednesday, 21 May 2025',
  //   price: ' £8.45',
  //  title: '401672 53867641 ',
  //   subtitle: 'INTERNET TRANSFER',
  //   amount:" 4.00",
  //   type: 'credit',
  //   iconname: 'person',
  // },
  //   {
  //   id: '1',
  //   date: 'Monday, 19 May 2025',
  //   price: ' £4.45',
  //  title: '401672 53867641 ',
  //   subtitle: 'INTERNET TRANSFER',
  //   amount:" 3.00",
  //   type: 'credit',
  //   iconname: 'person',
  // },
  //  {
  //   id: '1',
  //   date: 'Friday, 16 May 2025',
  //   price: ' £1.45',
  //  title: 'Paramjit singh vid ',
  //   subtitle: 'O',
  //   amount:" 1.00",
  //   type: 'debit',
  //   iconname: 'arrow-up-circle-outline',
  // },
  //  {
  //   id: '1',
  //   date: 'Thursday, 15 May 2025',
  //   price: ' £2.45',
  //  title: '401672 53867641 ',
  //   subtitle: 'INTERNET TRANSFER',
  //   amount:" 118.00",
  //   type: 'debit',
  //   iconname: 'person',
  // },
   
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
  { label: 'Pay or transfer', icons: 'arrow-up-circle', id: '1',screen:'BankAccountScreen' },
  { label: 'View Statement', icons: 'newspaper-outline',screen:'BankAccountScreen'  },
  { label: 'Account Details', icons: 'wallet' ,screen:'BankAccountScreen' },
  { label: 'More', icons: 'ellipsis-vertical',screen:'BankAccountScreen'  },
];
const TransactionItem = ({ item }: any) => (
  <View style={styles.itemContainer}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10
        
      }}>
        <View style={{flexDirection:'row',}}>

      <View style={[styles.circles]}>
        <Icon name={item?.iconname} size={20} color={Black} />
      </View>
      <View style={{ width: '65%',justifyContent:'center' }}>
        <Text style={styles.title}>{item.title}</Text>
        {item?.subtitle &&
        
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        }
         <Text
        style={[
          styles.amount,
          { color: item.type === 'credit' ? '#007e33' : '#000' },
        ]}>
        {item.type === 'credit' ? '+'   : '-'} £{item?.amount}
      </Text>
      </View>
        </View>

     
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
export default function AccountScreen({ navigation }: any) {
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
          marginHorizontal: 10,
          borderBottomWidth: 1,
          paddingVertical: 20,
          borderColor:'#D3D3D3'
        }}>
            <View>
        <View>
                 <Text style={{ color: Black, marginHorizontal: 10, fontSize: 16 }}>
                   BANK A/C
                 </Text>
               </View>
               <View>
               
                 <Text style={{ color: Black, marginHorizontal: 10 }}>
                   40-16-64 10261300{' '}
                 </Text>
               </View>
            </View>
             <View>
                  
        <Text style={{ color: Black, fontSize: 14,marginTop:30,marginHorizontal: 10, }}>Arranged overdraft</Text>
        <View style={{alignSelf:"flex-end",bottom:40}}>
          <Text style={{ color: Black, fontSize: 22, fontWeight: '500' }}>
            <Text style={{ color: Black, fontSize: 18, fontWeight: '500'}}>£ </Text>
            0.
            <Text style={{ color: Black, fontSize: 15, fontWeight: '500' }}>
              05
            </Text>
          </Text>
          <Text style={{ color: Black, fontSize: 17, fontWeight: '500' }}>
            £ 0.
            <Text style={{ color: Black, fontSize: 15, fontWeight: '500' }}>
              00
            </Text>
          </Text>
        </View>
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
                size={22}
                color={item?.id == '1' ? 'red' : Black}
              />
            </View>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
        <TouchableOpacity
                  onPress={() => navigation.navigate('ManageCard')}
                  style={{
                    margin: 10,
                    marginHorizontal: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop:20
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{height:50,width:50,backgroundColor:'#F8F8F8',borderRadius:30,alignItems:'center',justifyContent:'center'}}>

                    <Icon name="card" color={'#D2042D'} size={22} />
                    </View>
                    <Text style={{ color: Black, paddingLeft: 10, fontSize: 15 }}>
                      Manage card
                    </Text>
                  </View>
                    <Icon
                      name="arrow-forward-outline"
                      color={Black}
                      size={22}
                    />
                </TouchableOpacity>

                 <View style={{marginHorizontal:20,flexDirection:'row',justifyContent:'space-between',}}>
                        <Text style={{color:Black,fontSize:17}}>Latest transactions</Text>
                        <Icon name='search' size={20} color={Black}/>
                      </View>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
      ListFooterComponent={
        <View style={{flexDirection:'row',alignItems:'center'}}>

{/* <Icon name='information-circle' color={'blue'} size={25}/> */}
        <Text
          onPress={() => navigation.navigate('Transactions')}
          style={styles.viewMore}>  View more transactions ->
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
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#353935',
    paddingLeft: 10,
    width: '90%',
  },
  listContent: { paddingHorizontal: 16, paddingBottom: 20 },
  date: { fontSize: 14, color: '#666', marginTop: 20, marginBottom: 8 },
  itemContainer: {},
  title: { fontSize: 14, fontWeight: '600', color: '#222', marginLeft: 10 },
  subtitle: { fontSize: 13, color: '#777', marginLeft: 10 },
  amount: { fontSize: 13, fontWeight: '600',marginLeft:10 },
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
    marginHorizontal:20
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor:"#F8F8F8",
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
    width:'90%',
  },
});
