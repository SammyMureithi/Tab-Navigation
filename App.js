import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './Pages/HomePage';
import SettingsPage from './Pages/SettingsPage';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={( { route } ) => ( {
          tabBarIcon: ( { focused, color, size } ) => {
            let iconName;
            if( route.name === "Home"){
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }
            else if ( route.name === "Settings" ) {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor:"gray"
      })}>
        <Tab.Screen name='Home' component={HomePage} options={{headerShown:false}} />
        <Tab.Screen name='Settings' component={SettingsPage} options={{tabBarBadge:3,title:"Cart"}}/>
      </Tab.Navigator>
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
