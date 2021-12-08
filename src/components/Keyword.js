import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";

export default function Keyword({ item }) {
  const [isSelected, setIsSelected] = useState(false);

  const selectKeyword = () => {
    setIsSelected((current) => !current);
  };

  return (
    <Pressable onPressOut={selectKeyword}>
      <Text style={styles.text(isSelected, item.color)}>{item.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: (isSelected, color) => ({
    color: "white",
    fontSize: 16,
    padding: 10,
    backgroundColor: isSelected ? color : "rgba(256, 256, 256, 0.5)",
    borderRadius: 20,
    margin: 5,
  }),
});
