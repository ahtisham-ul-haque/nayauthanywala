import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Black, White } from '../../utils/Color';
import Icon from 'react-native-vector-icons/Ionicons';

const FullScreenImage = ({ navigation }: any) => {
  const [Lodaer, setLodaer] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={{ height: 265 }}>
        <Image
          style={{ height: '100%', width: '100%' }}
          resizeMode="cover"
          source={require('../../assets/images/homepage.jpeg')}
        />
      </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate('From')}
        style={{
         
          height: 100,
          width: 70,
          position: 'absolute',
          top: 160,
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
            40-16-64 10457957{' '}
          </Text>
        </View>
        <Text
          style={{
            alignSelf: 'flex-end',
            color: Black,
            marginHorizontal: 10,
            fontSize: 19,
          }}>
          £5.00
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
            40-12-98 70002267{' '}
          </Text>
        </View>
        <View style={{ borderTopWidth: 0.5, marginVertical: 10 }}></View>
        <TouchableOpacity
          onPress={() => setLodaer(!Lodaer)}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 0.5,
            paddingVertical: 10,
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
        {Lodaer ? (
          <>
            <View style={{ borderBottomWidth: 0.5, paddingVertical: 10 }}>
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
                £10.00
              </Text>
            </View>
            <View style={{ borderBottomWidth: 0.5, paddingVertical: 10 }}>
              <Text
                style={{ color: Black, marginHorizontal: 10, marginTop: 5 }}>
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
                23,750.<Text style={{ fontWeight: '400' }}>00USD</Text>
              </Text>
              <Text
                style={{
                  color: Black,
                  marginHorizontal: 10,
                  alignSelf: 'flex-end',
                  fontSize: 15,
                }}>
                {' '}
                =£17,603.50
              </Text>
            </View>
          </>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 0.5,
              paddingVertical: 10,
            }}>
            <Text style={{ color: Black, marginHorizontal: 10 }}>
              More currencies
            </Text>
            <Icon name="chevron-down" size={18} color={Black} />
          </View>
        )}
      </View>
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
