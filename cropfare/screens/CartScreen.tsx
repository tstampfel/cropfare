import I18n from "i18n-js";
import React, { FunctionComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BottomMenu from "../components/common/bottom-menu/BottomMenu";
import Screen from "../ui/Screen/Screen";

interface CartScreenProps {}

const CartScreen: FunctionComponent<CartScreenProps> = () => {
  return (
    <>
      <Screen>
        <View>
          <TouchableOpacity
            onPress={() => {
              I18n.locale = "hr";
            }}
          >
            <Text>{"CartScreen"}</Text>
          </TouchableOpacity>
        </View>
      </Screen>
    </>
  );
};

export default CartScreen;
