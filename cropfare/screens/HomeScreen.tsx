import React, { FunctionComponent, useState } from "react";
import Screen from "../ui/Screen/Screen";
import { Text, Animated, View } from "react-native";
import TopBar from "../components/top-bar/TopBar";
import ActionSheetClass from "../ui/ActionSheet/ActionSheetClass";
import { TouchableOpacity } from "react-native-gesture-handler";
import CancelButton from "./../assets/svgs/cancel-button.svg";
import useDimensions from "../hooks/useDimesions";
import { color } from "../ui/designSystem";
import SearchActionSheet from "../components/home/SearchActionSheet";
import SearchResultList from "../components/home/SearchResultList";
import BottomMenu from "../components/common/bottom-menu/BottomMenu";

interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  const [isSearchWindowVisible, setIsSearchWindowVisible] = useState(false);

  return (
    <>
      <Screen
        header={
          <TopBar
            text={"Welcome"}
            name={"Tomo"}
            setIsSearchWindowVisible={setIsSearchWindowVisible}
          />
        }
        bottomMenu={<BottomMenu />}
      >
        <SearchResultList />
      </Screen>
      <SearchActionSheet
        isSearchWindowVisible={isSearchWindowVisible}
        setIsSearchWindowVisible={setIsSearchWindowVisible}
      />
    </>
  );
};

export default HomeScreen;
