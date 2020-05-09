import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default function CompoImage(props) {
  return <Image source={props.imageSource} style={styles.image}></Image>;
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
