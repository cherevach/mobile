import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';import Ionicons from 'react-native-vector-icons/Ionicons';
import MainScreen from './screens/MainScreen'
import SecondScreen from './screens/SecondScreen';
 
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconName;

            if (route.name === 'Main') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Charts') {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000000',
          inactiveTintColor: '#696969',
        }}
      >
        <Tab.Screen name='Main' component={MainScreen} />
        <Tab.Screen name='Charts' component={SecondScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}