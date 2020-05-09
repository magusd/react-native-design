import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function HeroText() {
  return (
    <View>
      <Text style={styles.headerText}>Laptops</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    //android
    elevation: 1,
    //ios
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderRadius: 10,
    //all
    alignSelf: "center",
    fontSize: 25,
    color: "#292929",
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 10,
    fontWeight: "bold",
  },
});
