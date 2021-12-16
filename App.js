import * as React from "react";
// React navigation package
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Music from "./src/pages/Music";
import FirstScreen from "./src/pages/FirstScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Music" component={Music} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
