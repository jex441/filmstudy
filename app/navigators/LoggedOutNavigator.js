import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

function LoggedOutNavigator(props) {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={SignInScreen} />
			<Stack.Screen name="Sign Up" component={SignUpScreen} />
		</Stack.Navigator>
	);
}

export default LoggedOutNavigator;
