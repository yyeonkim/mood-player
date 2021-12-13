import React from "react";
import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

const playlistId = "7ghvOyDA3MuhHgIdcKeGRf";

export default function Playlist() {
  return (
    <View style={styles.playlist}>
      <WebView
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        source={{
          html: `
                    <!DOCTYPE html>
                    <html>
                      <head>
                      <style>
                        body {
                            background-color: #21232B;
                        }
                        
                        .player {
                            position: absolute;
                            width: 100%;
                            left: 0;
                        }
                      </style>
                      </head> 
                      <body>
                      <iframe src="https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                      </body>
                    </html>
              `,
        }}
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  playlist: {
    height: 130,
  },
});
