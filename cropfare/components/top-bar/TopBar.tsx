import React, { FunctionComponent } from "react";
import TopBarImage from "./../../assets/svgs/top-bar.svg";
import BarText from "../../components/top-bar/BarText";
import SearchIcon from "./SearchIcon";
import SearchSelectionDisplay, {
  SearchCategory,
} from "./SearchSelectionDisplay";
import { View, StyleSheet } from "react-native";
import { truncate } from "lodash";

interface TopBarProps {
  text: string;
  name: string;
  setIsSearchWindowVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopBar: FunctionComponent<TopBarProps> = ({
  text,
  name,
  setIsSearchWindowVisible,
}: TopBarProps) => {
  return (
    <View>
      <TopBarImage />
      <BarText text={text} name={name} />
      <SearchIcon setIsSearchWindowVisible={setIsSearchWindowVisible} />
      <SearchSelectionDisplay
        searchText={truncate(`"Grapes"`, { length: 10 })}
        searchCategory={SearchCategory.DIARY}
      />
    </View>
  );
};

export default TopBar;
