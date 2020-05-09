import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import LoginForm from "./LoginForm";
export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("./images/lcologo.png")} />
        <Text style={styles.title}>A simple login app</Text>
      </View>

      <View style={styles.myForm}>
        <LoginForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282830",
    width: Dimensions.get("window").width,
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
  },
  myForm: {
    flex: 1,
    color: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
