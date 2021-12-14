import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import WebView from "react-native-webview";

import { playlists } from "../mood";

const windowWidth = Dimensions.get("window").width;

export default function Playlist({ keywords }) {
  const playlistTitle = `${keywords[0]}-${keywords[1]}`;
  const playlistId = playlists[playlistTitle];

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
                            background-color: black;
                        }
                        
                        .player {
                            position: absolute;
                            left: 0;
                            top: 0;
                        }
                      </style>
                      </head> 
                      <body>
                      <iframe class="player" src="https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
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
    width: windowWidth,
    flex: 1,
    height: 500,
  },
});
