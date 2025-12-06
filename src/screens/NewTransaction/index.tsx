import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { Black, LightGrey, White } from '../../utils/Color';
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
   {
     id: '1',
    price: ' £6.00',
    title: 'Mihai Roman',
    subtitle: 'Owner',
    amount:  "700.00",
   
    type: 'debit',
      iconname: 'arrow-up-circle-outline',
  },
   {
     id: '1',
    price: ' £6.00',
    title: 'ADVICE CONFIRMS',
    subtitle: 'RB191150PTKD5XI',
    amount:  "4,082.94",
   
    type: 'debit',
     iconname: 'logo-euro',
  },
    {
    id: '1',
    date: 'Tuesday , 18 Nov 2025',
    price: ' £0.31',
    title: 'Mohammedabbas shai ',
    subtitle: 'Friend',
    amount:  "4.89",
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
  },
   {
    id: '1',
    price: ' £0.31',
    title: 'M Moldoveanu ',
    subtitle: 'Friend',
  amount:  "5.00",
    type: 'credit',
     iconname: 'logo-euro',
  },
   {
    id: '1',
    date: 'Sunday , 16 Nov 2025',
    price: ' £0.31',
    title: 'Mihai Roman ',
    subtitle: 'Owner',
    amount:  "2.80",
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
  },
    {
    id: '1',
    date: 'Saturday , 15 Nov 2025',
    price: ' £3.00',
    title: 'SIDDIKA A ',
    subtitle: 'PAY',
    amount:  "2.80",
    type: 'credit',
    iconname: 'arrow-up-circle-outline',
  },
  //   {
  //     id: '8',
  //     date: '',
  //     title: 'A Singh',
  //     subtitle: '',
  //     amount: 5.0,
  //     type: 'credit',
  //   },
];
const data = [
  { label: 'Pay or transfer', icons: 'arrow-up-circle-outline' },
  { label: 'View Statement', icons: 'newspaper-outline' },
  { label: 'Account Details', icons: 'wallet' },
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
        <Icon name={item?.iconname} size={20} color={Black} style={{}} />
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
  </View>
);
export default function Transactions({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.headerContainer}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        >

        <Icon name="arrow-back" size={20} color={Black} style={{}} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Transcations</Text>
        <Icon
          name="menu"
          size={20}
          color={Black}
          style={{ alignSelf: 'flex-end' }}
        />
      </View>

      <View
        style={{
          backgroundColor: '#E0E0E0',
          height: 40,
          marginHorizontal: 20,
          borderRadius: 10,
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon
          name="search"
          color={'#989898'}
          size={20}
          style={{ paddingLeft: 10 }}
        />
        <Text style={{ color: '#989898' }}>Search</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            height: 35,
            width: 46,
            backgroundColor: Black,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20,
            borderRadius: 30,
          }}>
          <Text style={{ color: White }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 30,
            paddingHorizontal: 10,
            backgroundColor: White,
            borderWidth: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20,
            borderRadius: 30,
          }}>
          <Text style={{ color: Black }}>Money In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 30,
            paddingHorizontal: 10,
            backgroundColor: White,
            borderWidth: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20,
            borderRadius: 30,
          }}>
          <Text style={{ color: Black }}>Money Out</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
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
      {/* <Text style={styles.viewMore}>View more transactions →</Text> */}
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
    textAlign: 'center',
    color: '#007aff',
    fontSize: 16,
    paddingVertical: 16,
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
