import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CoordinateAC from './classes/CoordinateAC.js'

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>
        {'Черевач Анатолій\n Група ІП-83\n ЗК ІП-8525'}
      </Text>
    </View>
  );
}

function SecondScreen() {
  const coordinate1 = new CoordinateAC('E');
  const coordinate2 = CoordinateAC.createWithValues('E', 80, 36, 40);
  const coordinate3 = CoordinateAC.createWithValues('E', -90, 10, 30);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 20, lineHeight: 80 }}>
        {'coordinate 1 : ' + coordinate1.toString() + '\n'}
        {'coordinate 2 : ' + coordinate2.toString() + '\n'}
        {'coordinate 3 : ' + coordinate3.toString() + '\n'}
        {'1 and 2 middle : ' + CoordinateAC.middleTwoCoordinate(coordinate1, coordinate2).toString() + '\n'}
        {'2 and 3 middle : ' + coordinate2.middleCoordinate(coordinate3).toString() + '\n'}
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconName;

            if (route.name === 'Main') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Coordinates') {
              iconName = focused ? 'compass' : 'compass-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000000',
          inactiveTintColor: '#696969',
        }}
      >
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Coordinates" component={SecondScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}