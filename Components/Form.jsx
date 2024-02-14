import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const Form = ({ setObjectives, objectives }) => {
  const [inputValue, setInputValue] = useState("");

  const addObjective = () => {
    if (!inputValue) return;

    setObjectives([{ name: inputValue }, ...objectives]);
    setInputValue("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add objective"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Add" onPress={() => addObjective()} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
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
});
