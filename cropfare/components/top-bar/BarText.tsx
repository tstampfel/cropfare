import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import useDimensions from "../../hooks/useDimesions";
import { color, fontSize, fontWeight, spacing } from "../../ui/designSystem";

interface BarTextProps {
  text: string;
  name: string;
}

const BarText: FunctionComponent<BarTextProps> = ({
  text,
  name,
}: BarTextProps) => {
  const [windowWidth, windowHeight] = useDimensions();
  return (
    <View
      style={{
        top: (windowWidth / 3) * -1,
        left: windowHeight / 35,
        position: "relative",
      }}
    >
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: color.white,
    fontSize: fontSize.l,
  },
  name: {
    color: color.white,
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
  },
});

export default BarText;
