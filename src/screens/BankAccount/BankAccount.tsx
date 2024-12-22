import { StyleSheet, Text, View, FlatList,Animated,PanResponder,TouchableOpacity, Dimensions,Button } from 'react-native';
import React, { useEffect, useMemo, useRef,useState } from 'react';
import { Black, White } from '../../utils/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';
const transactions = [
  {
    title: 'Dec 18, 2024',
    price: '£49.30',
    items: [
      {
        id: '1',
        description: 'GARDEN KEBAB',
        amount: '-£10.',
        neachy: '00',
        card: 'ENFIELD',
      },
      {
        id: '1',
        description: 'ENFIELD FOOD CENTER',
        amount: '-£9.',
        neachy: '60',
        card: 'ENFIELD',
      },
      {
        id: '1',
        description: 'SUMUP *MISHA TRAD',
        amount: '-£38.',
        neachy: '00',
        card: 'ILFORD',
      },
    ],
  },
  {
    title: 'Dec 17, 2024',
    price: '£106.90',
    items: [
      {
        id: '1',
        description: 'CASH NOTEMAC DEC17',
        amount: '-£50.',
        neachy: '00',
        card: 'Notemachine @21:47',
      },
      {
        id: '1',
        description: 'CASH NOTEMAC DEC17',
        amount: '-£250.',
        neachy: '00',
        card: 'Notemachine @21:47',
      },
      {
        id: '1',
        description: 'SANIYA MIRZA ',
        amount: '£100.',
        neachy: '00',
        card: 'PAYMENT',
        GREEN:true
      },
      {
        id: '1',
        description: 'HUTTE SUPERMARKET ',
        amount: '-£33.',
        neachy: '80',
        card: 'ILFORD IG1',
      },
      {
        id: '1',
        description: 'COLONY RESTAURANT',
        amount: '-£13.',
        neachy: '30',
        card: 'ILFORD',
      },
      {
        id: '1',
        description: 'CASH BNKM DEC16',
        amount: '-£50.',
        neachy: '00',
        card: 'MFG-LOXFOR@23:54',
      },
      {
        id: '1',
        description: 'CASH BNKM DEC16',
        amount: '-£250.',
        neachy: '00',
        card: 'MFG-LOXFOR@23:53',
      },
    ],
  },
  {
    title: 'Dec 16, 2024',
    price: '£754.00',
    items: [
      {
        id: '1',
        description: 'MIRZA S',
        amount: '£750.',
        neachy: '00',
        card: 'PAYMENT',
        GREEN:true
      },
    ],
  },
  {
    title: 'Dec 13, 2024',
    price: '£4.00',
    items: [
      {
        id: '1',
        description: 'NISA LOCAL',
        amount: '-£41.',
        neachy: '19',
        card: 'LONDON',
      },
    ],
  },
  {
    title: 'Dec 12, 2024',
    price: '£45.19',
    items: [
      {
        id: '1',
        description: 'Saniya Mirza',
        amount: '-£60.',
        neachy: '00',
        card: 'PAYMENT',
      },
      {
        id: '1',
        description: 'Saniya Mirza',
        amount: '-£2,600.',
        neachy: '00',
        card: 'PAYMENT',
      },
    ],
  },
  {
    title: 'Dec 11, 2024',
    price: '£2,705.19',
    items: [
      {
        id: '1',
        description: 'CASH RB SCOT DEC11',
        amount: '-£50.',
        neachy: '00',
        card: 'TESCO LRV DO@21:43',
      },
      {
        id: '1',
        description: 'CASH RB SCOT DEC11',
        amount: '-£250.',
        neachy: '00',
        card: 'TESCO LRV DO@21:42',
      },
      {
        id: '1',
        description: '2024121100166838',
        amount: '-£5.',
        neachy: '00',
        card: 'RBS11124H9VP1KG0',
      },
      {
        id: '1',
        description: 'ADVICE CONFIRMS',
        amount: '£2,998.',
        neachy: '48',
        card: 'RBS11124H9VP1KG0',
        GREEN:true
      },
    ],
  },
  {
    title: 'Dec 3, 2024',
    price: '£11.71',
    items: [
    
      {
        id: '1',
        description: 'MIRZA S',
        amount: '£10.',
        neachy: '00',
        card: 'PAYMENT',
        GREEN:true
      },
    ],
  },
  {
    title: 'NOV 18, 2024',
    price: '£1.71',
    items: [
      {
        id: '1',
        description: 'THE OFFY',
        amount: '-£2.',
        neachy: '79',
        card: 'ENFIELD',
      },
      {
        id: '1',
        description: 'THE OFFY',
        amount: '-£3.',
        neachy: '00',
        card: 'ENFIELD',
      },
      {
        id: '1',
        description: 'TGF PIZZA',
        amount: '-£12.',
        neachy: '80',
        card: 'ENFIELD',
      },
      {
        id: '1',
        description: 'ENFIELD FOOD CENTER',
        amount: '-£9.',
        neachy: '70',
        card: 'ENFIELD',
      },
    ],
  },
  {
    title: 'Nov 16, 2024',
    price: '£30.00',
    items: [
      {
        id: '1',
        description: 'CASH NOTEMAC NOV16',
        amount: '-£30.',
        neachy: '00',
        card: 'Notemachine @19:56',
      },
      
    ],
  },  
  {
    title: 'Nov 15, 2024',
    price: '£60.00',
    items: [
      {
        id: '1',
        description: 'SANIYA MIRZA',
        amount: '£50.',
        neachy: '00',
        card: 'PAYMENT',
        GREEN:true
      },
      
    ],
  }, 
   {
    title: 'NOV 14, 2024',
    price: '£1.71',
    items: [
      {
        id: '1',
        description: 'CASH NOTEMAC NOV14',
        amount: '-£50.',
        neachy: '00',
        card: 'Notemachine @19:13',
      },
      {
        id: '1',
        description: 'Zaki Akhtar',
        amount: '£40.',
        neachy: '00',
        card: 'Sent from Revolut',
        GREEN:true
      },
     
    ],
  },
  {
    title: 'NOV 13, 2024',
    price: '£20.00',
    items: [
      {
        id: '1',
        description: 'Aziz',
        amount: '-£5.',
        neachy: '00',
        card: 'Payment',
      },
      {
        id: '1',
        description: 'Abdul mateen',
        amount: '£5.',
        neachy: '00',
        card: 'Payment',
        GREEN:true
      },
     
    ],
  },
  {
    title: 'NOV 9, 2024',
    price: '£30.00',
    items: [
      {
        id: '1',
        description: 'Saniya Mirza',
        amount: '£20.',
        neachy: '00',
        card: 'Saniya Nirza Saniy',
        GREEN:true
      },
      {
        id: '1',
        description: 'Saniya Mirza',
        amount: '-£10.',
        neachy: '00',
        card: 'payment',
      },
      {
        id: '1',
        description: 'Saniya Mirza',
        amount: '£20.',
        neachy: '00',
        card: '',
        GREEN:true
      },
    
     
    ],
  },
 
  
];
const height = Dimensions.get('screen').height
const BankAccount = ({navigation}) => {
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
  })
).current;
const [sheetHeight, setSheetHeight] = useState(Dimensions.get('screen').height / 1.2);

const onSheetDrag = (value) => {
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
          backgroundColor: '#D3D3D3',
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
            { color: item?.GREEN == true ? '#6AB651' : '#444245' },
          ]}>
          {item.amount}
          <Text style={{ fontSize: 13 }}>{item?.neachy}</Text>
        </Text>
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
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="arrow-back-outline" size={25} color={Black} />
          </TouchableOpacity>
          <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
            <Text style={{ color: Black, fontSize: 16,fontWeight:'500' }}>BANK A/C</Text>
            <Text style={{ color: Black,fontWeight:'500' }}>40-12-62 54731875</Text>
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
        <Text style={{ color: Black, fontSize: 25 }}>£49.30</Text>
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
      {/* <View style={{height:100,marginVertical:20,marginHorizontal:10, justifyContent:'center'}}>
   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
    <Text style={{color:Black}}>Available balance</Text>
    <Text style={{color:Black}}>£49.30</Text>

   </View>
   <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
    <Text style={{color:Black}}>Balance at</Text>
    <Text style={{color:Black}}>16:03 GMT on 16 Dec</Text>

   </View>
   <View style={{flexDirection:'row',justifyContent:'space-between',}}>
    <Text style={{color:'#CDD4D5'}}>Available balance</Text>
    <Text style={{color:Black}}>2024</Text>

   </View>
   </View> */}
   <RBSheet
  ref={refRBSheet}
  closeOnPressMask={true}
  openDuration={390}
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
      backgroundColor: 'grey',
      width: 80,
      alignSelf: 'center',
    },
    container: {
      height: 390, // match this height
    },
  }}
  onDragEnd={() => {
    // Ensure the sheet doesn't go above the top
    if (refRBSheet.current.getCurrentPosition() < 0) {
      refRBSheet.current.setState({ height: 190 });
    }
  }}
>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
    <Text style={{color:'black', fontWeight:'800', fontSize:18}}>Transactions</Text>
    <Icon name='search' color={'black'} size={22}/>
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
    zIndex:999
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