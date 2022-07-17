import React from "react";
import {
  StyleSheet,
  View,
  GestureResponderEvent,
  Pressable,
} from "react-native";
import { color, radius, spacing } from "./designSystem";

const styles = StyleSheet.create({
  cardContainer: {
    flex: 0,
  },
  elevated: {
    backgroundColor: color.white,
    borderRadius: radius.normal,
    elevation: 2,
    padding: spacing.single,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
});

interface BaseCardProps {
  children: (false | Element)[] | (false | Element);
  secondary?: boolean;
  elevated?: boolean;
}

type CardProps = BaseCardProps & {
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
};

const BaseCard: React.StatelessComponent<BaseCardProps> = ({
  children,
}: CardProps) => <View style={styles.elevated}>{children}</View>;
const Card: React.StatelessComponent<CardProps> = ({
  children,
  secondary,
  elevated,
  onPress,
  onLongPress,
}) => {
  if (!onPress && !onLongPress) {
    return (
      <View style={styles.cardContainer}>
        <BaseCard secondary={secondary}>{children}</BaseCard>
      </View>
    );
  } else {
    return (
      <View style={styles.cardContainer}>
        <Pressable onPress={onPress} onLongPress={onLongPress}>
          <BaseCard secondary={secondary} elevated={elevated}>
            {children}
          </BaseCard>
        </Pressable>
      </View>
    );
  }
};

export default Card;
