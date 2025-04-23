import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
          onPress={()=>navigation.goBack()}
            style={{
              height: 25,
              width: 25,
              borderRadius: 25,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
           <Icons name='close' color={"#000"} size={20}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logOffButton}>
            <Text style={styles.logOffText}>Log off</Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#fff',
              position: 'absolute',
              top: 80,
              right: 40,
              width: '90%',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              paddingVertical: 10,
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
              paddingHorizontal:20
            }}>
              <View>

            <Text style={styles.name}> MAH JABEEN</Text>
            <Text style={styles.subText}>Update your personal details</Text>
            </View>
<View>
<Icons name='chevron-forward-outline' color={"#000"} size={20}/>
</View>
          </View>
        </View>
        {/* Section: Documents and Messages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Documents and messages</Text>
          <Option title="My documents" />
          <Option title="Secure messages" />
        </View>

        {/* Section: Settings and Preferences */}
        <View style={styles.sections}>
          <Text style={styles.sectionTitle}>Settings and preferences</Text>
          <Option title="Security and generate security code" />
          <Option title="Cookies" />
          <Option title="Communication preferences" />
          <Option title="Open banking connections" />
          <Option title="Spending insights" />
          <Option title="Additional Support" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Option = ({ title }: { title: string }) => (
  <TouchableOpacity style={styles.option}>
    <Text style={styles.optionText}>{title}</Text>
    <Icons name='chevron-forward-outline' color={"#000"} size={20}/>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#D32F2F',
    padding: 20,
    position: 'relative',
    height: 120,
  },
  name: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    color: '#000',
    fontSize: 14,
    marginTop: 4,
  },
  logOffButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  logOffText: {
    color: '#fff',
    fontWeight: '600',
  },
  section: {
    padding: 16,
    borderBottomColor: '#ccc',
    marginTop: 30,
  },
  sections: {
    padding: 16,
    borderBottomColor: '#ccc',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 15,
    color: '#000',
  },
  arrow: {
    fontSize: 20,
    color: '#000',
  },
});

export default SettingsScreen;
