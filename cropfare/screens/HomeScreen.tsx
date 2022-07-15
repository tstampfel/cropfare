import React, { FunctionComponent, useState } from "react";
import Screen from "../ui/Screen/Screen";
import Svg, { Circle, Rect } from "react-native-svg";
import { View, Text } from "react-native";

import useDimensions from "../hooks/useDimesions";
import TopBar from "../components/top-bar/TopBar";
import ActionSheet from "../ui/ActionSheet/ActionSheet";

interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  const [isSearchWindowVisible, setIsSearchWindowVisible] = useState(false);
  return (
    <>
      <Screen withGutters={false}>
        <TopBar
          text={"Welcome"}
          name={"Tomo"}
          setIsSearchWindowVisible={setIsSearchWindowVisible}
        />
      </Screen>
      {isSearchWindowVisible && (
        <ActionSheet
          visible={isSearchWindowVisible}
          children={
            <>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
              <Text>{"ActionSheet"}</Text>
            </>
          }
        />
      )}
    </>
  );
};

export default HomeScreen;
