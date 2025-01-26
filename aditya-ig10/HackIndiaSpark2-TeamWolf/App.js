import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartPage from './screens/StartPage';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import ProductTrackingPage from './screens/ProductTrackingPage';
import StockTrackingPage from './screens/StockTrackingPage';
import AdminDashboard from './screens/AdminDashboard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Start"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="ProductTracking" component={ProductTrackingPage} />
        <Stack.Screen name="StockTracking" component={StockTrackingPage} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/supply-chain" component={SupplyChainTracePage} />
//         <Route path="/crypto" component={CryptoTrackingPage} />
//         {/* Add other routes as needed */}
//       </Switch>
//     </Router>
//   );
// }