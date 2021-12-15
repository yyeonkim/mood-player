import React from "react";
import { Pressable, StyleSheet, Text, View, StatusBar } from "react-native";

export default function FirstScreen({ navigation }) {
  return (
    <Pressable
      style={styles.container}
      onPressOut={() => {
        navigation.navigate("Home");
      }}
    >
      <StatusBar style="auto" />
      <View style={styles.titleView}>
        <Text style={styles.title}>Mood Player</Text>
        <Text style={styles.subTitle}>사용자 기분 맞춤 노래 제공 서비스</Text>
      </View>
      <Text style={styles.subTitle}>화면을 클릭해 주세요</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#21232B",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  titleView: {
    alignItems: "center",
  },

  title: {
    fontSize: 25,
    color: "white",
  },

  subTitle: {
    fontSize: 18,
    marginTop: 10,
    color: "rgba(256, 256, 256, .8)",
  },
});
