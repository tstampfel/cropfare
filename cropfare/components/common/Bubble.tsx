import React, { FunctionComponent } from "react";
import { View, Text } from "../Themed";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import useDimensions from "../../hooks/useDimesions";
import { color, fontSize, fontWeight } from "../../ui/designSystem";
import CancelButton from "../../assets/svgs/cancel-button.svg";

interface BubbleProps {
  title: string;
  containerStyle?: Record<any, StyleProp<ViewStyle>>;
}

const Bubble: FunctionComponent<BubbleProps> = ({
  title,
  containerStyle,
}: BubbleProps) => {
  const [windowWidth, windowHeight] = useDimensions();
  return (
    <View
      style={{
        ...styles.container,
        ...containerStyle,
      }}
    >
      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity
        hitSlop={{ top: 7, bottom: 7, left: 7, right: 7 }}
        onPress={() => console.log("Cancel")}
      >
        <CancelButton />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "2%",
    backgroundColor: "#7A9E4A",
    borderRadius: 20,
    marginRight: "2%",
    flexDirection: "row",
    alignContent: "flex-end",
  },
  text: {
    color: color.white,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: fontSize.m,
    fontWeight: fontWeight.bold,
    paddingRight: "2%",
    paddingLeft: "2%",
  },
});

export default Bubble;
