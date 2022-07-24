import React, { FunctionComponent } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { color, fontSize } from "../../ui/designSystem";

interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: JSX.Element;
  primary?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  title,
  icon,
  primary,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={{ ...styles.primary }}>
        <View style={styles.icon}>{icon}</View>

        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
    marginRight: "7%",
  },
  title: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: fontSize.m + 1,
    fontWeight: "bold",
  },
  primary: {
    flexDirection: "row",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  secondary: {},
  buttonContainer: {
    flexShrink: 1,
    padding: "5%",
    backgroundColor: color.buttonGreen,
    borderRadius: 10,
  },
});

export default Button;
