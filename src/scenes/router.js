// import { StackNavigator, createDrawerNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from "react";
import Foundation from "react-native-vector-icons/Foundation";
import Routes from '../utils/routes';
import SplashScreen from './splash.screen';
import Parties from './parties'
import AllPayments from './all.payments';
import Colors from '../utils/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Reports from './reports';
import PaymentDetails from './payment.details';
import Login from './login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator

            tabBarOptions={{
                activeTintColor: Colors.themeBlue,
                inactiveTintColor: 'gray',
                showIcon: true,
                labelStyle: { fontSize: 14, },
                style: { backgroundColor: Colors.darkBlack, paddingTop: 6 },
            }}

        >
            <Tab.Screen
                name={Routes.parties}
                component={Parties}
                options={{
                    tabBarLabel: 'Parties',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-people-circle-outline" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen name={Routes.allPayments} component={AllPayments}
                options={{
                    tabBarLabel: 'Payments',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="rupee" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={Routes.splash} component={SplashScreen} />
            <Stack.Screen name={Routes.login} component={Login} />
            <Stack.Screen name={Routes.tabNav} component={TabNavigator} />
            <Stack.Screen name={Routes.reports} component={Reports} />
            <Stack.Screen name={Routes.paymentDetails} component={PaymentDetails} />

        </Stack.Navigator>
    )
}

// const AppNavigator = StackNavigator({
//     splash: { screen: SplashScreen },
//     // checkuser: { screen: CheckUser },
//     // parentregistration: { screen: ParentRegistration },
//     // otpmessage: { screen: OTPMessage },
//     // childregistration: { screen: ChildRegistration },
//     //Tab bar  
//     // tabnavigator: { screen: TabNavigator },
//     // tabnavigator: { screen: ChildListContainer },

// }, {
//     headerMode: 'none',
// });

export default AppNavigator;



function tabIconNamed(name, flag) {

    return ({ tintColor, focused }) => (
        <Foundation
            name={name}
            size={26}
            style={{ color: tintColor, marginTop: 8 }}
        />

    );
}