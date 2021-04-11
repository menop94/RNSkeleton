import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './src/screens/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthContextProvider, { useAuth } from './src/context/createDataContext';

function App() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppNavigator user={user} />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default () => (
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
