import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const List = ({ objectives, setObjectives }) => {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [id, setId] = useState(0);

  const removeObjective = (index) => {
    const newObjectives = objectives.filter((_, i) => i !== index);
    setObjectives(newObjectives);
  };

  const openDeleteModal = (index) => {
    setDeleteModalVisible(true);
    setId(index);
  };

  const openEditModal = (index) => {
    setEditModalVisible(true);
    setId(index);
    console.log(id, index);
  };

  return (
    <View style={styles.objectives}>
      <DeleteModal
        modalVisible={deleteModalVisible}
        setModalVisible={setDeleteModalVisible}
        removeObjective={() => removeObjective(id)}
      />
      <EditModal
        modalVisible={editModalVisible}
        setModalVisible={setEditModalVisible}
        id={id}
        objectives={objectives}
        setObjectives={setObjectives}
      />
      {objectives.map((objective, key) => (
        <View style={styles.objective} key={key}>
          <Text style={styles.text}>{objective.name}</Text>
          <Pressable
            onPress={() => {
              openDeleteModal(key);
            }}
            style={styles.removeIcon}
          >
            {/* X-Twitter */}
            <FontAwesome5 name="twitter" size={24} color="red" />
          </Pressable>
          <Pressable
            onPress={() => {
              openEditModal(key);
            }}
            style={styles.editIcon}
          >
            {/* X-Twitter */}
            <FontAwesome5 name="pen" size={24} color="green" />
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
  editIcon: {
    position: "absolute",
    right: 30,
    top: 5,
  },
});
