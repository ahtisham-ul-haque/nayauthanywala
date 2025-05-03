import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView
} from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeColor, White } from '../../utils/Color';
import { useNavigation } from '@react-navigation/native';

const LoginNEw = ({}) => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   // Set timeout for 3 seconds (3000 milliseconds)
  //   const timer = setTimeout(() => {
  //     // Navigate to the next screen (e.g., Home screen) after 3 seconds
  //     navigation.navigate('DashBoard');  // Replace 'Home' with your desired screen name
  //   }, 3000);

  //   // Clear the timeout if the component is unmounted before the timeout
  //   return () => clearTimeout(timer);
  // }, [navigation]);
  return (
    <View style={{ flex: 1,backgroundColor:White }}>
       <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      {/* Image behind status bar */}
      <Image
        source={require("../../assets/images/imgnew.jpeg")}
        style={{
          height: 200,  // thoda zyada height taake status bar cover ho
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        resizeMode="cover"
      />
      <ScrollView>

      <View
        style={{
            height:210,
          alignSelf: 'flex-end',
          marginHorizontal: 10,
          top:210
        }}>
        <Icon name="ellipsis-horizontal" color={'#181818'} size={25} />
      </View>
      <View>
        <Text
          style={{
            color: '#181818',
            fontSize: 30,
            width: '70%',
            lineHeight: 40,
            marginHorizontal: 20,
            marginVertical: 50,
          }}>
          Good morning 17****
        </Text>
      </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Pin')}
          style={{
            height: 50,
            backgroundColor: ThemeColor,
            marginVertical: 20,
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: '800' }}>
            Log on with Face ID
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Pin')}
          style={{
            height: 40,
            backgroundColor: White,
            marginVertical: 20,
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth:1,
          }}>
          <Text style={{ color: '#000', fontSize: 14,  }}>
            Log on with Mobile Banking PIN
          </Text>
        </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View
          style={{
            height: 130,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{ height: '100%' }}
            resizeMode="contain"
            source={require('../../assets/images/fscs.png')}
          />
        </View>
        <View
          style={{
            height: 80,
            alignItems: 'center',
            backgroundColor: '#E0E0E0',
            marginHorizontal: 30,
            justifyContent:'center'
          }}>
          <Icon
            name="calculator-outline"
            size={30}
            color={'#181818'}
            style={{ marginVertical: 5 }}
          />
          <Text style={{ color: '#181818', fontSize: 16 }}>
            Generate Security Code
          </Text>
        </View>
      </View>
      </ScrollView>
    
    </View>
  );
};

export default LoginNEw;

const styles = StyleSheet.create({});
