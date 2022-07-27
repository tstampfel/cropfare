import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import BottomMenu from "../components/common/bottom-menu/BottomMenu";
import Screen from "../ui/Screen/Screen";

interface FavoritesScreenProps {}

const FavoritesScreen: FunctionComponent<FavoritesScreenProps> = () => {
  return (
    <Screen bottomMenu={<BottomMenu />}>
      <View>
        <Text>{"FavoritesScreen"}</Text>
      </View>
    </Screen>
  );
};

export default FavoritesScreen;
