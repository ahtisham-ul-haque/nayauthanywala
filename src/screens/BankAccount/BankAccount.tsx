import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  PanResponder,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Black, LightGrey, White } from '../../utils/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';

const transactions = [
  {
    title: 'Apr 29, 2025',
    price: '£7.00',
    items: [
      {
        id: '1',
        description: 'Wolves Service Ltd ',
        amount: '-£5.',
        neachy: '00',
        card: 'LONDON',
      
      },
      {
        id: '1',
        description: 'GABOR BARANY ',
        amount: '£11.',
        neachy: '52',
        card: 'LONDON',
        GREEN:true
      
      },
   
    ],
  },
  {
    title: 'Apr 25, 2025',
    price: '£0.48',
    items: [
      {
        id: '1',
        description: 'NISA LOCAL ',
        amount: '-£2.',
        neachy: '34',
        card: 'LONDON',
        //         date: 'Apr 23, 2025',
        // iconname: 'wallet-outline',
      },
      {
        id: '1',
        description: 'NISA LOCAL ',
        amount: '-£22.',
        neachy: '68',
        card: 'LONDON',
        //         date: 'Apr 23, 2025',
        // iconname: 'wallet-outline',
      },
    ],
  },
  {
    title: 'Apr 24, 2025',
    price: '£25.50',
    items: [
      {
        id: '1',
        description: 'Mr Gabor Barany',
        amount: '-£10.',
        neachy: '00',
        card: 'Consultant',
      
      },
      
     
    ],
  },
  // {
  //   title: 'Pending',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'FK Global Services  ',
  //       amount: '-£1,050.',
  //       neachy: '00',
  //       card: 'llford GB',
  //       date: 'Apr 23, 2025',
  //       iconname: 'wallet-outline',
  //     },
  //     {
  //       id: '1',
  //       description: 'FK Global Services  ',
  //       amount: '-£4,998.',
  //       neachy: '00',
  //       card: 'llford GB',
  //       date: 'Apr 23, 2025',
  //       iconname: 'wallet-outline',
  //     },
  //     {
  //       id: '1',
  //       description: 'INTL CARD 99999999  ',
  //       amount: '-£8.',
  //       neachy: '998',
  //       card: 'llford GB',
  //       date: 'Apr 23, 2025',
  //       iconname: 'wallet-outline',
  //     },
  //   ],
  // },
  {
    title: 'Apr  23, 2025',
    price: '£35.50',
    items: [
      {
        id: '1',
        description: 'HARMEET KAUR     ',
        amount: '£35.',
        neachy: '00',
        card: 'other',
        GREEN:true
      },
    ],
  },
  {
    title: 'Mar 10, 2025',
    price: '£0.50',
    items: [
      {
        id: '1',
        description: 'MOON COFFEEAND RE',
        amount: '-£10.',
        neachy: '00',
        card: 'LONDON',
      },
    
     
    ],
  },
  {
    title: 'Mar 7, 2025',
    price: '£10.50',
    items: [
      {
        id: '1',
        description: 'CASH IN P.O MAR07',
        amount: '£10.',
        neachy: '00',
        card: '161A BOW ROA@16:55 ',
        GREEN:true
      },
    
     
    ],
  },
  {
    title: 'Feb 25, 2025',
    price: '£0.50',
    items: [
      {
        id: '1',
        description: 'TOMA BIMBAI',
        amount: '-£9.',
        neachy: '50',
        card: 'FRIEND',
      },
    
     
    ],
  },
  // {
  //   title: 'Apr  10, 2025',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'ADVICE CONFIRMS   ',
  //       amount: '£6,094.',
  //       neachy: '98',
  //       card: 'RBS22045KHAAJJ5S',
  //       GREEN: true,
  //     },
  //   ],
  // },
  // {
  //   title: 'Mar  21, 2025',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'WOLVES SERVICE LTD   ',
  //       amount: '-£6.',
  //       neachy: '57',
  //       card: 'Services',
  //     },
  //     {
  //       id: '1',
  //       description: 'BEDSCLICK LT   ',
  //       amount: '£7.',
  //       neachy: '00',
  //       card: 'employee',
  //       GREEN: true,
  //     },
  //   ],
  // },
  // {
  //   title: 'Mar 10, 2025',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'NISHA LOCAL ',
  //       amount: '-£4.',
  //       neachy: '99',
  //       card: 'LONDON',
  //     },
  //   ],
  // },
  // {
  //   title: 'Mar 07, 2025',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'CASH IN P.O MAR07',
  //       amount: '£5.',
  //       neachy: '00',
  //       card: '161A BOW ROA@16:54',
  //       GREEN: true,
  //     },
  //   ],
  // },
  // {
  //   title: 'Feb 18, 2025',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'TOMA',
  //       amount: '£2.',
  //       neachy: '00',
  //       card: 'faimly',
  //       GREEN: true,
  //     },
  //   ],
  // },
  // {
  //   title: 'Feb 17, 2025',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'TFL TRAVEL CH',
  //       amount: '-£1.',
  //       neachy: '75',
  //       card: 'TFLGOV.UK/CP',
  //     },
  //   ],
  // },
  // {
  //   title: 'Feb 11, 2025',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'MRS MAHBUBA BEGUM',
  //       amount: '-£1.',
  //       neachy: '75',
  //       card: 'RETURN',
  //     },
  //     {
  //       id: '1',
  //       description: 'TOMA R ',
  //       amount: '£6.',
  //       neachy: '00',
  //       card: 'FAMILY',
  //       GREEN: true,
  //     },
  //   ],
  // },
  // {
  //   title: 'Feb 10, 2025',
  //   items: [
  //     {
  //       id: '1',
  //       description: 'INT 0054598575',
  //       amount: '-£8.',
  //       neachy: '99',
  //       card: 'APPLE.COM/BILL',
  //     },
  //   ],
  // },
];
const height = Dimensions.get('screen').height;
const BankAccount = ({ navigation }) => {
  useEffect(() => {
    // RBSheet ko automatically open karne ke liye
    refRBSheet.current.open();
  }, []);
  const panY = useRef(new Animated.Value(300)).current; // Initial position set to 300 (partially visible)
  const refRBSheet = useRef();

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Y position ko update karte waqt ensure karte hain ke sheet 300 ke niche na jaye (maximum limit)
        const newPanY = Math.max(300, gestureState.dy); // 300 ek limit hai, jahan sheet ruk jayegi
        panY.setValue(newPanY); // Y position ko update karte hain
      },
      onPanResponderRelease: (_, gestureState) => {
        const { dy } = gestureState;

        // Adjust position when release based on movement
        if (dy > 250) {
          // If swipe is down, close the sheet to 300 (partial close)
          Animated.spring(panY, {
            toValue: 300, // Partial close
            useNativeDriver: true,
            stiffness: 200,
          }).start();
        } else {
          // If swipe is up, open the sheet to its maximum visible position
          Animated.spring(panY, {
            toValue: 0, // Fully open
            useNativeDriver: true,
            stiffness: 200,
          }).start();
        }
      },
    }),
  ).current;
  const [sheetHeight, setSheetHeight] = useState(
    Dimensions.get('screen').height / 1.2,
  );

  const onSheetDrag = value => {
    if (value === 'expand') {
      setSheetHeight(Dimensions.get('screen').height);
    } else if (value === 'collapse') {
      setSheetHeight(Dimensions.get('screen').height / 1);
    }
  };
  const renderSection = ({ item, index }) => (
    <View style={styles.section}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 5,
          backgroundColor: '#EDEDED',
        }}>
        <Text style={styles.titles}>{item.title}</Text>
        <Text style={styles.titless}>{item.price}</Text>
      </View>

      <FlatList
        data={item.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={true}
      />
    </View>
  );

  // Render karne ke liye har item ki styling aur structure
  const renderItem = ({ item, index }: any) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <View style={styles.info}>
          <Text style={styles.name}>{item.description}</Text>
          <Text style={{ fontSize: 14, color: 'grey' }}>{item.card}</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text
          style={[
            styles.prices,
            { color: item?.GREEN == true ? '#168881' : '#444245' },
          ]}>
          {item.amount}
          <Text style={{ fontSize: 13 }}>{item?.neachy}</Text>
        </Text>
        {item?.iconname &&
        
        <View style={{marginVertical:5, backgroundColor: LightGrey,alignItems:'center',justifyContent:'center', paddingHorizontal: 5,flexDirection:'row' }}>
        <Icon name={item?.iconname} size={20} color={Black} />
          <Text style={{ color: '#000',textAlign:'center',paddingLeft:6,fontSize:13 }}>{item?.date}</Text>
        </View>
        }

      </View>
    </View>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#CDD4D5' }}>
      <View
        style={{
          height: 80,
          backgroundColor: White,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={{ height: '100%', flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="arrow-back-outline" size={25} color={Black} />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              marginHorizontal: 10,
              alignItems: 'center',
              width: '80%',
            }}>
            <Text style={{ color: Black, fontSize: 16, fontWeight: '500' }}>
              BASIC BANK
            </Text>
            <Text style={{ color: Black, fontWeight: '500' }}>
            40-22-22 41721143
            </Text>
          </View>
        </View>
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="ellipsis-vertical" size={20} color={Black} />
        </View>
      </View>
      <View
        style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: Black, fontSize: 25 }}>£7.00</Text>
        <Text style={{ color: Black, marginVertical: 2 }}>
          Arranged overdraft : £0.00
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 2,
          justifyContent: 'center',
          backgroundColor: White,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: '#D3D3D',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 50,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="stats-chart-outline" color={Black} size={24} />
            </View>
            <View style={{ height: 50, justifyContent: 'center' }}>
              <Text style={{ color: Black }}> Balance After Bills</Text>
              <Text style={{ color: Black }}>Learn More</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="chevron-forward-outline" size={25} color={Black} />
          </View>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 2,
          justifyContent: 'center',
          backgroundColor: White,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: '#D3D3D',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 50,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="arrow-up-circle-outline" color={Black} size={24} />
            </View>
            <View style={{ height: 50, justifyContent: 'center' }}>
              <Text style={{ color: Black }}>Manage bills</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="chevron-forward-outline" size={25} color={Black} />
          </View>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 2,
          justifyContent: 'center',
          backgroundColor: White,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: '#D3D3D',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 50,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="ellipsis-horizontal" color={Black} size={24} />
            </View>
            <View style={{ height: 50, justifyContent: 'center' }}>
              <Text style={{ color: Black }}>View more</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="chevron-forward-outline" size={25} color={Black} />
          </View>
        </View>
      </View>
      <View
        style={{
          height: 100,
          marginVertical: 20,
          marginHorizontal: 10,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          {/* <Text style={{color:Black}}>Available balance</Text>
    <Text style={{color:Black}}>£1.93</Text> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          {/* <Text style={{color:Black}}>Balance at</Text> */}
          {/* <Text style={{color:Black}}>12:57 GMT on 6 MAR</Text> */}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* <Text style={{color:'#CDD4D5'}}>Available balance</Text>
    <Text style={{color:Black}}>2025</Text> */}
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        openDuration={0}
        closeOnDragDown={true}
        closeOnPressBack={false}
        draggable={true}
        height={390} // specify the height
        minClosingHeight={0} // set it to 0 for full closure
        dragFromTopOnly={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#EDEDED',
            width: 80,
            alignSelf: 'center',
          },
          container: {
            height: Dimensions.get('screen').height / 2.2, // match this height
          },
        }}
        onDragEnd={() => {
          // Ensure the sheet doesn't go above the top
          if (refRBSheet.current.getCurrentPosition() < 0) {
            refRBSheet.current.setState({ height: 690 });
          }
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <Text style={{ color: 'black', fontWeight: '800', fontSize: 18 }}>
            Transactions
          </Text>
          <Icon name="search" color={'black'} size={22} />
        </View>
        <FlatList
          data={transactions}
          renderItem={renderSection}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ backgroundColor: 'white' }}
        />
      </RBSheet>

      {/* </View> */}
    </SafeAreaView>
  );
};

export default BankAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  prices: {
    fontSize: 14, // Main price size
    color: '#444245',
    marginVertical: 5,
    fontWeight: '500',
  },
  price: {
    fontSize: 24, // Main price size
    color: '#444245',
    marginVertical: 5,
    fontWeight: '500',
  },

  decimalPart: {
    fontSize: 14, // Smaller size for decimal part
    color: '#444245',
  },
  decimalParts: {
    fontSize: 11, // Smaller size for decimal part
    color: '#444245',
  },
  titles: {
    color: Black,
    fontSize: 14,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  titless: {
    color: Black,
    fontSize: 15,
    marginHorizontal: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: 'relative',
    alignItems: 'center',
  },

  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    zIndex: 999,
  },
  handle: {
    width: 60,
    height: 6,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  tabText: {
    fontSize: 16,
    color: '#777', // Default color for tabs
  },
  activeTabText: {
    color: '#000', // Active tab text color
    fontWeight: 'bold',
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: -5,
    height: 4,
    width: '500%',
    backgroundColor: 'red', // Color of the bottom indicator
    borderRadius: 2,
  },
  progressBars: {
    marginLeft: 10,
    height: 12, // Height of the progress bar
    width: '50%', // Width of the progress bar
    backgroundColor: '#fff', // Background color for empty progress
    overflow: 'hidden', // Prevent overflow on rounding
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  progressBar: {
    marginLeft: 10,
    height: 12, // Height of the progress bar
    width: '50%', // Width of the progress bar
    backgroundColor: '#fff', // Background color for empty progress
    overflow: 'hidden', // Prevent overflow on rounding
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  progressFilled: {
    height: '100%', // Full height of the progress bar
    width: '50%', // Fill halfway (50%)
    backgroundColor: '#6BB24D', // Color of the filled portion
  },
  progressFilleds: {
    height: '100%', // Full height of the progress bar
    width: '50%', // Fill halfway (50%)
    backgroundColor: '#899c82', // Color of the filled portion
  },
  balance: {
    fontSize: 25,
    color: '#99A684',
    marginHorizontal: 30,
  },

  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  accountTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  balanceSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 16,
    color: '#888',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  transactionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginHorizontal: 10,
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  transactionDetails: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between', // This will spread out the elements
  },
  iconWrapper: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 15, // Set to 15 for a perfect circle
    marginRight: 10, // Add margin to separate the icon from the description
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionWrapper: {
    flex: 1, // Take up available space
    padding: 5, // Add padding inside the description container
    marginRight: 10, // Add margin to separate from the amount
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  amount: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    margin: 8,
    borderColor: '#eae6df',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: '110%',
    width: '100%',
    resizeMode: 'cover',
  },
  info: {
    marginLeft: 10,
  },
  name: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  nachy: {
    color: '#999B9E',
    fontSize: 12,
  },
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginTop: 20,
    backgroundColor: White,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
