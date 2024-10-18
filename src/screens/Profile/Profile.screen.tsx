import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from '../Home/Home.style';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }: any) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
     
      </SafeAreaView>
    </>
  );
};

export default Home;
