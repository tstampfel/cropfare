import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import BottomMenu from "../components/common/bottom-menu/BottomMenu";
import Screen from "../ui/Screen/Screen";

interface CartScreenProps {}

const CartScreen: FunctionComponent<CartScreenProps> = () => {
  return (
    <>
      <Screen bottomMenu={<BottomMenu />}>
        <View>
          <Text>{"CartScreen"}</Text>
        </View>
      </Screen>
    </>
  );
};

export default CartScreen;
