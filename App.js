import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./components/List/List";
import Images from "./components/Images/Images";
import Icons from "./components/Icons/Icons";
import { useState } from "react";
/* import Details from "./components/Details/Details";*/

const Stack = createNativeStackNavigator();

export default function App() {
  //state for harmburger  menu
  const [icon, setIcon] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name=" "
          component={List}
          options={{
            headerLeft: () => (
              <Icons
                type={icon ? "menuunfold" : "menufold"}
                handleIcons={() => setIcon(!icon)}
              />
            ),
            headerRight: () => <Images />,
          }}
        />
        {/*  <Stack.Screen name="Details" component={Details} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
