import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

//global components
function Icons({ type, handleIcons }) {
  return (
    <TouchableOpacity onPress={handleIcons}>
      <AntDesign name={type} size={24} color="orange" />
    </TouchableOpacity>
  );
}

export default Icons;
