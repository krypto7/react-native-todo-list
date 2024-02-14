import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TodoScreen from "./src/screen/TodoScreen";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ marginTop: StatusBar.currentHeight || 0 }}>
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}
