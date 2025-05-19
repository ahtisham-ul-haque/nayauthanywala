import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Black, White } from '../../utils/Color';
import Icon from 'react-native-vector-icons/Ionicons';

const FullScreenImage = ({ navigation }: any) => {
  const [Lodaer, setLodaer] = useState(false);
   const [IsLodaer, setISLodaer] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={{ height: 265 ,}}>
        <View style={{height:300}}>

        <Image
          style={{ height: '100%', width: '100%' }}
          resizeMode="cover"
          source={require('../../assets/images/unnamed.png')}
        />
        </View>

      </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate('From')}
        style={{
         
          height: 130,
          width: 70,
          position: 'absolute',
          top: 170,
          left: 20,
        }}></TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate('From')}
        style={{
          
          height: 130,
          width: 70,
          position: 'absolute',
          top: 160,
          left: 110,
        }}></TouchableOpacity>
      <View
        style={{
          marginVertical: 10,
          justifyContent: 'space-between',
          marginHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop:50
        }}>
        <Text style={{ color: Black, fontSize: 17 }}>Your product</Text>
        <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: Black,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="eye-outline" size={15} />
        </View>
      </View>
      <ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate('AccountInformations')}
        style={{
          paddingVertical: 10,
          marginHorizontal: 15,
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
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <View
            style={{
              height: 20,
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 4,
            }}>
            <Image
              source={require('../../assets/images/uk.png')}
              style={{ height: '100%', width: '130%', marginLeft: 5 }}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 10 }}>
              <Icon name="star-outline" size={18} color={Black} />
            </View>
            <View style={{}}>
              <Icon name="ellipsis-vertical" size={18} color={Black} />
            </View>
          </View>
        </View>
        <View>
          <Text style={{ color: Black, marginHorizontal: 10, fontSize: 16 }}>
            BANK A/C
          </Text>
        </View>
        <View>
          <Text style={{ color: Black, marginHorizontal: 10 }}>
            40-16-64 01757407{' '}
          </Text>
        </View>
        <Text
          style={{
            alignSelf: 'flex-end',
            color: Black,
            marginHorizontal: 10,
            fontSize: 19,
          }}>
            <Text style={{fontSize:15}}>£</Text>
          0.57
        </Text>
      </TouchableOpacity>
      <View
        style={{
          paddingVertical: 10,
          marginHorizontal: 15,
          backgroundColor: White,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          marginVertical: 10,
          paddingHorizontal: 5,
        }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <View
            style={{
              height: 20,
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 4,
            }}>
            <Image
              source={require('../../assets/images/uk.png')}
              style={{ height: '100%', width: '130%', marginLeft: 5 }}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 10 }}>
              <Icon name="star-outline" size={18} color={Black} />
            </View>
            <View style={{}}>
              <Icon name="ellipsis-vertical" size={18} color={Black} />
            </View>
          </View>
        </View>
        <View>
          <Text style={{ color: Black, marginHorizontal: 10, fontSize: 16 }}>
            GLOBAL MONEY ACCOUNT
          </Text>
        </View>
        <View>
          <Text style={{ color: Black, marginHorizontal: 10 }}>
            40-12-98 81051709{' '}
          </Text>
        </View>
        <View style={{ borderTopWidth: 0.5, marginVertical: 10,borderColor:'#E8E8E8' }}></View>
        <TouchableOpacity
          onPress={() => setLodaer(!Lodaer)}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 0.5,
            paddingVertical: 10,borderColor:'#E8E8E8'
          }}>
          <Text style={{ color: Black, marginHorizontal: 10 }}>
            Currency balances
          </Text>
          <Icon
            name={Lodaer ? 'chevron-up' : 'chevron-down'}
            size={18}
            color={Black}
          />
        </TouchableOpacity>
        {Lodaer && 
          <>
            <TouchableOpacity
            
            onPress={()=>navigation.navigate('Gratish_British_Pound')}
            style={{ borderBottomWidth: 0.5, paddingVertical: 10,borderColor:'#E8E8E8' }}>
              <Text
                style={{ color: Black, marginHorizontal: 10, marginTop: 5 }}>
                Great British Pounds
              </Text>
              <Text
                style={{
                  color: Black,
                  marginHorizontal: 10,
                  alignSelf: 'flex-end',
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                {' '}
                £4.92
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('USD')}
            style={{ borderBottomWidth: 0.5, paddingVertical: 10,borderColor:'#E8E8E8' }}>
              <Text
                style={{ color: Black, marginHorizontal: 10, marginTop: 5,fontSize:16 }}>
                US Dollar
              </Text>
              <Text
                style={{
                  color: Black,
                  marginHorizontal: 10,
                  alignSelf: 'flex-end',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                4..<Text style={{ fontWeight: '400' }}>51USD</Text>
              </Text>
              <Text
                style={{
                  color: Black,
                  marginHorizontal: 10,
                  alignSelf: 'flex-end',
                  fontSize: 15,
                }}>
                {' '}
                =£3.39
              </Text>
            </TouchableOpacity>

          </>
        }
          <TouchableOpacity
          onPress={()=>setISLodaer(!IsLodaer)}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 0.5,
              paddingVertical: 10
              ,borderColor:'#E8E8E8'
            }}>
            <Text style={{ color: Black, marginHorizontal: 10 }}>
              More currencies
            </Text>
            <Icon name={IsLodaer? 'chevron-up' : 'chevron-down'}size={18} color={Black} />
          </TouchableOpacity>
           {IsLodaer && 
          <>
          
            <TouchableOpacity 
            onPress={()=>navigation.navigate('USD')}
            style={{ borderBottomWidth: 0.5, paddingVertical: 10,borderColor:'#E8E8E8' }}>
              <Text
                style={{ color: Black, marginHorizontal: 10, marginTop: 5 }}>
                UAE Derham
              </Text>
              <Text
                style={{
                  color: Black,
                  marginHorizontal: 10,
                  alignSelf: 'flex-end',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                0.<Text style={{ fontWeight: '400' }}>00AED</Text>
              </Text>
            
            </TouchableOpacity>
              <TouchableOpacity 
            style={{ borderBottomWidth: 0.5, paddingVertical: 10,borderColor:'#E8E8E8' }}>
              <Text
                style={{ color: Black, marginHorizontal: 10, marginTop: 5 }}>
                Australia dollar
              </Text>
              <Text
                style={{
                  color: Black,
                  marginHorizontal: 10,
                  alignSelf: 'flex-end',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                0.<Text style={{ fontWeight: '400' }}>00AUD</Text>
              </Text>
             
            </TouchableOpacity>
    <TouchableOpacity 
            style={{ borderBottomWidth: 0.5, paddingVertical: 10,borderColor:'#E8E8E8' }}>
              <Text
                style={{ color: Black, marginHorizontal: 10, marginTop: 5 }}>
                Candian  dollar
              </Text>
              <Text
                style={{
                  color: Black,
                  marginHorizontal: 10,
                  alignSelf: 'flex-end',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                0.<Text style={{ fontWeight: '400' }}>00CAD</Text>
              </Text>
             
            </TouchableOpacity>
          </>
        }

      </View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 280,
    width: '100%',
  },
});

export default FullScreenImage;
