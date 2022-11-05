import { NativeBaseProvider, Center, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto"

import { AuthContextProvider } from "./src/contexts/AuthContext";

import { Loading } from './src/components/Loading';
import { NewPool } from './src/screens/NewPool';
import { THEME } from "./src/styles/theme"

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <NewPool /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}