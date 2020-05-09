import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Blue() {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});
