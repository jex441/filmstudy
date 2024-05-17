import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Search from "../screens/Search";
import SingleMovie from "../screens/SingleMovie";

function HomeNavigator(props) {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen name="SearchMovies" component={Search} />
			<Stack.Screen name="SingleMovie" component={SingleMovie} />
		</Stack.Navigator>
	);
}

export default HomeNavigator;
