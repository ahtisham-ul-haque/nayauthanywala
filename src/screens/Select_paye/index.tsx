import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PayeeScreen = ({navigation}:any) => {
  const [selected, setSelected] = useState(null);

  const payees = [
    {
      id: '1',
      name: 'Marianas Moldovean',
      number: '30-94-55 34477563',
      tag: 'tickets',
    },
    {
      id: '2',
      name: 'Mihai Roman',
      number: '04-29-09 67863175',
      tag: 'owner',
    },
    {
      id: '3',
      name: 'Mohammedabbas shai',
      number: '40-12-63 60315621',
      tag: 'Friend',
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => setSelected(item.id)}
      activeOpacity={0.7}
    >
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.number}>{item.number}</Text>
        <Text style={styles.tag}>{item.tag}</Text>
      </View>

      {/* Radio Button */}
      <View style={styles.radioOuter}>
        {selected === item.id && <View style={styles.radioInner} />}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      
      {/* ────────────────────────── Header ────────────────────────── */}
      <View style={styles.header}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>To</Text>

        <TouchableOpacity>
          <MaterialIcons name="more-vert" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Add Payee Button */}
      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="add-circle-outline" size={20} color="#2E7CF6" />
        <Text style={styles.addText}>Add a new payee</Text>
      </TouchableOpacity>

      {/* List */}
      <FlatList
        data={payees}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default PayeeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginBottom: 15,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color:'#000'
  },

  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  addText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#2E7CF6',
    fontWeight: '500',
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },

  name: {
    fontSize: 15,
    fontWeight: '600',
    color:'#000'
  },

  number: {
    fontSize: 13,
    color: '#555',
  },

  tag: {
    fontSize: 12,
    color: '#999',
  },

  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioInner: {
    width: 12,
    height: 12,
    backgroundColor: '#2E7CF6',
    borderRadius: 6,
  },
});
