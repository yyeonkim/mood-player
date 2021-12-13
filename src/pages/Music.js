import React from "react";
import { StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";

import Playlist from "../components/Playlist";

export default function Music() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Playlist />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#21232B",
    flex: 1,
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
