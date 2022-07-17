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
  const scaleY = useSharedValue(1);
  const scaleX = useSharedValue(1);
  const ANGLE = 4;
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: scaleY.value }, { scaleX: scaleX.value }],
    };
  });

  useEffect(() => {
    scaleY.value = withSequence(
      withTiming(1.2, { duration: 500 }),
      withTiming(1, { duration: 500 }),
      withTiming(1.2, { duration: 500 }),
      withTiming(1, { duration: 500 })
    );
    scaleX.value = withSequence(
      withTiming(1.09, { duration: 500 }),
      withTiming(1, { duration: 500 }),
      withTiming(1.09, { duration: 500 }),
      withTiming(1, { duration: 500 })
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
