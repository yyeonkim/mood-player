import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { mood1, mood2, mood3, mood4 } from "../mood";

export default function CompleteBtn({ count }) {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (count == 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [count]);

  const moveToScreen = () => {
    mood1.map((item) => (item.selected = false));
    mood2.map((item) => (item.selected = false));
    mood3.map((item) => (item.selected = false));
    mood4.map((item) => (item.selected = false));
  };

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
