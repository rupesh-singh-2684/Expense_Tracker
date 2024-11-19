import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/homeScreen';
import NewExpenseScreen from '../screens/newExpenseScreen';
import IncomeScreen from '../screens/incomeScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RootStack = createNativeStackNavigator();

const Router = () => {
  return (
    <GestureHandlerRootView>
    <RootStack.Navigator>
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="NewExpenseScreen"
        component={NewExpenseScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="IncomeScreen"
        component={IncomeScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
    </GestureHandlerRootView>
  )
}

export default Router


