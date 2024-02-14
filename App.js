import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [objectives, setObjectives] = useState([
    { name: "Buy Milk" },
    { name: "Go to the gym" },
    { name: "Learn React Native" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Add objective" />
        <Button title="Add" />
      </View>
      <View style={styles.objectives}>
        {objectives.map((objective, key) => (
          <View style={styles.objective} key={key}>
            <Text style={styles.text}>{objective.name}</Text>
          </View>
        ))}
      </View>

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
    color: "red",
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
});
