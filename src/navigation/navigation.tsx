import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home.screen';
import Profile from '../screens/Profile/Profile.screen';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Splash from '../screens/Splash';
import Loding from '../screens/Loding';
import Login from '../screens/Login';
import DashBoard from '../screens/DashBoard';
import BankAccount from '../screens/BankAccount/BankAccount';
import { ThemeColor } from '../utils/Color';
import Paytransfer from '../screens/Paytransfer';
import From from '../screens/From';
import To from '../screens/To/PayeeList';
import To_1 from '../screens/To_1/To_1';
import Pin from '../screens/Pin/Pin'
import GlobalMoneyAccount from '../screens/GlobalMoneyAccount/GlobalMoneyAccount';
import GlobalBritishPounds from '../screens/GlobalBritishPounds/GlobalBritishPounds';
import ManageAccount from '../screens/ManageAccount/ManageAccount';
import AccountDetailsScreen from '../screens/AccountDetails/AccountDetails';
import CurrenciesScreen from '../screens/Curencies/CurrenciesScreen';
import ManageCard from '../screens/ManageCaed/ManageCard';
import Statement from '../screens/StateMent/Statement';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          switch (route.name) {
            case 'Account':
              iconName = 'wallet';
              break;
            case 'Pay & Transfer':
              iconName = 'arrow-up-circle-outline';
              break;
            case 'My Business':
              iconName = 'cog-outline';
              break;
            case 'Plan':
              iconName = 'stats-chart-outline';
              break;
            case 'Support':
              iconName = 'chatbox-ellipses-outline';
              break;
            default:
              iconName = 'alert-circle';
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: ThemeColor, // Active tab color
        tabBarInactiveTintColor: 'gray', // Inactive tab color
      })}
    >
      <Tab.Screen
        name="Account"
        component={DashBoard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Pay & Transfer"
        component={Paytransfer}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Plan"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Support"
        component={Profile}
        options={{ headerShown: false }}
      />
      
    </Tab.Navigator>
  );
}

// Main Navigation
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Initial Screens */}
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loding"
          component={Loding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        {/* After login, show the bottom tab navigation */}
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="DashBoard"
          component={BankAccount}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Paytransfer"
          component={Paytransfer}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="From"
          component={From}
          options={{ headerShown: false }}
        />
       

         <Stack.Screen
          name="GlobalMoneyAccount"
          component={GlobalMoneyAccount}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="AccountDetailsScreen"
          component={AccountDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageCard"
          component={ManageCard}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Statement"
          component={Statement}
          options={{ headerShown: false }}
        />
        
        
           <Stack.Screen
          name="CurrenciesScreen"
          component={CurrenciesScreen}
          options={{ headerShown: false }}
        />
        
        
          <Stack.Screen
          name="ManageAccount"
          component={ManageAccount}
          options={{ headerShown: false }}
        />
        
         <Stack.Screen
          name="GlobalBritishPounds"
          component={GlobalBritishPounds}
          options={{ headerShown: false }}
        />
        
           <Stack.Screen
          name="To"
          component={To}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="To_1"
          component={To_1}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Pin"
          component={Pin}
          options={{ headerShown: false }}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
