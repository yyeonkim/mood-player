import React from "react";
import { StyleSheet, View } from "react-native";

import Keyword from "./Keyword";

export default function Mood({ setCount, count, mood, setMood }) {
  return (
    <View style={styles.keywordView}>
      <View style={styles.moodView}>
        {mood[0].map((item) => (
          <Keyword
            setCount={setCount}
            count={count}
            key={item.id}
            item={item}
          />
        ))}
      </View>
      <View style={styles.moodView}>
        {mood[1].map((item) => (
          <Keyword
            setCount={setCount}
            count={count}
            key={item.id}
            item={item}
          />
        ))}
      </View>
      <View style={styles.moodView}>
        {mood[2].map((item) => (
          <Keyword
            setCount={setCount}
            count={count}
            key={item.id}
            item={item}
          />
        ))}
      </View>
      <View style={styles.moodView}>
        {mood[3].map((item) => (
          <Keyword
            setCount={setCount}
            count={count}
            key={item.id}
            item={item}
          />
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
