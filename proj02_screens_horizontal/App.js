import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Horizontal from "./components/Horizontal";

export default function App() {
  return (
    <View>
      <Horizontal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  outer: {
    backgroundColor: "#30336B",
    flex: 1,
    alignItems: "center",
  },
  innerText: {},
});
