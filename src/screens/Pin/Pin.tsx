import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { Black, White } from '../../utils/Color';

const Pin = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6 inputs
  const inputs = useRef([]); // Reference for all inputs

  const handleChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically move to next input if length is 1
    if (text.length === 1 && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Handle backspace
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputs.current[index - 1].focus(); // Move to previous input on backspace
      }
    }
  };
  useEffect(() => {
    if (otp.every(digit => digit !== '')) {
        // Navigate to the next screen when PIN is fully entered
        navigation.navigate('HomeScreen'); // Replace 'NextScreen' with the actual route name
    }
}, [otp]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: White }}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <View
        style={{
          paddingVertical: 10,
          marginHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={25} color={Black} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 100,
          alignItems: 'center',
        }}>
        <View style={{ height: 110, justifyContent: 'flex-end' }}>
          <Text
            style={{
              color: Black,
              fontSize: 25,
              marginHorizontal: 20,
              fontWeight: '400',
              paddingVertical: 5,
            }}>
            Log on
          </Text>
          <Text
            style={{
              color: Black,
              fontSize: 16,
              marginHorizontal: 20,
              fontWeight: '400',
              paddingVertical: 5,
            }}>
            Enter your Mobile Banking Pin
          </Text>
        </View>
      </View>

      {/* OTP Input Fields */}
      <View style={{ flex: 1, marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={[
              styles.input,
              value !== '' ? styles.filledInput : null // Set background black if input is filled
            ]}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)} // Detect backspace
            value={otp[index]}
            ref={(ref) => inputs.current[index] = ref} // Save reference for each input
            autoFocus={index === 0} // Focus on the first input automatically
          />
        ))}
      </View>

      {/* Forgot Pin Text */}
      <View style={{ marginVertical: 20 }}>
        <Text style={{ color: Black, textAlign: 'center', fontSize: 17, fontWeight: '600' }}>
          Forgotten your Mobile Banking Pin?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Pin;

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    marginHorizontal: 15,
    borderRadius: 25,
    width: 25,
    height: 25,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'white', // Default background
    color: Black,
    borderWidth: 2
  },
  filledInput: {
    backgroundColor: Black, // Background black when filled
    color: White, // Text white when filled
    borderWidth: 2
  },
});
