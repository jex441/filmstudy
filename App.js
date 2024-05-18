import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StateProvider } from "./state";

import AppNavigator from "./app/navigators/AppNavigator";
import LoggedOutNavigator from "./app/navigators/LoggedOutNavigator";
import authApi from "./app/api/authApi";

export default function App() {
	let isLoggedIn = false;

	const meHandler = async () => {
		const user = await authApi.me();
		console.log(user);
	};

	useEffect(() => {
		meHandler();
	}, []);

	const initialState = {
		theme: {
			primary: "dodgerblue",
			backgroundColor: "#FFF",
			color: "#333",
		},
	};
	const reducer = (state, action) => {
		switch (action.type) {
			case "changeTheme":
				return {
					...state,
					theme: action.newTheme,
				};

			default:
				return state;
		}
	};

	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<NavigationContainer>
				{isLoggedIn ? <AppNavigator /> : <LoggedOutNavigator />}
			</NavigationContainer>
		</StateProvider>
	);
}
