import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import useDimensions from "../../hooks/useDimesions";
import { fontSize, fontWeight, spacing } from "../../ui/designSystem";

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
});

export default SearchSelectionDisplay;
