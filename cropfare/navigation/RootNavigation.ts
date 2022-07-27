import { createNavigationContainerRef } from "@react-navigation/native";
import { RootStackParamList } from "../types";

export const navigationRef = createNavigationContainerRef();

export function navigate(name: any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function getCurrentRoute() {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute();
  }
}

export function resetRoot(name: keyof RootStackParamList) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot({ index: 0, routes: [{ name }] });
  }
}
