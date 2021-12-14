import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Playlist from "../components/Playlist";
import Loading from "../components/Loading";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Music({ route }) {
  const { keywords, gradientColor } = route.params;

  return keywords && gradientColor ? (
    <LinearGradient colors={[gradientColor, "black"]} style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.imageView}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri: `https://source.unsplash.com/random/?${keywords[0]},${keywords[1]}`,
          }}
        />
      </View>
      <Text style={styles.text}>아무말 잔치</Text>
      <View style={styles.playlistView}>
        <Playlist />
      </View>
    </LinearGradient>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
  },

  imageView: {
    width: 250,
    height: 250,
    elevation: 5,
  },

  playlistView: {
    width: windowWidth,
  },

  backgroundImage: {
    height: 250,
    resizeMode: "cover",
    borderRadius: 10,
    opacity: 0.7,
  },

  text: {
    color: "white",
  },
});
