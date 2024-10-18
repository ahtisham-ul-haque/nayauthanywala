import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
  
  Button,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For radio button icons
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Black, LightGrey, White } from '../../utils/Color';
import { SafeAreaView } from 'react-native-safe-area-context';
const payees = [
  {
    id: '1',
    name: 'STRATEGENE LTD',
    number: '23-05-80 54222696',
    note: 'my com',
    initial: 'S',
  },
//   {
//     id: '2',
//     name: 'gurtej s judge',
//     number: '30-93-60 78194360',
//     note: 'my ac',
//     initial: 'G',
//   },
//   {
//     id: '3',
//     name: 'harsh',
//     number: '04-00-03 87417878',
//     note: 'friend',
//     initial: 'H',
//   },
//   {
//     id: '4',
//     name: 'jagjit singh',
//     number: '04-00-03 67225417',
//     note: 'friend',
//     initial: 'J',
//   },
//   {
//     id: '3',
//     name: 'Strategene ltd',
//     number: '23-05-80 54205805',
//     note: 'my com',
//     initial: 'S',
//   },
];

const PayeeList = ({route}) => {
  const [selectedPayee, setSelectedPayee] = useState(null);

console.log("------------------",route);


  const renderPayeeItem = ({ item }: any) => (
    <View style={{alignItems:"center",justifyContent:'center',height:Dimensions.get('screen').height/1.5
    }}>
        <Icon name='wallet' color={Black} size={35} />
        <Text style={{color:Black,textAlign:'center',lineHeight:25,marginTop:15,marginHorizontal:25}}>You can have no payees set up to add select Add a new Payee</Text>
      {/* <View style={{backgroundColor:LightGrey,paddingVertical:10}}>
<Text style={{color:Black,marginHorizontal:17}}>{item?.initial}</Text>
      </View>
    <TouchableOpacity
      style={styles.payeeItem}
      onPress={() => setSelectedPayee(item.id)}>
      <View>
        <Text style={styles.payeeName}>{item.name}</Text>
        <Text style={styles.payeeNumber}>{item.number}</Text>
        <Text style={styles.payeeNote}>{item.note}</Text>
      </View>
      <Icon
        name={
          selectedPayee === item.id
            ? 'radio-button-checked'
            : 'radio-button-unchecked'
        }
        size={24}
        color="#000"
      />
    </TouchableOpacity> */}
    </View>

  );

  return (
    <FlatList
      data={payees}
      renderItem={renderPayeeItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <TouchableOpacity style={styles.addPayeeButton}>
          <Icon name="add-circle" size={20} color={'grey'} />
          <Text style={styles.addPayeeText}> Add a new payee</Text>
        </TouchableOpacity>
      }
    />
  );
};

const MyAccounts = () => (
  <TouchableOpacity style={styles.accountItem} >
  <View>
    <Text style={styles.accountName}>BANK ACCOUNT</Text>
    <Text style={styles.accountNumber}> 40-12-62 53812510</Text>
  </View>
  <View style={styles.accountBalanceContainer}>
    <Text style={styles.accountBalance}>£1.35</Text>
    <Icon
      name={'radio-button-unchecked'}
      size={24}
      color="#000"
    />
  </View>
</TouchableOpacity>
);

const renderScene = SceneMap({
  first: MyAccounts,
  second: PayeeList,
});
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: LightGrey }} // Indicator under the active tab
    style={{ backgroundColor: White }} // Background color for TabBar
    renderLabel={({ route, focused }) => (
      <Text
        style={{ color: focused ? 'black' : '#BEBEBE', fontWeight: 'bold' }}>
        {route.title}
      </Text>
    )}
  />
);
const TabViewExample = () => {
  const [index, setIndex] = useState(0); // Initially set to 'My Payees'
  const [routes] = useState([
    { key: 'first', title: 'My accounts' },
    { key: 'second', title: 'My payees' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: 400 }}
      style={styles.tabView}
      renderTabBar={renderTabBar} // Add this line to render custom TabBar
    />
  );
};

const To_1 = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={White} barStyle={'dark-content'} />
    <View
      style={{
        height: 50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: White,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
      }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={()=>navigation.goBack() }>
          <Icon name="arrow-back" color={Black} size={25} />
        </TouchableOpacity>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: Black, fontSize: 16, fontWeight: '600' }}>
            To
          </Text>
        </View>
      </View>
      <View>
        <MaterialCommunityIcons name="dots-vertical" color={Black} size={20} />
      </View>
    </View>
    <TabViewExample />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payeeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginHorizontal:17
  },
  payeeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color:Black
  },
  payeeNumber: {
    fontSize: 14,
    color: '#7E7E7E',
  },
  payeeNote: {
    fontSize: 12,
    color: Black,
  },
  addPayeeButton: {
    paddingVertical: 16,
    // borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: White,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  addPayeeText: {
    color: 'grey',
    fontSize: 16,
    marginLeft:10
  },
  tabView: {
    marginTop: 2,
    backgroundColor: White,
  },
  accountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginHorizontal:10
  },
  accountName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  accountNumber: {
    fontSize: 14,
    color: '#7E7E7E',
    marginTop: 2,
  },
  accountBalanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountBalance: {
    fontSize: 16,
    color: '#000',
    marginRight: 8,
  },
});

export default To_1;
