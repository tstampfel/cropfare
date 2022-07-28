import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { connectToDevTools } from "react-devtools-core";

import * as Localization from "expo-localization";
import i18n from "i18n-js";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import * as Sentry from "sentry-expo";
import { en } from "./translation/en";
import { hr } from "./translation/hr";

i18n.translations = {
  en,
  hr,
};

i18n.locale = Localization.locale;

Sentry.init({
  dsn: "https://1ea3c910775548bd9e57f317b209ce53@o1300250.ingest.sentry.io/6534414",
  enableInExpoDevelopment: false,
  debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

export default function App() {
  if (__DEV__) {
    connectToDevTools({
      host: "localhost",
      port: 8097,
    });
  }
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    cache: new InMemoryCache(),
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
