/* eslint-disable no-magic-numbers */
import React, { FunctionComponent } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Text,
} from "react-native";
import { spacing, color } from "../designSystem";
import { ScrollView } from "react-native-gesture-handler";
import TopBar from "../../components/top-bar/TopBar";

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
  header?: JSX.Element;
}

const Screen: FunctionComponent<ScreenProps> = ({
  children,
  backgroundColor,
  header,
}: ScreenProps) => {
  return (
    <KeyboardAvoidingView
      style={[
        styles.screen,
        { backgroundColor: backgroundColor ? backgroundColor : color.white },
      ]}
    >
      {header ? (
        <>
          {header}
          <ScrollView contentContainerStyle={styles.contentWrapper}>
            <SafeAreaView style={styles.safeAreaView}>
              <View style={[styles.content]}>{children}</View>
            </SafeAreaView>
          </ScrollView>
        </>
      ) : (
        <ScrollView contentContainerStyle={styles.contentWrapper}>
          <SafeAreaView style={styles.safeAreaView}>
            <View style={[styles.content]}>{children}</View>
          </SafeAreaView>
        </ScrollView>
      )}
    </KeyboardAvoidingView>
  );
};

export default Screen;
