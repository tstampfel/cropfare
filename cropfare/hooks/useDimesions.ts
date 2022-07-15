import { Dimensions } from "react-native";

export default function useDimensions(): [number, number] {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return [windowWidth, windowHeight];
}
