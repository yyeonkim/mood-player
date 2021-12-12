import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Mood from "../components/Mood";
import CompleteBtn from "../components/CompleteBtn";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={[styles.title, styles.text]}>오늘 기분이 어떠신가요?</Text>
      <Text style={[styles.text, styles.subTitle]}>
        아래 키워드를 선택해주세요 (2개)
      </Text>
      <Mood navigation={navigation} />
      <CompleteBtn />
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
