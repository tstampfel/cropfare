import React from "react";
import { ModalProps } from "react-native";
import ActionSheet from "./ActionSheet";

interface ActionSheetClassProps {
  children: JSX.Element | JSX.Element[];
  height?: string;
}

interface ActionSheetClassState {}

class ActionSheetClass extends React.Component<
  ActionSheetClassProps & ModalProps,
  ActionSheetClassState
> {
  render() {
    return <ActionSheet {...this.props} />;
  }
}

export default ActionSheetClass;
