import React, { FunctionComponent, useState } from "react";
import Screen from "../ui/Screen/Screen";
import { Text, Animated, View } from "react-native";
import TopBar from "../components/top-bar/TopBar";
import ActionSheetClass from "../ui/ActionSheet/ActionSheetClass";
import { TouchableOpacity } from "react-native-gesture-handler";
import CancelButton from "./../assets/svgs/cancel-button.svg";
import useDimensions from "../hooks/useDimesions";
import { color } from "../ui/designSystem";

interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  const AnimatedActionSheet =
    Animated.createAnimatedComponent(ActionSheetClass);
  const [isSearchWindowVisible, setIsSearchWindowVisible] = useState(false);
  const [windowWidth, windowHeight] = useDimensions();
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
              <View>
                <View style={{ flexGrow: 3, backgroundColor: color.green }} />
                <View
                  style={{
                    flexGrow: 1,
                    flexDirection: "column",
                    width: windowWidth / 10,
                    height: (windowHeight / 26) * -1,
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
              </View>
            </>
          }
        />
      )}
    </>
  );
};

export default HomeScreen;
