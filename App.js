import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StateProvider } from "./state";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

import AppNavigator from "./app/navigators/AppNavigator";
import LoggedOutNavigator from "./app/navigators/LoggedOutNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
	const isLoggedIn = true;
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
		<ClerkProvider
			publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
		>
			<StateProvider initialState={initialState} reducer={reducer}>
				<NavigationContainer>
					<SignedIn>
						<AppNavigator />
					</SignedIn>
					<SignedOut>
						<LoggedOutNavigator />
					</SignedOut>
				</NavigationContainer>
			</StateProvider>
		</ClerkProvider>
	);
}
