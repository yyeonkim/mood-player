import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // gradient package
import { CommonActions } from "@react-navigation/native"; // navigation package

import Playlist from "../components/Playlist";
import { playlists } from "../playlists";

export default function Music({ route, navigation }) {
  const goBackIcon = "../../assets/outline_arrow_back_ios_white_24dp.png";
  const { keywords, gradientColor } = route.params;
  const randomNum = Math.floor(Math.random() * 100);
  const playlistTitle = `${keywords[0]}-${keywords[1]}`;
  const { comment } = playlists[playlistTitle];

  if (keywords && gradientColor) {
    return (
      <LinearGradient
        colors={[gradientColor, "#0B0B0B", "#0B0B0B", "#0B0B0B"]}
        style={styles.container}
      >
        <StatusBar style="light" />
        <Pressable
          style={styles.icon}
          onPressOut={() => {
            navigation.dispatch(CommonActions.goBack());
          }}
        >
          <Image source={require(goBackIcon)} />
        </Pressable>
        <View style={styles.imageView}>
          <Image
            style={styles.backgroundImage}
            source={{
              uri: `https://source.unsplash.com/random/?${keywords[0]}-${keywords[1]},${randomNum}`,
            }}
          />
        </View>
        <Text style={styles.title}>{playlistTitle}</Text>
        <Text style={styles.comment}>{comment}</Text>
        <Playlist keywords={keywords} />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    paddingTop: 90,
  },

  icon: {
    position: "absolute",
    top: 50,
    left: 20,
  },

  imageView: {
    width: 250,
    height: 250,
    elevation: 5,
    marginBottom: 25,
  },

  backgroundImage: {
    height: 250,
    resizeMode: "cover",
    borderRadius: 10,
    opacity: 0.7,
  },

  comment: {
    paddingBottom: 40,
    fontSize: 20,
    color: "white",
  },

  title: {
    fontSize: 15,
    marginBottom: 8,
    color: "rgba(256, 256, 256, 0.8)",
  },
});
