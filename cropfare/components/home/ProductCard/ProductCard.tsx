import React, { FunctionComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import Card from "../../../ui/Card";

interface ProductCardProps {
  title: string;
  description: string;
  companyName: string;
  price: number;
  currency: string;
  currencySymbol: string;
  location: string;
  delivery: string;
  rating: number;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({
  title,
  description,
  companyName,
  price,
  currency,
  currencySymbol,
  location,
}: ProductCardProps) => {
  return <Card title={title}></Card>;
};

const styles = StyleSheet.create({
  container: {},
});

export default ProductCard;
