import React, { useState } from "react";
import { View, Text } from "react-native";

// FarmerList component with farmName, farmProduce, and farmImage as props.
const FarmerList = ({ farmName, farmProduce, farmImage }) => {
  return (
    <View>
      <Text>{farmName}</Text>
      <Text>{farmProduce}</Text>
      <Text>{farmImage}</Text>
    </View>
  );
};
