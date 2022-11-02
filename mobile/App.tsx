import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Center, Text } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bgColor="black">
        <Text fontSize={24} color="white">Hello!</Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}