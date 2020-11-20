import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CatalogueScreen from '../screens/Catalogue/Catalogue.screen';
import ColourInfoScreen from '../screens/ColourInfo/ColourInfo.screen';
import FavoritesScreen from '../screens/Favorites/Favorites.screen';
import FavoritesInfoScreen from '../screens/FavoritesInfo/FavoritesInfo.screen';
import ShopScreen from '../screens/Shop/Shop.screen';
import ProductInfoScreen from '../screens/ProductInfo/ProductInfo.screen';
import CheckoutScreen from '../screens/Checkout/Checkout.screen';
import HomeScreen from '../screens/Home/Home.screen';

import Icon from 'react-native-vector-icons/FontAwesome';

export function ColoursTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name={'home'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Catalogue"
        component={CatalogueStack}
        options={{
          tabBarLabel: 'Catalogue',
          tabBarIcon: ({color, size}) => (
            <Icon name={'search'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color, size}) => (
            <Icon name={'heart-o'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({color, size}) => (
            <Icon name={'shopping-bag'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function CatalogueStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Catalogue" headerMode={'none'}>
      <Stack.Screen name="Catalogue" component={CatalogueScreen} />
      <Stack.Screen name="ColourInfo" component={ColourInfoScreen} />
    </Stack.Navigator>
  );
}

const FavoritesStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Favorites" headerMode={'none'}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Info" component={FavoritesInfoScreen} />
    </Stack.Navigator>
  );
};

const ShopStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Shop" headerMode={'none'}>
      <Stack.Screen name="Shop" component={ShopScreen} />
      <Stack.Screen name="ProductInfo" component={ProductInfoScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};
