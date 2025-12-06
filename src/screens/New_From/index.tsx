import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const accounts = [
  {
    id: '1',
    title: 'Bank AVC',
    subtitle: '40-12-63 91209884',
    amount: 1.25,
  },
  {
    id: '2',
    title: 'Global Money Account',
    subtitle: '40-12-98 15382238',
    amount: 1.0,
  },
  {
    id: '3',
    title: 'Flex Saver',
    subtitle: '40-16-64 28800645',
    amount: 0.0,
  },
  {
    id: '4',
    title: 'Flex Saver',
    subtitle: '40-16-64 28800689',
    amount: 0.0,
  },
  {
    id: '5',
    title: 'Flex Saver',
    subtitle: '40-16-64 28800677',
    amount: 0.0,
  },
    {
    id: '5',
    title: 'Flex Saver',
    subtitle: '40-16-64 28800618',
    amount: 0.0,
  },
     {
    id: '5',
    title: 'Flex Saver',
    subtitle: '40-16-64 28800642',
    amount: 0.0,
  },
    {
    id: '5',
    title: 'Flex Saver',
    subtitle: '40-16-64 28800561',
    amount: 0.0,
  },
];

export default function SelectAccountScreen({ navigation }: any) {
  const [selected, setSelected] = useState(null);

  const formatAmount = (value) => {
    return `£${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.row} onPress={() => {setSelected(item.id),navigation.navigate('PayeeScreen')}}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>

      <View style={styles.rightSide}>
        <Text style={styles.amount}>{formatAmount(item.amount)}</Text>
        
        <Ionicons
          name={selected === item.id ? 'radio-button-on' : 'radio-button-off'}
          size={22}
          color="#444"
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        {/* ------- HEADER START ------- */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={26} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>From</Text>

        {/* Right side empty to balance layout */}
        <View style={{ width: 26 }} />
      </View>
      {/* ------- HEADER END ------- */}

      <FlatList
        data={accounts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 10 },
  header: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
    marginTop:10,
  },
    headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  row: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 16, fontWeight: '600', color: '#222' },
  subtitle: { fontSize: 13, color: '#777', marginTop: 2 },
  rightSide: { alignItems: 'flex-end' },
  amount: { fontSize: 16, fontWeight: '600', color: '#000' },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 18,
  },
});
