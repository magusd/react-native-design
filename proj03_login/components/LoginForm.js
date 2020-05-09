import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from "react-native";
export default function LoginForm() {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        style={styles.input}
      />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(100,100,100,0.8)",
    paddingLeft: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    backgroundColor: "#27ae60",
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
