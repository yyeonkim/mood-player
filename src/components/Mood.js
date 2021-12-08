import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import Keyword from "./Keyword";
import { mood1, mood2, mood3, mood4 } from "../mood";

export default function Mood() {
  return (
    <View style={styles.keywordView}>
      <View style={styles.moodView}>
        {mood1.map((item) => (
          <Keyword key={item.id} item={item} />
        ))}
      </View>
      <View style={styles.moodView}>
        {mood2.map((item) => (
          <Keyword key={item.id} item={item} />
        ))}
      </View>
      <View style={styles.moodView}>
        {mood3.map((item) => (
          <Keyword key={item.id} item={item} />
        ))}
      </View>
      <View style={styles.moodView}>
        {mood4.map((item) => (
          <Keyword key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keywordView: {
    marginTop: 20,
  },

  moodView: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
