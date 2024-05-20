import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useStore } from "./app/store";

import AppNavigator from "./app/navigators/AppNavigator";
import LoggedOutNavigator from "./app/navigators/LoggedOutNavigator";
import authApi from "./app/api/authApi";

export default function App() {
	const { user, setUser } = useStore();

	console.log("app", user);

	const meHandler = async () => {
		const user = await authApi.me();
		if (user.isLoggedIn) {
			setUser(user);
		}
	};

	useEffect(() => {
		meHandler();
	}, []);

	return (
		<NavigationContainer>
			{user.isLoggedIn ? <AppNavigator /> : <LoggedOutNavigator />}
		</NavigationContainer>
	);
}
