import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Button,
	TextInput,
	Text,
	ImageBackground,
} from "react-native";
import * as Yup from "yup";
import { generate, count } from "random-words";
import { useStore } from "../store";

import AppButton from "./components/Forms/AppButton";
import AppForm from "./components/Forms/AppForm";
import AppFormComponent from "./components/Forms/AppFormComponent";
import colors from "../config/colors";
import authApi from "../api/authApi";
import AppInputText from "./components/Forms/AppInputText";

function Login(props) {
	const { user, setUser } = useStore();
	const [passphrase, setPassphrase] = useState("");
	const username = generate();
	const password = generate();
	const newPassphrase = username + "-" + password;
	console.log(newPassphrase);
	return (
		<>
			<ImageBackground
				source={{
					uri: "https://screenmusings.org/movie/blu-ray/Interstellar/images/Interstellar-070.jpg",
				}}
				resizeMethod="cover"
				style={styles.container}
			>
				<View
					style={{
						width: "100%",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text style={styles.title}>FilmStudy</Text>
					<Text style={styles.subtext}>Watch Better Movies.</Text>
				</View>
				<View
					style={{
						width: "100%",
						justifyContent: "center",
						backgroundColor: "#FFF",
						padding: 20,
						borderRadius: 20,
					}}
				>
					<Text
						style={{
							fontSize: 18,
							color: colors.dark,
						}}
					>
						Passphrase
					</Text>

					<TextInput
						autoCapitalize="none"
						name="Passphrase"
						placeholder="radical-melon"
						onChangeText={(text) => setPassphrase(text)}
						style={{
							padding: 10,
							borderRadius: 10,
							borderColor: colors.medium,
							borderWidth: 1,
							marginTop: 10,
						}}
					/>
					<AppButton
						title="Login"
						pressHandler={async () => {
							console.log(passphrase);
							const data = await authApi.login(passphrase);
							console.log("data:", data);
							if (data.id) {
								setUser({ isLoggedIn: true, ...data });
							}
						}}
					/>
					<View style={styles.divider}>
						<Text style={{ color: colors.dark }}>
							Or continue without a login
						</Text>
					</View>
					<AppButton
						title="Continue"
						pressHandler={async () => {
							const data = await authApi.signup(username, password);
							if (data.isLoggedIn) {
								setUser(data);
							}
						}}
					/>
				</View>
			</ImageBackground>
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 50,
		paddingTop: 100,
		paddingBottom: 50,
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		fontSize: 42,
		fontWeight: "600",
		marginBottom: 10,
	},
	subtext: {
		fontSize: 18,
		fontWeight: "400",
	},

	divider: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
		paddingTop: 20,
		marginBottom: 20,
		borderTopWidth: 1,
		borderTopColor: colors.medium,
	},
});
export default Login;
