import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ErrorBoundry from './ErrorBoundary';
import HomeScreen from '../screens/Home';
import Login from '../screens/Login';
import CreateNewAccount from '../screens/CreateNewAccount';
import OTPScreen from '../screens/OtpScreen';
import SetPassword from '../screens/SetPassword';
import ForgotPassword from '../screens/ForgotPassword';
import Dashboard from '../screens/Dashboard';
import AnimTab1 from '../screens/TabsNavigator/TabsNavigator';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <ErrorBoundry>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right', // Slide transition
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreateNewAccount" component={CreateNewAccount} />
          <Stack.Screen name="OTPScreen" component={OTPScreen} />
          <Stack.Screen name="SetPassword" component={SetPassword} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Tab1" component={AnimTab1} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundry>
  );
};
