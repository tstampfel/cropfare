import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as React from "react";
import { Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { RootTabParamList, RootTabScreenProps } from "../types";
import * as RootNavigation from "./../navigation/RootNavigation";
import HomeActive from "./../assets/svgs/home-active.svg";
import Home from "./../assets/svgs/home.svg";
import Favorite from "./../assets/svgs/favorite.svg";
import Cart from "./../assets/svgs/cart.svg";
import Profile from "./../assets/svgs/profile.svg";
import FavoriteActive from "./../assets/svgs/favorite-active.svg";
import CartActive from "./../assets/svgs/cart-active.svg";
import ProfileActive from "./../assets/svgs/profile-active.svg";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#7A9E4A",
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          tabBarIcon: ({ focused }) => {
            return focused ? <HomeActive /> : <Home />;
          },
        })}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => {
            return focused ? <CartActive /> : <Cart />;
          },
        })}
      />
      <BottomTab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => {
            return focused ? <FavoriteActive /> : <Favorite />;
          },
        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => {
            return focused ? <ProfileActive /> : <Profile />;
          },
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
