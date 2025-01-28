import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Black, White } from '../../utils/Color';
import { SafeAreaView } from 'react-native-safe-area-context';
import RBSheet from 'react-native-raw-bottom-sheet';
const App = ({ navigation, route }) => {
  console.log('route', route?.params?.data);

  const refRBSheet = useRef();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header Section */}

        <StatusBar backgroundColor={White} />
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            height: 40,
            backgroundColor: White,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ width: '20%' }}>
            <Ionicons name="chevron-back-outline" color={'#000'} size={25} />
          </TouchableOpacity>
          <View style={{ width: '80%' }}>
            <Text
              style={{
                color: '#000',
                textAlign: 'center',
                width: '80%',
                fontSize: 18,
              }}>
              {route?.params?.data ? 'Euro' : 'Great British pounds'}
            </Text>
          </View>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.balance}>£0.00</Text>
          <Text style={styles.subBalance}>≈ US$0.00</Text>
        </View>

        {/* Options Section */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
            <View style={styles.optionRow}>
              <Ionicons name="add-circle-outline" size={20} color="#000" />
              <Text style={styles.optionText}>Add money</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <View style={styles.optionRow}>
              <Ionicons name="swap-horizontal-outline" size={20} color="#000" />
              <Text style={styles.optionText}>Convert or withdraw</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => refRBSheet.current.open()}
            style={styles.optionButton}>
            <View style={styles.optionRow}>
              <Ionicons
                name="ellipsis-horizontal-outline"
                size={20}
                color="#000"
              />
              <Text style={styles.optionText}>View more</Text>
            </View>
          </TouchableOpacity>
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnPressMask={true}
          openDuration={390}
          closeOnPressBack={false}
          height={290} // specify the height
          minClosingHeight={0} // set it to 0 for full closure
          dragFromTopOnly={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(211,211,211,0.8)', // Light grey with transparency
            },
            container: {
              height: Dimensions.get('screen').height / 2.9, // Adjust height accordingly
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: '#FFFFFF', // White background for the sheet
            },
          }}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <Ionicons name="close-outline" color={Black} size={22} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Statement')}
            style={{
              margin: 10,
              marginHorizontal: 15,
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="document-outline" color={Black} size={22} />
              <Text style={{ color: Black, paddingLeft: 10, fontSize: 15 }}>
                View statements
              </Text>
            </View>
            <View style={{}}>
              <Ionicons
                name="chevron-forward-outline"
                color={Black}
                size={22}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ManageCard')}
            style={{
              margin: 10,
              marginHorizontal: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="card-outline" color={Black} size={22} />
              <Text style={{ color: Black, paddingLeft: 10, fontSize: 15 }}>
                Manage card
              </Text>
            </View>
            <View style={{}}>
              <Ionicons
                name="chevron-forward-outline"
                color={Black}
                size={22}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ManageAccount')}
            style={{
              margin: 10,
              marginHorizontal: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="cog-outline" color={Black} size={22} />
              <Text style={{ color: Black, paddingLeft: 10, fontSize: 15 }}>
                Manage account
              </Text>
            </View>
            <View style={{}}>
              <Ionicons
                name="chevron-forward-outline"
                color={Black}
                size={22}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation?.navigate('AccountDetailsScreen')}
            style={{
              margin: 10,
              marginHorizontal: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="home-outline" color={Black} size={22} />
              <Text style={{ color: Black, paddingLeft: 10, fontSize: 15 }}>
                View and share account details
              </Text>
            </View>
            <View style={{}}>
              <Ionicons
                name="chevron-forward-outline"
                color={Black}
                size={22}
              />
            </View>
          </TouchableOpacity>

          {/* Content inside the RBSheet */}
        </RBSheet>

        {/* Transactions Section */}

        <View style={styles.transactionsContainer}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 16,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={[styles.tabs]}>Transactions</Text>

            <Ionicons name="search-outline" size={20} color="#CCCCCC" />
          </View>
          <View style={styles.tabsContainer}>
            <Text style={[styles.tab, styles.activeTab]}>{route?.params?.data ? "Euro" :"GBP"}</Text>
            <Text style={styles.tab}>All</Text>
          </View>
          <View style={styles.noTransactionsContainer}>
            <Ionicons
              name="swap-horizontal-outline"
              size={50}
              color="#000"
              style={styles.placeholderIcon}
            />
            <Text style={styles.noTransactionsText}>
              There are no transactions to display.
            </Text>
          </View>
        </View>
      </View>
      {/* Bottom Tab */}
      <View style={styles.tabBars}>
        <View style={styles.tabItems}>
          <Ionicons name="wallet" size={24} color="red" />
          
          <Text style={[styles.tabTexts, { color: 'red' }]}>Accounts</Text>
        </View>
        <View style={styles.tabItems}>
          <Ionicons name="swap-horizontal-outline" size={24} color="gray" />
          <Text style={styles.tabTexts}>Pay & Transfer</Text>
        </View>
        <View style={styles.tabItems}>
          <Ionicons name="bar-chart-outline" size={24} color="gray" />
          <Text style={styles.tabTexts}>Plan</Text>
        </View>
        <View style={styles.tabItems}>
          <Ionicons name="help-circle-outline" size={24} color="gray" />
          <Text style={styles.tabTexts}>Support</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  tabBars: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  tabItems: {
    alignItems: 'center',
  },
  tabTexts: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical:30,

  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
  },
  balance: {
    fontSize: 27,
    color: '#000',
  },
  subBalance: {
    fontSize: 14,
    color: '#888',
  },
  optionsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  optionButton: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
  transactionsContainer: {
    flex: 1,
    backgroundColor: White,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    fontSize: 16,
    color: '#888',
    paddingBottom: 5,
    marginVertical: 10,
    width: '50%',
    textAlign: 'center',
  },
  tabs: {
    fontSize: 16,
    color: '#888',
    paddingBottom: 5,
    marginVertical: 10,
    textAlign: 'center',
  },
  activeTab: {
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    width: '50%',
    textAlign: 'center',
  },
  noTransactionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  placeholderIcon: {
    marginBottom: 10,
  },
  noTransactionsText: {
    fontSize: 16,
    color: '#888',
  },
});

export default App;
