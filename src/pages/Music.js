import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import WebView from "react-native-webview";

const windowWidth = Dimensions.get("window").width;

export default function Music() {
  return (
    <WebView
      scalesPageToFit={true}
      bounces={false}
      javaScriptEnabled
      style={styles.playlist}
      source={{
        html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> 
                    <body>
                      <div id="baseDiv">
                        <iframe
                        src="https://open.spotify.com/embed/playlist/7ghvOyDA3MuhHgIdcKeGRf?utm_source=generator"
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      ></iframe>
                    </div>
                    </body>
                  </html>
            `,
      }}
      automaticallyAdjustContentInsets={false}
    />
  );
}

const styles = StyleSheet.create({
  playlist: {
    backgroundColor: "#21232B",
    flex: 1,
    flexDirection: "column",
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
