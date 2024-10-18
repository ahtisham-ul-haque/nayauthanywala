import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { White } from '../../utils/Color';

const Loding = () => {
    const navigation = useNavigation();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.navigate('Login'); 
      }, 3000);
  
      return () => clearTimeout(timer);
    }, [navigation]);
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:White}}>
      <StatusBar backgroundColor={White} barStyle={'dark-content'}/>
    <ActivityIndicator color={'#181818'} size={'large'}/>
    </View>
  )
}

export default Loding

const styles = StyleSheet.create({})