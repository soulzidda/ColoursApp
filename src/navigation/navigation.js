import {createStackNavigator} from '@react-navigation/stack'
import {HomeScreen} from '../screens/Home/Home'

export function ColoursNavigation() {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Catalogue" component={CatalogueStack} />
      <Tab.Screen name="Favorites" component={FavoritesStack} />
      <Tab.Screen name="Shop" component={ShopStack} />
    </Tab.Navigator>
  )
}

function HomeStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
      <Stack.Sceen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

function CatalogueStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Catalogue" headerMode={'none'}>
      <Stack.Screen name="Catalogue" />
      <Stack.Screen name="ColourInfo" />
    </Stack.Navigator>
  )
}

function FavoritesStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Favorites" headerMode={'none'}>
      <Stack.Screen name="Favorites" />
      <Stack.Screen name="Info" />
    </Stack.Navigator>
  )
}

function ShopStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Shop" headerMode={'none'}>
      <Stack.Screen name="Shop" />
      <Stack.Screen name="ProductInfo" />
      <Stack.Screen name="Checkout" />
    </Stack.Navigator>
  )
}
