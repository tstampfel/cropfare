import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import BottomMenu from "../components/common/bottom-menu/BottomMenu";
import Screen from "../ui/Screen/Screen";

interface ProfileScreenProps {}

const ProfileScreen: FunctionComponent<ProfileScreenProps> = () => {
  return (
    <Screen bottomMenu={<BottomMenu />}>
      <View>
        <Text>{"ProfileScreen"}</Text>
      </View>
    </Screen>
  );
};

export default ProfileScreen;
