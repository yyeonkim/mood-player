import React, { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";

export default function Keyword({ item, setCount, count }) {
  const [isSelected, setIsSelected] = useState(item.selected);

  const selectKeyword = () => {
    if (count < 2) {
      item.selected = !item.selected;
      setIsSelected((current) => !current);
      if (item.selected) {
        setCount((current) => current + 1);
      } else {
        setCount((current) => current - 1);
      }
    } else if (count == 2 && item.selected) {
      item.selected = false;
      setIsSelected((current) => !current);
      setCount((current) => current - 1);
    }
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
