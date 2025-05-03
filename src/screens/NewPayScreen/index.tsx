import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Black, White } from '../../utils/Color';

const PayScreen = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* Top Navigation Bar */}
      <View style={styles.topNav}>
        <Icon
          name="home"
          color={Black}
          size={25}
          style={{ paddingRight: 10, borderRightWidth: 1 }}
        />
        <Text style={[styles.navItem, styles.activeNav]}>Pay</Text>
        <Text style={styles.navItem}>Cards</Text>
        <Text style={styles.navItem}>Invest</Text>
        <MaterialIcon name="menu" size={24} style={styles.menuIcon} />
      </View>

      {/* Body Scroll */}
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{
            backgroundColor: White,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text style={styles.header}>Recent payees</Text>
          <View style={styles.recentPayees}>
            {['WL', 'HS', 'HK', 'HS'].map((initials, index) => (
              <View key={index} style={styles.payeeCard}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>{initials}</Text>
                </View>
                <Text style={styles.payeeText}>
                  {initials === 'WL'
                    ? 'WOLVES SERVICE LTD'
                    : initials === 'HK'
                    ? 'Harmeet Kaur'
                    : 'Harpreet Singh'}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Send Money Section */}
        <Text style={styles.header}>Send money</Text>
        <View style={styles.grid}>
          <GridItem navigation={navigation}  icon="exchange" label="Between your HSBC accounts" />
          <GridItem navigation={navigation} icon="user" label="Pay someone in the UK" />
          <GridItem  navigation={navigation}icon="file-text" label="Pay a bill or company" />
          <GridItem icon="globe" label="International payments" />
        </View>

        {/* Global Money Section */}
        <Text style={styles.header}>Global Money</Text>
        <View style={styles.grid}>
          <GridItem icon="money" label="Add, convert or withdraw" />
          <GridItem icon="users" label="Manage Global Money payees" />
        </View>

        {/* More Actions Section */}
        <Text style={styles.header}>More actions</Text>
        <View style={styles.grid}>
          <GridItem icon="sliders" label="Manage payment limits" />
          <GridItem icon="globe" label="Track global payments" />
          <GridItem icon="credit-card" label="Deposit a cheque" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const GridItem = ({ icon, label,navigation }) => (
  <TouchableOpacity
  onPress={() => navigation.navigate('From')}
  style={styles.gridItem}>
    <Icon name={icon} size={24} color="#d6001c" />
    <Text style={styles.gridText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  navItem: {
    marginRight: 20,
    fontSize: 16,
    color: '#000',
  },
  activeNav: {
    borderBottomWidth: 4,
    borderBottomColor: '#d6001c',
    paddingBottom: 4,
    marginLeft: 10,
  },
  menuIcon: {
    marginLeft: 'auto',
    color: '#333',
  },
  container: { padding: 16 },
  header: { fontSize: 18, fontWeight: 'bold', marginTop: 20 ,color:Black,marginHorizontal:10},
  recentPayees: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  payeeCard: { alignItems: 'center', width: 80 },
  circle: {
    backgroundColor: '#000',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: { color: '#fff', fontWeight: 'bold' },
  payeeText: { textAlign: 'center', marginTop: 5, fontSize: 12,color:Black },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '47%',
    backgroundColor: White,
    borderWidth:0.5,
    padding: 12,
    marginTop: 12,
    alignItems: 'center',
    flexDirection:'row',
    borderColor:'#C8C8C8'
  },
  gridText: { marginTop: 8, textAlign: 'center', fontSize: 13,color:Black,width:'80%',paddingLeft:5 },
});

export default PayScreen;
