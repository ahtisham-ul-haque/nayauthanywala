import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CurrenciesScreen = ({navigation}) => {
  // Currency Data
  const currencies = [
    { name: 'UAE Dirham', value: '0.00 AED', usdValue: '= 0.00 USD' },
    { name: 'Australian Dollar', value: '0.00 AUD', usdValue: '= 0.00 USD' },
    { name: 'Canadian Dollar', value: '0.00 CAD', usdValue: '= 0.00 USD' },
    { name: 'Swiss Franc', value: '0.00 CHF', usdValue: '= 0.00 USD' },
    { name: 'Chinese Renminbi', value: '0.00 CNY', usdValue: '= 0.00 USD' },
    { name: 'Czech Koruna', value: '0.00 CZK', usdValue: '= 0.00 USD' },
    { name: 'Danish Krone', value: '0.00 DKK', usdValue: '= 0.00 USD' },
  ];

  // Render each currency item
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View>
        <Text style={styles.currencyName}>{item.name}</Text>
        <Text style={styles.currencyValue}>{item.value}</Text>
        <Text style={styles.usdValue}>{item.usdValue}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#000" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
        <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between',marginTop:20}}>

      <Text style={styles.title}>More currencies</Text>
      <TouchableOpacity
      onPress={()=>navigation.goBack()}
      >

      <Ionicons name="close-outline" size={20} color="#000" />
      </TouchableOpacity>
        </View>
      <FlatList
        data={currencies}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  currencyName: {
    fontSize: 16,
    color: '#000',
    marginBottom: 4,
  },
  currencyValue: {
    fontSize: 14,
    color: '#555',
  },
  usdValue: {
    fontSize: 14,
    color: '#888',
  },
});

export default CurrenciesScreen;
