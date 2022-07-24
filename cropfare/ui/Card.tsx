import { FunctionComponent } from "react";
import { View, StyleSheet, Text, Platform, Image } from "react-native";

interface CardProps {
  children: React.ReactNode;
}

const Card: FunctionComponent<CardProps> = ({ children }: CardProps) => {
  return (
    <View style={{ overflow: "hidden", paddingBottom: 2 }}>
      <View style={styles.container}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    marginBottom: "2%",
    marginLeft: "4%",
    marginRight: "4%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: Platform.OS === "ios" ? 1 : 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 4,
  },
});

export default Card;
