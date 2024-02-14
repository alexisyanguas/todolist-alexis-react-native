import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import DeleteModal from "./DeleteModal";

const List = ({ objectives, setObjectives }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);

  const removeObjective = (index) => {
    const newObjectives = objectives.filter((_, i) => i !== index);
    setObjectives(newObjectives);
  };

  const openModal = (index) => {
    setModalVisible(true);
    setIdToDelete(index);
  };

  return (
    <View style={styles.objectives}>
      <DeleteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        removeObjective={() => removeObjective(idToDelete)}
      />
      {objectives.map((objective, key) => (
        <View style={styles.objective} key={key}>
          <Text style={styles.text}>{objective.name}</Text>
          <Pressable
            onPress={() => {
              openModal(key);
            }}
            style={styles.removeIcon}
          >
            {/* X-Twitter */}
            <FontAwesome5 name="twitter" size={24} color="red" />
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default List;

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
