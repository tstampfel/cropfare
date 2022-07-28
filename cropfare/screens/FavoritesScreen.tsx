import I18n from "i18n-js";
import React, { FunctionComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BottomMenu from "../components/common/bottom-menu/BottomMenu";
import Screen from "../ui/Screen/Screen";

interface FavoritesScreenProps {}

const FavoritesScreen: FunctionComponent<FavoritesScreenProps> = () => {
  return (
    <Screen bottomMenu={<BottomMenu />}>
      <TouchableOpacity
        onPress={() => {
          I18n.locale = "en";
        }}
      >
        <Text>{"Favorites"}</Text>
      </TouchableOpacity>
    </Screen>
  );
};

export default FavoritesScreen;
