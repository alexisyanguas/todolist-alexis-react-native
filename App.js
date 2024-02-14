import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View } from "react-native";

import Form from "./Components/Form";
import List from "./Components/List";

export default function App() {
  const [objectives, setObjectives] = useState([
    { name: "Buy Milk" },
    { name: "Go to the gym" },
    { name: "Learn React Native" },
  ]);

  return (
    <View style={styles.container}>
      <Form setObjectives={setObjectives} objectives={objectives} />
      <List setObjectives={setObjectives} objectives={objectives} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  form: {
    flexDirection: "row",
  },
  objectives: {
    flexDirection: "column",
  },
  objective: {
    width: 200,
    padding: 10,
    margin: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  removeIcon: {
    position: "absolute",
    right: 5,
    top: 5,
  },
});
