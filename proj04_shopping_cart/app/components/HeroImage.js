import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import HeroText from "./HeroText";
export default function HeroImage() {
  return (
    <ImageBackground
      blurRadius={3}
      source={require("../img/img2.jpeg")}
      style={styles.hero}
    >
      <HeroText />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 200,
    justifyContent: "center",
    resizeMode: "cover",
  },
});
