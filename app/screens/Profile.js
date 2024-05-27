import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useStore } from "../store";
import colors from "../config/colors";
import AppListItem from "./components/AppListItem";
import Screen from "./components/Screen";
import LinkItem from "./components/LinkItem";
import authApi from "../api/authApi";

export default function Profile({ navigation }) {
	const { user, setUser } = useStore();
	const logoutHandler = async () => {
		const data = await authApi.logout();
		console.log(data);
		setUser({ isLoggedIn: false });
	};
	return (
		<Screen>
			<AppListItem
				title={user.username}
				subtitle={"Coder"}
				source={require("../assets/profilephoto.jpg")}
			/>

			<View style={{ marginTop: 40 }}>
				<LinkItem
					title="Logout"
					source="logout"
					color={colors.dark}
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
