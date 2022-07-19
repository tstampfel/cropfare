import React, { FunctionComponent } from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

interface SearchResultListProps {}

const SearchResultList: FunctionComponent<SearchResultListProps> = () => {
  return (
    <View>
      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie1" },
          { key: "Devin2" },
          { key: "Dan3" },
          { key: "Dominic4" },
          { key: "Jackson5" },
          { key: "James6" },
          { key: "Joel7" },
          { key: "John8" },
          { key: "Jillian9" },
          { key: "Jimmy22" },
          { key: "Julie44" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default SearchResultList;
