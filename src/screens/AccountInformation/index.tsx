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
    date: 'Sunday, 11 May 2025',
    price: ' £0.57',
    title: 'GABOR BARANY ',
    subtitle: 'Wed jewl',
    amount: - 5.00,
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
  },
   {
    id: '1',
    date: 'Thursday, 08 May 2025',
    price: ' £5.57',
    title: 'krisztina Vajda ',
    subtitle: 'sister',
    amount: -10.00,
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
  },
   {
    id: '1',
    date: 'Tuesday, 06 May 2025',
    price: ' £15.57',
    title: '401298 81051709 ',
    subtitle: 'INTERNET TRANSFER',
    amount: -56.00,
    type: 'debit',
    iconname: 'person',
  },
  {
    id: '7',
    price: '5.00',
    title: 'Ali Raza',
    subtitle: 'Sent from Revolut',
     amount: 71.00,
    type: 'credit',
    iconname: 'logo-euro',
  },
    {
    id: '1',
    date: 'Friday, 02 May 2025',
    price: ' £0.57',
    title: 'GABOR BARANY ',
    subtitle: 'GPC01CSCM1',
    amount: - 14.00,
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
  },
  {
    id: '7',
    price: '5.00',
    title: 'Ali Raza',
    subtitle: 'Sent from Revolut',
     amount: 14.00,
    type: 'credit',
    iconname: 'logo-euro',
  },
    {
    id: '1',
    date: 'Thursday, 01 May 2025',
    price: ' £0.57',
   title: '401298 81051709 ',
    subtitle: 'INTERNET TRANSFER',
    amount: -1.00,
    type: 'debit',
    iconname: 'person',
  },
    {
    id: '1',
    date: 'Thursday, 28 Apr 2025',
    price: ' £1.57',
   title: 'TESCO STORES 2380',
    subtitle: 'DERBY',
  amount: 10.00,
    type: 'credit',
     iconname: 'arrow-up-circle-outline',
  },
   {
    id: '1',
    date: 'Friday, 25 Apr 2025',
    price: ' £1.57',
   title: 'istvan pataki',
    subtitle: 'Family',
    amount: -8.43,
    type: 'debit',
    iconname: 'arrow-up-circle-outline',
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
  { label: 'Pay or transfer', icons: 'arrow-up-circle-outline', id: '1' },
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
          height: 50,
          justifyContent: 'center',
          marginHorizontal: 10,
          marginTop: 20,
        }}>
        <Text style={{ color: Black, fontSize: 17, fontWeight: '800' }}>
          BANK A/C
        </Text>
        <Text style={{ color: Black, fontSize: 15 }}> 40-16-64 01757407</Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 10,
          alignItems: 'center',
          borderBottomWidth: 1,
          paddingVertical: 20,
        }}>
        <Text style={{ color: Black, fontSize: 14 }}>Arranged overdraft</Text>
        <View>
          <Text style={{ color: Black, fontSize: 22, fontWeight: '800' }}>
            £0.
            <Text style={{ color: Black, fontSize: 15, fontWeight: '500' }}>
              57
            </Text>
          </Text>
          <Text style={{ color: Black, fontSize: 22, fontWeight: '800' }}>
            £0.
            <Text style={{ color: Black, fontSize: 15, fontWeight: '500' }}>
              00
            </Text>
          </Text>
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
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
      ListFooterComponent={
        <View style={{flexDirection:'row',alignItems:'center'}}>

<Icon name='information-circle' color={'blue'} size={25}/>
        <Text
          onPress={() => navigation.navigate('Transactions')}
          style={styles.viewMore}> To View more transactions. go to your  statement
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
    width:'90%',
  },
});
