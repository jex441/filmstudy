import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import data from "../../data";
import HomeNavigator from "./HomeNavigator";
import SearchNavigator from "./SearchNavigator";
import AccountNavigator from "./AccountNavigator";

import colors from "../config/colors";
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
						<MaterialCommunityIcons
							name={"format-list-bulleted-square"}
							size={40}
							color={colors.primary}
						/>
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
						<MaterialCommunityIcons
							name={"magnify"}
							size={40}
							color={colors.primary}
						/>
					),
				}}
				component={SearchNavigator}
				initialParams={{ data: data }}
			/>
			<Tab.Screen
				name="Account"
				options={{
					headerShown: false,
					tabBarLabel: "",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name={"account"}
							size={40}
							color={colors.primary}
						/>
					),
				}}
				component={AccountNavigator}
				initialParams={{ data: data }}
			/>
		</Tab.Navigator>
	);
}

export default AppNavigator;
