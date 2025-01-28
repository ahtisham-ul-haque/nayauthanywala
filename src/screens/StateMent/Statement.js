import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Black } from '../../utils/Color';

const NoStatementsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity  onPress={()=>navigation.goBack()}>

        <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Statements</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Ionicons name="information-circle-outline" size={64} color="#007AFF" />
        <Text style={styles.title}>No statements</Text>
        <Text style={styles.subtitle}>
          You don't have any statements to view right now.
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity 
       onPress={()=>navigation.goBack()}
      style={styles.button}>
        <Text style={styles.buttonText}>Back to your account</Text>
      </TouchableOpacity>

      {/* Bottom Tab */}
      <View style={styles.tabBar}>
        <View style={styles.tabItem}>
          <Ionicons name="wallet" size={24} color="red" />
          <Text style={[styles.tabText, { color: 'red' }]}>Accounts</Text>
        </View>
        <View style={styles.tabItem}>
          <Ionicons name="swap-horizontal-outline" size={24} color="gray" />
          <Text style={styles.tabText}>Pay & Transfer</Text>
        </View>
        <View style={styles.tabItem}>
          <Ionicons name="bar-chart-outline" size={24} color="gray" />
          <Text style={styles.tabText}>Plan</Text>
        </View>
        <View style={styles.tabItem}>
          <Ionicons name="help-circle-outline" size={24} color="gray" />
          <Text style={styles.tabText}>Support</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color:Black,
    textAlign:'center',
    width:'90%'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Black,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    margin: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: Black,
    fontSize: 16,
    fontWeight: '600',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
});

export default NoStatementsScreen;
