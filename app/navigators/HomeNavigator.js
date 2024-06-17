import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingleGroupView from "../screens/SingleGroupView";
import SingleMovie from "../screens/SingleMovie";

function HomeNavigator({ route }) {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Group"
				options={{ title: "My Movies" }}
				component={SingleGroupView}
			/>
			<Stack.Screen
				name="SingleMovie"
				options={{ title: "" }}
				component={SingleMovie}
			/>
		</Stack.Navigator>
	);
}

export default HomeNavigator;
