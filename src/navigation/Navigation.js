import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CatalogueScreen from '../screens/Catalogue/Catalogue.screen';
import ColourInfoScreen from '../screens/ColourInfo/ColourInfo.screen';
import FavoritesScreen from '../screens/Favorites/Favorites.screen';
import CartScreen from '../screens/Cart/Cart.screen';
import ProductInfoScreen from '../screens/ProductInfo/ProductInfo.screen';
import CheckoutScreen from '../screens/Checkout/Checkout.screen';
import Icon from 'react-native-vector-icons/FontAwesome';

export function ColoursTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="catalogue"
      tabBarOptions={{
        activeTintColor: 'black',
      }}>
      <Tab.Screen
        name="catalogue"
        component={CatalogueStack}
        options={{
          tabBarLabel: 'Catalogue',
          tabBarIcon: ({color, size}) => (
            <Icon name={'search'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="favorites"
        component={FavoritesStack}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color, size}) => (
            <Icon name={'heart-o'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="shop"
        component={ShopStack}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Icon name={'shopping-cart'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function CatalogueStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="catalogue" headerMode={'none'}>
      <Stack.Screen name="catalogue" component={CatalogueScreen} />
      <Stack.Screen name="colourInfo" component={ColourInfoScreen} />
    </Stack.Navigator>
  );
}

const FavoritesStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="favorites" headerMode={'none'}>
      <Stack.Screen name="favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

const ShopStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="shop" headerMode={'none'}>
      <Stack.Screen name="shop" component={CartScreen} />
      <Stack.Screen name="productInfo" component={ProductInfoScreen} />
      <Stack.Screen name="checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};
