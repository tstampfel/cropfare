import React, { FunctionComponent, useState } from "react";
import Screen from "../ui/Screen/Screen";
import TopBar from "../components/top-bar/TopBar";
import SearchActionSheet from "../components/home/SearchActionSheet";
import SearchResultList from "../components/home/SearchResultList";
import BottomMenu from "../components/common/bottom-menu/BottomMenu";
import i18n from "i18n-js";

interface HomeScreenProps {}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  const [isSearchWindowVisible, setIsSearchWindowVisible] = useState(false);

  return (
    <>
      <Screen
        header={
          <TopBar
            text={i18n.t("welcome")}
            name={"Tomo"}
            setIsSearchWindowVisible={setIsSearchWindowVisible}
          />
        }
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
