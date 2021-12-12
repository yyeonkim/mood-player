import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CompleteBtn() {
  const [disabled, setDisabled] = useState(true);

  return (
    <Pressable style={styles.button(disabled)} disabled={disabled}>
      <Text style={styles.text}>완료</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: (disabled) => ({
    backgroundColor: "white",
    marginTop: 50,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 30,
    opacity: disabled ? 0.3 : 1,
  }),

  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});