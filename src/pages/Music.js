import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Music({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>
        이 노래를 추천드리고 싶네요
      </Text>
      <Text style={[styles.text, styles.subTitle]}>
        노래를 가져오는 중입니다.
      </Text>
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
