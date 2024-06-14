import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useStore } from "../store";
import colors from "../config/colors";
import Screen from "./components/Screen";
import LinkItem from "./components/LinkItem";
import authApi from "../api/authApi";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./components/Forms/AppButton";

export default function Profile({ navigation }) {
	const { user, setUser } = useStore();
	const logoutHandler = async () => {
		const data = await authApi.logout();
		setUser({ isLoggedIn: false });
	};

	return (
		<Screen>
			<View
				style={{
					height: "100%",
					justifyContent: "space-between",
				}}
			>
				<View style={styles.card}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Text style={styles.heading}>Your Passphrase</Text>
						<TouchableOpacity
							style={{
								borderWidth: 1,
								borderRadius: 5,
								padding: 5,
								paddingHorizontal: 10,
								borderColor: colors.light,
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "row",
								margin: 5,
							}}
						>
							<MaterialCommunityIcons
								name="content-copy"
								size={16}
								color={colors.medium}
							/>
							<Text style={{ fontSize: 11, margin: 2 }}>Copy</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.passphrase}>
						<Text style={{ color: colors.dark }}>
							{user.username + "-" + user.password}
						</Text>
					</View>
				</View>

				<View
					style={{
						margin: 20,
						backgroundColor: "#fff",
						borderColor: colors.light,
						borderWidth: 1,
						padding: 20,
						height: 300,
					}}
				>
					<Text style={styles.heading}>What is a passphrase?</Text>
					<Text style={{ color: colors.medium, marginVertical: 10 }}>
						<View style={{ marginVertical: 10 }}>
							<Text style={{ color: colors.medium, lineHeight: 22 }}>
								Use your passphrase to retrieve your watch list and
								recommendations if you sign out.
							</Text>
						</View>
						<View style={{ marginVertical: 10 }}>
							<Text style={{ color: colors.medium, lineHeight: 22 }}>
								You can share your passphrase with a friend to collaborate on a
								list together.
							</Text>
						</View>
						<View style={{ marginVertical: 10 }}>
							<Text style={{ color: colors.medium, lineHeight: 22 }}>
								Only share the passphrase with people you trust.
							</Text>
						</View>
					</Text>
				</View>

				<View style={styles.card}>
					<Text style={styles.heading}>Sign out</Text>
					<Text
						style={{
							color: colors.medium,
							width: 250,
							lineHeight: 22,
							marginVertical: 10,
						}}
					>
						Be sure to save your passphrase before signing out.
					</Text>
					<AppButton
						pressHandler={logoutHandler}
						title="Sign out"
						color="danger"
					/>
				</View>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	heading: {
		fontSize: 18,
		lineHeight: 28,
		fontWeight: "bold",
	},
	passphrase: {
		fontSize: 16,
		marginTop: 10,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10,
		borderColor: colors.light,
	},
	card: {
		borderWidth: 1,
		borderColor: colors.light,
		backgroundColor: "#fff",
		padding: 20,
	},
	container: {
		height: "100%",
		backgroundColor: "#f9f9f9",
		justifyContent: "",
		alignItems: "flex-start",
		width: "100%",
	},
});
