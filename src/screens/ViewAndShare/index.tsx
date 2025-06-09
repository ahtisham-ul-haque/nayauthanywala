import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { White } from '../../utils/Color';

export default function BankAccountScreen() {
  const navigation = useNavigation();
  
  const handleCopyToClipboard = (text: string) => {
    // Would implement clipboard functionality here
    console.log(`Copied to clipboard: ${text}`);
    // In a real app, you'd use Clipboard.setString(text)
  };
  
  const handleShare = () => {
    // Would implement share functionality here
    console.log('Share button pressed');
    // In a real app, you'd use Share.share()
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="close" size={24} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>View and share account details</Text>
      </View>

      {/* Account Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <View>
            <Text style={styles.detailLabel}>IBAN</Text>
            <Text style={styles.detailValue}>GB55HBUK40129881051709</Text>
          </View>
          <TouchableOpacity 
            style={styles.copyButton}
            onPress={() => handleCopyToClipboard('GB55HBUK40129881051709')}
          >
            <MaterialIcons name="content-copy" size={22} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.detailRow}>
          <View>
            <Text style={styles.detailLabel}>SWIFT / BIC</Text>
            <Text style={styles.detailValue}>HBUKGB4197B</Text>
          </View>
          <TouchableOpacity 
            style={styles.copyButton}
            onPress={() => handleCopyToClipboard('HBUKGB4197B')}
          >
            <MaterialIcons name="content-copy" size={22} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Warning Message */}
        <View style={styles.warningContainer}>
          <Ionicons name="information-circle" size={22} color="#666" />
          <Text style={styles.warningText}>
            Be careful when sharing your details. Make sure you only share personal information with people you trust.
          </Text>
        </View>
      </View>

      {/* Share Button */}
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text style={styles.shareButtonText}>Share details</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: White, // Light purple background as shown in image
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0d0ff',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0d0ff',
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  copyButton: {
    padding: 8,
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 4,
  },
  warningText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  shareButton: {
    marginTop:30,
    marginHorizontal: 16,
    marginBottom: 24,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});