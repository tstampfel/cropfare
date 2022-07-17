import React, { FunctionComponent, useState } from "react";
import Screen from "../ui/Screen/Screen";
import Svg, { Circle, Rect } from "react-native-svg";
import { View, Text, Animated } from "react-native";

import useDimensions from "../hooks/useDimesions";
import TopBar from "../components/top-bar/TopBar";
import ActionSheet from "../ui/ActionSheet/ActionSheet";
import ActionSheetClass from "../ui/ActionSheet/ActionSheetClass";
import { Animation } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  const AnimatedActionSheet =
    Animated.createAnimatedComponent(ActionSheetClass);
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
        <AnimatedActionSheet
          animationType={"slide"}
          visible={isSearchWindowVisible}
          children={
            <>
              <TouchableOpacity
                style={{ alignSelf: "flex-end" }}
                onPress={() => setIsSearchWindowVisible(false)}
              >
                <Text>{"X"}</Text>
              </TouchableOpacity>
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
