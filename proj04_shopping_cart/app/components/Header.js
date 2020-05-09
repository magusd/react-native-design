import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require("../img/img1.png")} style={styles.logo} />
      <Text style={styles.text}>Lobs Shopping Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: "#000",
    width: Dimensions.get("window").width,
  },
  logo: {
    width: 40,
    height: 40,
    marginTop: 20,
  },
  text: {
    marginTop: 20,
    marginLeft: 10,
    color: "#000",
    fontWeight: "bold",
    fontSize: 15,
    fontStyle: "italic",
  },
});
