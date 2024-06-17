import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "../screens/Profile";

function AccountNavigator(props) {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Profile"
				options={{ title: "Account" }}
				component={Profile}
			/>
		</Stack.Navigator>
	);
}

export default AccountNavigator;
