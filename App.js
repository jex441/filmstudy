import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet } from "react-native";
import Login from "./app/screens/Login";
import Groups from "./app/screens/Groups";
import SingleGroupView from "./app/screens/SingleGroupView";
import CreateNewGroup from "./app/screens/CreateNewGroup";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Groups" component={Groups} />
				<Stack.Screen name="Group" component={SingleGroupView} />
				<Stack.Screen name="CreateNewGroup" component={CreateNewGroup} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
