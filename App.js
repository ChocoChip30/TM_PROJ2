import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import  Home  from './screens';
import Tabs from './navigation/Tabs';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="CryptoDetail"
          component={Home}
        />
        <Stack.Screen
          name="Transaction"
          component={Home}
        />
      </Stack.Navigator> */}
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
