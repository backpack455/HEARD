import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SearchScreen from'./screens/Search'
import CFScreen from'./screens/ComplaintForm'
import {MaterialIcons ,Ionicons, Octicons} from '@expo/vector-icons'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import PCScreen from './screens/PastComplaints'
import StatsScreen from './screens/Statistics'
import  {Button, Alert} from 'react-native'
import NewsFeedScreen from './screens/NewsFeed'
import PetitionsScreen from './screens/Petitions'
import {IconButton, Colors} from 'react-native-paper'
import LocationResultsScreen from './screens/LocationResults'
import DetailsScreen from './screens/Details'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const SearchStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const HomeTabs = createMaterialTopTabNavigator();
const CFTab = createStackNavigator();
const PCTab = createStackNavigator();



function Feed() {
  return (
    <HomeTabs.Navigator initialRouteName="Prediction"
    >
      <HomeTabs.Screen name="News Feed" component={NewsFeedScreen}
        options={{
          headerTitle: "Estimated People",

        }}
      />
      <HomeTabs.Screen name="Petitions" component={PetitionsScreen} />
      <HomeTabs.Screen name="Statistics" component={StatsScreen} />
    </HomeTabs.Navigator>
  );
}


function CF() {
  return (
    <CFTab.Navigator initialRouteName="CF"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fee11a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#000000'
      },
    }}
    >
      <CFTab.Screen name="CF" component={CFScreen}
        options={{
          headerTitle: "Complaint Form Submission",

        }}
      />
    </CFTab.Navigator>
  );
}

function PC() {
  return (
    <PCTab.Navigator initialRouteName="PC"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fee11a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#000000'
      },
    }}
    >
      <PCTab.Screen name="PC" component={PCScreen}
        options={{
          headerTitle: "Results",
          headerTitleStyle: {
            color: "#000000"
          },
          headerBackTitleStyle: {
            color: '#000000'
          }, 
        }}
      />
      <PCTab.Screen name="Details" component={DetailsScreen}
        options={{
          headerTitle: "Details",
          headerTitleStyle: {
            color: "#000000"
          },
          headerBackTitleStyle: {
            color: '#000000'
          },
          headerTintColor: "#000"
        }}
      />
    </PCTab.Navigator>
  );
}


function Root() {
  return (
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fee11a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#000000'
      },
    }}
    >
      <Stack.Screen name="Home" component={Feed}
        options={{
          headerTitle: "Home Feed",
        }}
      />
    </Stack.Navigator>
  );
}

function Search() {
  return (
    <SearchStack.Navigator initialRouteName="Search"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fee11a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#000000'
      },
    }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen}
        options={{
          headerTitle: "Safe Destination Search",
          headerRight: () => (
            <IconButton
            icon="alarm-bell"
            color='#000000'
            size={25}
            onPress={() => 
            Alert.alert('Help status has now been enabled.')}
            />
          )
        }}
      />
      <SearchStack.Screen name="Results" component={LocationResultsScreen}
        options={{
          headerTitle: "Results",
          headerTitleStyle: {
            color: "#000000"
          },
          headerBackTitleStyle: {
            color: '#000000'
          },
          headerTintColor: "#000",
          headerRight: () => (
            <IconButton
            icon="phone"
            color='#000000'
            size={25}
            onPress={() => 
            Alert.alert('Thank you for letting us know you have avoided this location. This will help us take action to make this a safer location.')}
            />
          ),
        }}
        
      />
    </SearchStack.Navigator>
  );
}

export default function App() {
  let alertStatus = false;
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        sceneAnimationEnabled="true"
        activeColor="#000000"
        inactiveColor="#000000"
        barStyle={{ backgroundColor: '#fce21b' }}
        
      >
        <Tab.Screen name="Home" component={Root} 
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-home" size={24} color="#000000" />
          ),
        }}
        />
        <Tab.Screen name="Safe Destination" component={Search}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-search" size={24} color="#000000"/>
          )
        }}
        /> 
        <Tab.Screen name="Complaint Form" component={CF} 
        options={{
          tabBarIcon: ({color}) => (
            <Octicons name="issue-opened" size={24} color="#000000" />
          ),
          headerTitle: "Prep Resources",
        }}
        />
        <Tab.Screen name="Past Complaints" component={PC} 
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="library-books" size={24} color="#000000" />
          ),
          headerTitle: "Prep Resources",
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}