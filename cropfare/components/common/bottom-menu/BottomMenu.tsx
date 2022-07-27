import React, { FunctionComponent, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import Home from "../../../assets/svgs/home.svg";
import Favorite from "../../../assets/svgs/favorite.svg";
import Cart from "../../../assets/svgs/cart.svg";
import Profile from "../../../assets/svgs/profile.svg";
import HomeActive from "../../../assets/svgs/home-active.svg";
import FavoriteActive from "../../../assets/svgs/favorite-active.svg";
import CartActive from "../../../assets/svgs/cart-active.svg";
import ProfileActive from "../../../assets/svgs/profile-active.svg";
import * as RootNavigation from "../../../navigation/RootNavigation";
import { useFocusEffect } from "@react-navigation/native";

interface BottomMenuProps {}

const BottomMenu: FunctionComponent<BottomMenuProps> = () => {
  const dimensions = useWindowDimensions();
  const [activeMenu, setActiveMenu] = useState<
    "Home" | "Favorite" | "Cart" | "Profile"
  >("Home");

  useFocusEffect(
    React.useCallback(() => {
      if (RootNavigation.getCurrentRoute()?.name) {
        setActiveMenu(
          RootNavigation.getCurrentRoute()?.name as
            | "Home"
            | "Favorite"
            | "Cart"
            | "Profile"
        );
      }
    }, [RootNavigation.getCurrentRoute()?.name])
  );

  return (
    <View style={{ height: dimensions.height / 12, ...styles.container }}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setActiveMenu("Home");
          RootNavigation.resetRoot("Home");
        }}
      >
        <View style={styles.icon}>
          {activeMenu === "Home" ? <HomeActive /> : <Home />}
        </View>
        <Text
          style={
            activeMenu === "Home"
              ? styles.menuItemTextActive
              : styles.menuItemText
          }
        >
          {"Home"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setActiveMenu("Cart");
          RootNavigation.resetRoot("Cart");
        }}
      >
        <View style={styles.icon}>
          {activeMenu === "Cart" ? <CartActive /> : <Cart />}
        </View>
        <Text
          style={
            activeMenu === "Cart"
              ? styles.menuItemTextActive
              : styles.menuItemText
          }
        >
          {"Cart"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setActiveMenu("Favorite");
          RootNavigation.resetRoot("Favorite");
        }}
      >
        <View style={styles.icon}>
          {activeMenu === "Favorite" ? <FavoriteActive /> : <Favorite />}
        </View>
        <Text
          style={
            activeMenu === "Favorite"
              ? styles.menuItemTextActive
              : styles.menuItemText
          }
        >
          {"Favorites"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          setActiveMenu("Profile");
          RootNavigation.resetRoot("Profile");
        }}
      >
        <View style={styles.icon}>
          {activeMenu === "Profile" ? <ProfileActive /> : <Profile />}
        </View>
        <Text
          style={
            activeMenu === "Profile"
              ? styles.menuItemTextActive
              : styles.menuItemText
          }
        >
          {"Profile"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-around" },
  menuItem: {
    paddingTop: "2%",
    flexDirection: "column",
  },
  menuItemText: {
    color: "#CDD6DE",
    fontWeight: "bold",
  },
  menuItemTextActive: {
    color: "#7A9E4A",
    fontWeight: "bold",
  },
  icon: {
    alignSelf: "center",
  },
});

export default BottomMenu;
