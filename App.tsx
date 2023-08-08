
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CountrySearchScreen from './Search';
import { ThemeProvider } from './themeContext';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Country Search" component={CountrySearchScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <ThemeProvider>
      <CountrySearchScreen />
    </ThemeProvider>
  );
};

export default App;

