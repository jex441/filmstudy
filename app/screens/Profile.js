import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useStore } from "../store";
import colors from "../config/colors";
import AppListItem from "./components/AppListItem";
import Screen from "./components/Screen";
import LinkItem from "./components/LinkItem";
import authApi from "../api/authApi";

export default function Profile({ navigation }) {
	const { setUser } = useStore();
	const logoutHandler = () => {
		const data = authApi.logout();
		setUser({ isLoggedIn: false });
		// navigation.navigate("Home");
	};
	return (
		<Screen>
			<AppListItem
				title={"Jeffrey Wood"}
				subtitle={"Coder"}
				source={require("../assets/profilephoto.jpg")}
			/>
			<LinkItem
				title="My Messages"
				source="format-list-bulleted"
				color={colors.primary}
				pressHandler={() => navigation.navigate("Messages")}
			/>
			<LinkItem
				title="My Listings"
				source="email"
				color={colors.secondary}
				pressHandler={() => navigation.navigate("MyListings")}
			/>
			<View style={{ marginTop: 40 }}>
				<LinkItem
					title="Logout"
					source="logout"
					color="#ffe66d"
					pressHandler={() => {
						logoutHandler();
					}}
				/>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		backgroundColor: "#f9f9f9",
		justifyContent: "",
		alignItems: "flex-start",
		width: "100%",
	},
});
