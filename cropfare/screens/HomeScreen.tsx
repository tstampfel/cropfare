import React, { FunctionComponent } from "react";
import Screen from "../ui/Screen/Screen";
import Svg, { Circle, Rect } from "react-native-svg";
import { View } from "react-native";
import TopBar from "./../assets/svgs/top-bar.svg";
interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  return (
    <Screen>
      <TopBar />
    </Screen>
  );
};

export default HomeScreen;
