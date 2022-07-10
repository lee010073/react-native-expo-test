import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import { AuthContext } from "../contexts/authContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Router = () => {
  const Stack = createNativeStackNavigator();
  const context = useContext(AuthContext);
  console.log(context, "fk context");

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
      {!!context.loginSuccess ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;
