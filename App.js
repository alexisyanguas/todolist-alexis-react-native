import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
} from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState(""); // [state, setState
  const [objectives, setObjectives] = useState([
    { name: "Buy Milk" },
    { name: "Go to the gym" },
    { name: "Learn React Native" },
  ]);

  const addObjective = () => {
    if (!inputValue) return;

    setObjectives([{ name: inputValue }, ...objectives]);
    setInputValue("");
  };

  const removeObjective = (index) => {
    const newObjectives = objectives.filter((_, i) => i !== index);
    setObjectives(newObjectives);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add objective"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button title="Add" onPress={() => addObjective()} />
      </View>
      <View style={styles.objectives}>
        {objectives.map((objective, key) => (
          <View style={styles.objective} key={key}>
            <Text style={styles.text}>{objective.name}</Text>
            <Pressable
              onPress={() => removeObjective(key)}
              style={styles.removeIcon}
            >
              {/* X-Twitter */}
              <FontAwesome5 name="twitter" size={24} color="red" />
            </Pressable>
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
