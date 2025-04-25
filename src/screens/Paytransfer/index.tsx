import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Black, LightGrey, White } from '../../utils/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    name: 'WOLVES SERVICE LTD',
    tittle: 'WL',
  },
];
const Paytransfer = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/images/redbg.jpeg')}
          style={{ borderWidth: 1, height: 200 }}>
          <View
            style={{
              height: 80,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginHorizontal: 10,
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                marginLeft: 10,
                borderRadius: 25,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="person-outline" color={'#181818'} size={20} />
            </View>
          </View>
          <View style={{ height: 100, justifyContent: 'flex-end' }}>
            <Text
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                color: '#fff',
                fontSize: 25,
                fontWeight: '800',
              }}>
              Pay & Transfer
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.check}>
          <Text style={{ color: Black, fontSize: 17, margin: 10 }}>
            Recent Payees
          </Text>
          <FlatList
            data={DATA}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('Froms')}>
                  <View
                    style={{
                      height: 60,
                      width: 60,
                      marginLeft:25,
                      borderRadius: 45,
                      marginVertical: 10,
                      backgroundColor: LightGrey,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{ color: Black, fontSize: 20 }}>
                      {item?.tittle}
                    </Text>
                  </View>
                  <View
                    style={{ marginLeft:10 }}>
                    <Text
                      style={{
                        color: Black,
                        fontSize: 16,
                        marginTop: 5,
                        textAlign: 'center',
                        width: '60%',
                      }}>
                      {item?.name} {/* Or whatever text you want here */}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <View
            style={{
              marginHorizontal: 10,
              height: 50,
              marginVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity>
              <Icon name="chevron-back-outline" size={25} color={Black} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row' }}>
              {DATA.slice(0, 2)?.map((_, index) => (
                <View
                  key={index}
                  style={{
                    height: 6,
                    width: 6,
                    borderRadius: 5,
                    backgroundColor: 'black',
                    marginHorizontal: 5,
                  }}
                />
              ))}
            </View>

            <TouchableOpacity>
              <Icon name="chevron-forward-outline" size={25} color={Black} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: White, marginVertical: 10 }}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('From')}
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 10,
              alignItems: 'center',
            }}>
            <View style={{ width: '80%', flexDirection: 'row' }}>
              <View style={{}}>
                <AntDesign name="retweet" size={28} color={Black} />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <Text style={{ color: Black, fontSize: 16 }}>
                  Make a payment or transfer
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Icon name="chevron-forward-outline" size={28} color={'grey'} />
            </View>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 10,
              alignItems: 'center',
            }}>
            <View style={{ width: '80%', flexDirection: 'row' }}>
              <View style={{}}>
                <AntDesign name="filter" size={28} color={Black} />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <Text style={{ color: Black, fontSize: 16 }}>
                  Deposit a cheque
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Icon name="chevron-forward-outline" size={28} color={'grey'} />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 10,
              alignItems: 'center',
            }}>
            <View style={{ width: '80%', flexDirection: 'row' }}>
              <View style={{}}>
                <Icon name="aperture-outline" size={28} color={'red'} />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <Text style={{ color: Black, fontSize: 16 }}>
                  Pay buy Bank app
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Icon name="chevron-forward-outline" size={28} color={'grey'} />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 10,
              alignItems: 'center',
            }}>
            <View style={{ width: '80%', flexDirection: 'row' }}>
              <View style={{}}>
                <AntDesign name="codepen" size={28} color={Black} />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <Text style={{ color: Black, fontSize: 16 }}>
                  International Payment tracker
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Icon name="chevron-forward-outline" size={28} color={'grey'} />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 10,
              alignItems: 'center',
            }}>
            <View style={{ width: '80%', flexDirection: 'row' }}>
              <View style={{}}>
                <Icon name="arrow-up-circle-outline" size={28} color={Black} />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <Text style={{ color: Black, fontSize: 16 }}>
                  Manage Payment Limit
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Icon name="chevron-forward-outline" size={28} color={'grey'} />
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ marginHorizontal: 15, color: Black, fontSize: 16 }}>
            Global money
          </Text>
        </View>
        <View style={{ backgroundColor: White, marginVertical: 10 }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 10,
              alignItems: 'center',
            }}>
            <View style={{ width: '80%', flexDirection: 'row' }}>
              <View style={{}}>
                <Icon name="aperture-outline" size={28} color={Black} />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <Text style={{ color: Black, fontSize: 16 }}>
                  Send money internationally
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Icon name="chevron-forward-outline" size={28} color={'grey'} />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 10,
              alignItems: 'center',
            }}>
            <View style={{ width: '80%', flexDirection: 'row' }}>
              <View style={{}}>
                <Icon name="person-outline" size={28} color={Black} />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }}>
                <Text style={{ color: Black, fontSize: 16, lineHeight: 23 }}>
                  Pay or Manage Global Money Payees
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Icon name="chevron-forward-outline" size={28} color={'grey'} />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 10,
              alignItems: 'center',
            }}>
            <View style={{ width: '80%', flexDirection: 'row' }}>
              <View style={{}}>
                <Icon name="globe-outline" size={28} color={Black} />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <Text style={{ color: Black, fontSize: 16 }}>
                  Add convert or withdraw
                </Text>
              </View>
            </View>
            <View style={{}}>
              <Icon name="chevron-forward-outline" size={28} color={'grey'} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Paytransfer;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: LightGrey,
  },
  new: {
    margin: 15,
  },
  check: {
    backgroundColor: White,
  },
});
