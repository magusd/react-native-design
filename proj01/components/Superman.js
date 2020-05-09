import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Red from "./Red";
export default function Superman() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
