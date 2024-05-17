import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingleGroupView from "../screens/SingleGroupView";
import SingleMovie from "../screens/SingleMovie";
import Groups from "../screens/Groups";
import CreateNewGroup from "../screens/CreateNewGroup";

function HomeNavigator(props) {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator>
			{/* <Stack.Screen name="Groups" component={Groups} /> */}
			<Stack.Screen name="Group" component={SingleGroupView} />
			<Stack.Screen name="SingleMovie" component={SingleMovie} />
			{/* <Stack.Screen name="CreateNewGroup" component={CreateNewGroup} /> */}
		</Stack.Navigator>
	);
}

export default HomeNavigator;
