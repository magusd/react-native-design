import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CompoImage from "./CompoImage";
export default function HeroBanner() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Centered text</Text>
      </View>
      <View style={styles.column3}>
        <CompoImage imageSource={require("../img/img3.jpeg")} />
      </View>
      <View style={styles.column3}>
        <CompoImage imageSource={require("../img/img4.jpg")} />
      </View>
      <View style={styles.column3}>
        <CompoImage imageSource={require("../img/img5.jpeg")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    elevation: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  text: {
    fontSize: 25,
  },
  column3: {
    flex: 1,
  },
});
