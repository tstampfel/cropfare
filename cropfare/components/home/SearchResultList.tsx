import React, { FunctionComponent } from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";
import ProductCard from "./ProductCard/ProductCard";

interface SearchResultListProps {}

const SearchResultList: FunctionComponent<SearchResultListProps> = () => {
  return (
    <View>
      <FlatList
        data={[
          {
            title: "Fresh Grapes",
            description:
              "Green seedless grapes are small to medium size and are round to slightly oval in shape, growing in tight or loose...",
            companyName: "Cropfare",
            price: 20,
            currency: "EUR",
            currencySymbol: "€",
            location: "Brooklyn, New York",
            delivery: "Self pickup",
            rating: 4.8,
          },
          {
            title: "Fresh Grapes 2",
            description:
              "Green seedless grapes are small to medium size and are round to slightly oval in shape, growing in tight or loose...",
            companyName: "Cropfare",
            price: 20,
            currency: "EUR",
            currencySymbol: "€",
            location: "Brooklyn, New York",
            delivery: "Self pickup",
            rating: 4.8,
          },
          {
            title: "Fresh Grapes",
            description:
              "Green seedless grapes are small to medium size and are round to slightly oval in shape, growing in tight or loose...",
            companyName: "Cropfare",
            price: 20,
            currency: "EUR",
            currencySymbol: "€",
            location: "Brooklyn, New York",
            delivery: "Self pickup",
            rating: 4.8,
          },
        ]}
        renderItem={({ item, index }) => (
          <ProductCard
            title={item.title}
            description={item.description}
            companyName={item.companyName}
            price={item.price}
            currency={item.currency}
            currencySymbol={item.currencySymbol}
            location={item.location}
            delivery={item.delivery}
            rating={item.rating}
          />
        )}
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
