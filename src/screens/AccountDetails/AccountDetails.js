import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Black, White } from '../../utils/Color';

const AccountDetailsScreen = ({navigation}) => {
    const [selectedTab, setSelectedTab] = useState('Within the UK'); // Default selected tab
    const [phala, setphala] = useState(false)

    // Data for tabs
    const tabData = {
      'Within the UK': {
        IBAN: 'GB71HBUK40167284742532',
        SWIFT: 'HBUKGB4197A',
      },
      'Outside the UK': {
        IBAN: 'FR14BARC20814927864864',
        SWIFT: 'BARCFRPPXXX',
      },
    };
  return (
    <SafeAreaView style={{flex:1,backgroundColor:White}}>

    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        >
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>View and share account details</Text>
      </View>

      {/* Tabs */}
     
      <View style={styles.tabs}>
        {/* Within the UK Tab */}
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => {setSelectedTab('Within the UK'),setphala(false)}}
        >
          <Text
            style={[
              styles.tab,
              selectedTab === 'Within the UK' && styles.activeTab,
            ]}
          >
            Within the UK
          </Text>
        </TouchableOpacity>

        {/* Outside the UK Tab */}
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => {setSelectedTab('Outside the UK'),setphala(true)}}
        >
          <Text
            style={[
              styles.tab,
              selectedTab === 'Outside the UK' && styles.activeTab,
            ]}
          >
            Outside the UK
          </Text>
        </TouchableOpacity>
      </View>
      {/* Account Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
{!phala ? 
            <View>
    <Text style={styles.detailLabels}>Short code </Text>
          <Text style={styles.detailLabel}>40-16-72</Text>
          </View>
          :
          <>
          <View>

          <Text style={styles.detailLabels}>IBAN</Text>
          <Text style={styles.detailLabel}>GB71HBUK40167284742532</Text>
          </View>

          </>
}
          

         
          <TouchableOpacity>
            <Ionicons name="copy-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.detailRow}>
          {
            phala ? 
            <View>

            <Text style={styles.detailLabels}>SWIFT / BIC</Text>
  <Text style={styles.detailLabel}>HBUKGB4197A</Text>
  </View>
:
<View>

<Text style={styles.detailLabels}>Account number</Text>
<Text style={styles.detailLabel}>84742532</Text>
</View>
          }
         
          <TouchableOpacity>
            <Ionicons name="copy-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Warning Message */}
      <View style={styles.warningContainer}>
        <Ionicons name="information-circle-outline" size={18} color="#007AFF" />
        <Text style={styles.warningText}>
          Be careful when sharing your details. Make sure you only share personal information with people you trust.
        </Text>
      </View>

      {/* Share Button */}
      <TouchableOpacity style={styles.shareButton}>
        <Text style={styles.shareButtonText}>Share details</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabButton: {
    width:'50%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  tabs: {
    flexDirection: 'row',
    width:'100%',
  },
  tab: {
    fontSize: 14,
    paddingVertical: 10,
    color: '#888',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    width:'100%',
    textAlign:'center'
  },
  activeTab: {
    color: '#000',
    borderBottomColor: '#FF3B30',
    width:'100%',
    textAlign:'center'
  },
  detailsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingVertical:10
  },
  detailLabels: {
    fontSize: 14,
    color:Black,
  },
  detailLabel: {
    fontSize: 14,
    color: '#888',
  },
  detailValue: {
    fontSize: 14,
    color: '#000',
    flex: 2,
    borderRadius: 5,
    padding: 8,
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 8,
    marginBottom:10
  },
  warningText: {
    fontSize: 13,
    color: '#555',
    marginLeft: 8,
    flex: 1,
  },
  shareButton: {
    marginHorizontal:20,
    borderWidth:1,
    padding: 10,
    borderRadius: 2,
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: 14,
    color: Black,
  },
});

export default AccountDetailsScreen;
