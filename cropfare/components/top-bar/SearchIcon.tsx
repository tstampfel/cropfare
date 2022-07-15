import { FunctionComponent, useEffect } from "react";
import { StyleSheet } from "react-native";
import MagnifyGlass from "./../../assets/svgs/magnify-glass.svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  withRepeat,
} from "react-native-reanimated";
import useDimensions from "../../hooks/useDimesions";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SearchIconProps {
  setIsSearchWindowVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchIcon: FunctionComponent<SearchIconProps> = ({
  setIsSearchWindowVisible,
}: SearchIconProps) => {
  const [windowWidth, windowHeight] = useDimensions();
  const rotation = useSharedValue(0);
  const ANGLE = 4;
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  useEffect(() => {
    rotation.value = withSequence(
      withTiming(-5, { duration: 500 }),
      withRepeat(withTiming(ANGLE, { duration: 1000 }), 1, true)
    );
  }, []);
  return (
    <Animated.View
      style={[
        {
          top: (windowWidth / 2.2) * -1,
          right: (windowHeight / 2.5) * -1,
          position: "relative",
        },
        animatedStyle,
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          setIsSearchWindowVisible(true);
        }}
        hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
      >
        <MagnifyGlass />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SearchIcon;
