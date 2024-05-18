import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";

function LoggedOutNavigator(props) {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	);
}

export default LoggedOutNavigator;
