import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";

import Playlist from "../components/Playlist";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Music({ route }) {
  const { keywords } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.imageView}>
        <Image
          style={styles.backgroundImage}
          fadeDuration={500}
          source={{
            uri: `https://source.unsplash.com/random/?${keywords[0]},${keywords[1]}`,
          }}
        />
      </View>
      <View style={styles.playlistView}>
        <Playlist />
      </View>
      <Text style={styles.text}>아무말 잔치</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#21232B",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageView: {
    width: 500,
    height: 500,
  },

  playlistView: {
    width: windowWidth,
  },

  backgroundImage: {
    height: 350,
    resizeMode: "cover",
  },

  text: {
    color: "white",
  },
});
