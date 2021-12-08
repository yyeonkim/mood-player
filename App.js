import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Mood from "./src/components/Mood";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={[styles.title, styles.text]}>오늘 기분이 어떠신가요?</Text>
      <Text style={[styles.text, styles.subTitle]}>
        아래 키워드를 선택해주세요 (2개)
      </Text>
      <Mood />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#21232B",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
  },

  title: {
    fontSize: 25,
  },

  subTitle: {
    fontSize: 18,
    marginTop: 10,
    color: "rgba(256, 256, 256, .8)",
  },
});
