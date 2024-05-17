import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import data from "../../data";
import HomeNavigator from "./HomeNavigator";
import SearchNavigator from "./SearchNavigator";

function AppNavigator(props) {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				options={{
					headerShown: false,
					tabBarLabel: "",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name={"home"} size={40} color={"#333"} />
					),
				}}
				component={HomeNavigator}
				initialParams={{ data: data }}
			/>
			<Tab.Screen
				name="Search"
				options={{
					headerShown: false,
					tabBarLabel: "",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name={"magnify"} size={40} color={"#333"} />
					),
				}}
				component={SearchNavigator}
				initialParams={{ data: data }}
			/>
		</Tab.Navigator>
	);
}

export default AppNavigator;
