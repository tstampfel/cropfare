import React, { FunctionComponent, useState } from "react";

import { Text, Animated, View, TouchableOpacity } from "react-native";

import ActionSheetClass from "../../ui/ActionSheet/ActionSheetClass";
import CancelButton from "./../../assets/svgs/cancel-button.svg";
import useDimensions from "../../hooks/useDimesions";
import { color } from "../../ui/designSystem";

interface SearchActionSheetProps {
  isSearchWindowVisible: boolean;
  setIsSearchWindowVisible: (value: React.SetStateAction<boolean>) => void;
}

const SearchActionSheet: FunctionComponent<SearchActionSheetProps> = ({
  isSearchWindowVisible,
  setIsSearchWindowVisible,
}: SearchActionSheetProps) => {
  const AnimatedActionSheet =
    Animated.createAnimatedComponent(ActionSheetClass);
  const [windowWidth, windowHeight] = useDimensions();
  return (
    <AnimatedActionSheet
      animationType={"slide"}
      visible={isSearchWindowVisible}
      children={
        <>
          <View>
            <View style={{ flexGrow: 3, backgroundColor: color.green }} />
            <View
              style={{
                flexGrow: 1,
                flexDirection: "column",
                width: windowWidth / 10,
                height: (windowWidth / 26) * -1,
                alignSelf: "flex-end",
              }}
            >
              <TouchableOpacity
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                style={{
                  alignSelf: "flex-end",
                  marginTop: (windowHeight / 26) * -1,
                  marginRight: (windowWidth / 26) * -1,
                  width: (windowWidth / 26) * -1,
                  height: (windowHeight / 26) * -1,
                }}
                onPress={() => setIsSearchWindowVisible(false)}
              >
                <CancelButton
                  height={windowHeight / 10}
                  width={windowWidth / 10}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text>{"ActionSheet"}</Text>
          </View>
        </>
      }
    />
  );
};

export default SearchActionSheet;
