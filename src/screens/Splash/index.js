import { Image, StatusBar, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';  // Navigation hook for navigation

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Loding'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#fff' }}>
      <StatusBar backgroundColor={'#fff'} barStyle={'#fff'}/>
      <View style={{ height: 100, width: '100%' }}>
        <Image 
          style={{ height: '100%', width: '100%' }} 
          resizeMode='contain' 
          source={require('../../assets/images/HSBCLOGO.png')} 
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
