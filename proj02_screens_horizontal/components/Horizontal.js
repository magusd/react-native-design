import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
export default function Horizontal() {
  return (
    <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
      <View style={[styles.outer, styles.blue]}>
        <Text style={styles.innerText}>Welcome to Yrus</Text>
      </View>
      <View style={[styles.outer, styles.red]}>
        <Text style={styles.innerText}>Screen 2</Text>
      </View>
      <View style={[styles.outer, styles.green]}>
        <Text style={styles.innerText}>Screen 3</Text>
      </View>
      <View style={[styles.outer, styles.purple]}>
        <Text style={styles.innerText}>Screen 4</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  outer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  blue: {
    backgroundColor: "#30336B",
  },
  red: {
    backgroundColor: "#AE1438",
  },
  green: {
    backgroundColor: "#218F76",
  },
  purple: {
    backgroundColor: "#BB2CD9",
  },
  innerText: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
  },
});
