import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Black, White } from '../../utils/Color';
import { SafeAreaView } from 'react-native-safe-area-context';

const ManageCardScreen = ({navigation}) => {
  const [isCardFrozen, setIsCardFrozen] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>

    <View >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        >

        <Ionicons
          name="chevron-back"
          size={24}
          color={Black}
          style={styles.backIcon}
        />
        </TouchableOpacity>
        <Text style={styles.headerText}>Manage card</Text>
      </View>

      {/* Card Details */}
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>Global Money Debit Card</Text>
        <Text style={styles.cardSubtitle}>Card ending 2427</Text>
        <Text style={styles.cardName}>Gaurav Saini</Text>
      </View>

      {/* Add to Apple Wallet */}
      <TouchableOpacity style={styles.walletButton}>
        <Ionicons
          name="logo-apple"
          size={20}
          color="white"
          style={styles.appleIcon}
        />
        <Text style={styles.walletText}>Add to Apple Wallet</Text>
      </TouchableOpacity>

      {/* Options */}
      <View style={styles.options}>
        {/* Freeze Card */}
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Freeze card</Text>
          <Switch
            value={isCardFrozen}
            onValueChange={(value) => setIsCardFrozen(value)}
            trackColor={{ false: 'gray', true: '#007AFF' }} // Background color for OFF and ON states
            thumbColor={isCardFrozen ? 'white' : White}
            
          />
        </View>

        {/* Gambling Restrictions */}
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Gambling restrictions</Text>
          <Ionicons name="chevron-forward" size={18} color="gray" />
        </TouchableOpacity>

        {/* View Card Details */}
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>View card details</Text>
          <Ionicons name="chevron-forward" size={18} color="gray" />
        </TouchableOpacity>

        {/* View PIN */}
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>View PIN</Text>
          <Ionicons name="chevron-forward" size={18} color="gray" />
        </TouchableOpacity>

        {/* Report Lost or Stolen */}
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Report lost, stolen or damaged</Text>
          <Ionicons name="chevron-forward" size={18} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  backIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    color:Black,
    textAlign:'center',
    fontWeight:'700',
    width:'80%'
  },
  cardDetails: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    alignItems:'center'
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:Black
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  cardName: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  walletButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6A6D7C',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  appleIcon: {
    marginRight: 8,
  },
  walletText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  options: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  optionText: {
    fontSize: 16,
    color:Black
  },
});

export default ManageCardScreen;
