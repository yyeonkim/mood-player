import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CommonActions } from "@react-navigation/native";

import Playlist from "../components/Playlist";
import Loading from "../components/Loading";

export default function Music({ route, navigation }) {
  const goBackIcon = "../../assets/outline_arrow_back_ios_white_24dp.png";
  const { keywords, gradientColor } = route.params;
  const randomNum = Math.floor(Math.random() * 100);

  return keywords && gradientColor ? (
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
      <Text style={styles.text}>아무말 잔치</Text>
      <Playlist keywords={keywords} />
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
  },

  backgroundImage: {
    height: 250,
    resizeMode: "cover",
    borderRadius: 10,
    opacity: 0.7,
  },

  text: {
    paddingVertical: 40,
    fontSize: 25,
    color: "white",
  },
});
