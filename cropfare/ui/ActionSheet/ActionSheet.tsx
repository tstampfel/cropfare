import React from "react";
import { StyleSheet, View, Modal, ModalProps } from "react-native";
import { color, spacing, radius } from "../designSystem";

interface ActionSheetProps {
  children: JSX.Element | JSX.Element[];
  height?: string;
}

// IMPORTANT NOTE
// do not put inside a <Screen> Component,
// instead, set this ActionSheet as a sibling of Screen

const ActionSheet = ({
  children,
  height,
  ...props
}: ActionSheetProps & ModalProps) => {
  return (
    <Modal animationType="fade" visible={true} transparent={true} {...props}>
      <View style={styles.sizer}>
        <View style={[styles.content, height ? { height: height } : undefined]}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: color.white,
    borderTopLeftRadius: radius.large,
    borderTopRightRadius: radius.large,
    padding: spacing.double,
  },
  sizer: {
    /* eslint react-native/no-color-literals: 0 */
    backgroundColor: "rgba(0,0,0,0.8)",
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default ActionSheet;
