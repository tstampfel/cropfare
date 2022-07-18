import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import useDimensions from "../../hooks/useDimesions";
import { fontSize, fontWeight, spacing } from "../../ui/designSystem";
import Bubble from "../common/Bubble";

export enum SearchCategory {
  DIARY,
  VEGETABLES,
  FRUIT,
  MEAT,
  GRAINS,
  BAKED_GOODS,
  SEA_FOOD,
  NUTS_AND_SEEDS,
  HEARBS_AND_SPICES,
  OTHER,
}

interface SearchSelectionDisplayProps {
  searchText: string;
  searchCategory: SearchCategory;
}

const SearchSelectionDisplay: FunctionComponent<
  SearchSelectionDisplayProps
> = ({ searchCategory, searchText }: SearchSelectionDisplayProps) => {
  const [windowWidth, windowHeight] = useDimensions();

  return (
    <>
      <View
        style={{
          marginTop: (windowHeight / 9) * -1,
          marginLeft: windowWidth / 17,
        }}
      >
        <Text style={styles.searchText}> {searchText}</Text>
        <View style={styles.bubbleContainer}>
          <Bubble title={"Fruits"} />
          <Bubble title={"Vegetables"} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchText: {
    fontSize: fontSize.l,
    fontStyle: "italic",
    fontWeight: fontWeight.bold,
  },
  bubbleContainer: {
    marginTop: "3%",
    flex: 1,
    flexDirection: "row",
  },
});

export default SearchSelectionDisplay;
