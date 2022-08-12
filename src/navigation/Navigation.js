import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Register,
    Login,
    Search,
    Trips,
    List,
    Detail
} from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function AuthNavigation(props) {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

function SearchTab(props){
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="List" component={List} />
            {/* <Stack.Screen name="Detail" component={Detail} /> */}
        </Stack.Navigator>
    );
}

function TabNavigation(props) {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                tabBarStyle: {
                    backgroundColor: '#F7941D',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 10
                }
            }}
            initialRouteName={"Search"}
        >
            <Tab.Screen
                name="SearchTab"
                component={SearchTab}
                options={{
                    tabBarIcon: ({ focused }) => focused ? <Image
                        source={require('../../assets/search_icon.png')}
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain',
                            tintColor: 'white'
                        }}
                    /> : <Image
                        source={require('../../assets/search_icon.png')}
                        style={{
                            width: 32,
                            height: 32,
                            resizeMode: 'contain',
                            tintColor: 'black'
                        }}
                    />
                }}
            />
            
            <Tab.Screen
                name="Trips"
                component={Trips}
                options={{
                    tabBarIcon: ({ focused }) => focused ? <Image
                        source={require('../../assets/trips_icon.png')}
                        style={{
                            width: 25,
                            height: 25,
                            resizeMode: 'contain',
                            tintColor: 'white'
                        }}
                    /> : <Image
                        source={require('../../assets/trips_icon.png')}
                        style={{
                            width: 32,
                            height: 32,
                            resizeMode: 'contain',
                            tintColor: 'black'
                        }}
                    />
                }}
            />

        </Tab.Navigator>
    );
}

function DetailTab(props){
    const DetailTabStack = createNativeStackNavigator();
    return (
        <DetailTabStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Tab"
        >
            <DetailTabStack.Screen name="Detail" component={Detail} />
            <DetailTabStack.Screen name="Tab" component={TabNavigation} />
        </DetailTabStack.Navigator>
    );
}

export function Navigation(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={"Auth"}
            >
                <Stack.Screen name={"Auth"} component={AuthNavigation} />
                <Stack.Screen name={"Main"} component={DetailTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}