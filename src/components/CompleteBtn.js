import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function CompleteBtn({ count, mood, navigation }) {
  const [disabled, setDisabled] = useState(true);

  const getSelectedMood = () => {
    let selectedMood = [];
    // Get selected mood
    for (let i = 0; i < 4; i++) {
      const selected = mood[i].filter((item) => item.selected === true);
      if (selected.length !== 0) {
        selectedMood.push(...selected);
      }
      if (selectedMood.length === 2) break;
    }
    const keywords = [selectedMood[0].keyword, selectedMood[1].keyword];
    const gradientColor = selectedMood[1].color;

    return { keywords, gradientColor };
  };

  useEffect(() => {
    if (count == 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [count]);

  return (
    <Pressable
      style={styles.button(disabled)}
      disabled={disabled}
      onPressOut={() => {
        const { keywords, gradientColor } = getSelectedMood();
        navigation.navigate("Music", { keywords, gradientColor });
      }}
    >
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
