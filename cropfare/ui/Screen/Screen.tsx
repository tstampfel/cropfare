/* eslint-disable no-magic-numbers */
import React, { FunctionComponent } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
} from "react-native";
import { spacing, color } from "../designSystem";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  contentWrapper: {
    flexGrow: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  screen: {
    backgroundColor: color.white,
    flex: 1,
    justifyContent: "center",
  },
  screenGutters: {
    paddingBottom: spacing.double,
    paddingLeft: spacing.double,
    paddingRight: spacing.double,
  },
});

interface ScreenProps {
  children: React.ReactNode;
  backgroundColor?: color;
  withGutters?: boolean;
  // Set this to true when using a FlatList inside the content
  scrollable?: boolean;
}

const Screen: FunctionComponent<ScreenProps> = ({
  children,
  backgroundColor,
  withGutters = true,
  scrollable = true,
}: ScreenProps) => {
  return (
    <KeyboardAvoidingView
      style={[
        styles.screen,
        { backgroundColor: backgroundColor ? backgroundColor : color.white },
      ]}
    >
      {scrollable ? (
        <ScrollView contentContainerStyle={styles.contentWrapper}>
          <SafeAreaView style={styles.safeAreaView}>
            <View
              style={[
                styles.content,
                withGutters ? styles.screenGutters : undefined,
              ]}
            >
              {children}
            </View>
          </SafeAreaView>
        </ScrollView>
      ) : (
        <SafeAreaView style={styles.safeAreaView}>
          <View
            style={[
              styles.content,
              withGutters ? styles.screenGutters : undefined,
            ]}
          >
            {children}
          </View>
        </SafeAreaView>
      )}
    </KeyboardAvoidingView>
  );
};

export default Screen;
