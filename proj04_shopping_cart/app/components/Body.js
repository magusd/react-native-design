import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CompoImage from "./CompoImage";
import HeroBanner from "./HeroBanner";

export default function Body() {
  return (
    <View style={styles.container}>
      <View style={styles.full}>
        <HeroBanner />
      </View>
      <View style={styles.full}>
        <CompoImage imageSource={require("../img/img5.jpeg")} />
      </View>

      <View style={styles.column1}>
        <CompoImage imageSource={require("../img/img3.jpeg")} />
      </View>
      <View style={styles.column2}>
        <CompoImage imageSource={require("../img/img4.jpg")} />
      </View>
      <View style={styles.full}>
        <CompoImage imageSource={require("../img/img5.jpeg")} />
      </View>

      <View style={styles.column2}>
        <CompoImage imageSource={require("../img/img6.jpeg")} />
      </View>
      <View style={styles.column1}>
        <CompoImage imageSource={require("../img/img2.jpeg")} />
      </View>
      <View style={styles.full}>
        <CompoImage imageSource={require("../img/img3.jpeg")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
    backgroundColor: "#3b5998",
  },
  column1: {
    flex: 1,
    padding: 5,
  },
  column2: {
    flex: 2,
    padding: 5,
  },
  column3: {
    flex: 1,
    padding: 5,
  },
  full: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});
