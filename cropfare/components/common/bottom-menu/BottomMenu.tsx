import React, { FunctionComponent, useState } from "react";
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

interface BottomMenuProps {}

const BottomMenu: FunctionComponent<BottomMenuProps> = () => {
  const dimensions = useWindowDimensions();
  const [activeMenu, setActiveMenu] = useState<
    "home" | "favorite" | "cart" | "profile"
  >("home");

  return (
    <View style={{ height: dimensions.height / 12, ...styles.container }}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => setActiveMenu("home")}
      >
        <View style={styles.icon}>
          {activeMenu === "home" ? <HomeActive /> : <Home />}
        </View>
        <Text
          style={
            activeMenu === "home"
              ? styles.menuItemTextActive
              : styles.menuItemText
          }
        >
          {"Home"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => setActiveMenu("cart")}
      >
        <View style={styles.icon}>
          {activeMenu === "cart" ? <CartActive /> : <Cart />}
        </View>
        <Text
          style={
            activeMenu === "cart"
              ? styles.menuItemTextActive
              : styles.menuItemText
          }
        >
          {"Cart"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => setActiveMenu("favorite")}
      >
        <View style={styles.icon}>
          {activeMenu === "favorite" ? <FavoriteActive /> : <Favorite />}
        </View>
        <Text
          style={
            activeMenu === "favorite"
              ? styles.menuItemTextActive
              : styles.menuItemText
          }
        >
          {"Favorites"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => setActiveMenu("profile")}
      >
        <View style={styles.icon}>
          {activeMenu === "profile" ? <ProfileActive /> : <Profile />}
        </View>
        <Text
          style={
            activeMenu === "profile"
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
