import React, { useState } from "react";
import {
	View,
	StyleSheet,
	Button,
	TextInput,
	Text,
	Modal,
	ImageBackground,
} from "react-native";
import * as Yup from "yup";
import { generate, count } from "random-words";
import { useStore } from "../store";
import { LinearGradient } from "expo-linear-gradient";

import AppButton from "./components/Forms/AppButton";
import AppForm from "./components/Forms/AppForm";
import AppFormComponent from "./components/Forms/AppFormComponent";
import colors from "../config/colors";
import authApi from "../api/authApi";
import AppInputText from "./components/Forms/AppInputText";
import Screen from "./components/Screen";

function Login(props) {
	const [errorText, setErrorText] = useState("");
	const { user, setUser } = useStore();
	const [visible, setVisible] = useState(false);
	const [passphrase, setPassphrase] = useState("");
	const username = generate();
	let password = generate();
	const val = Math.floor(1000 + Math.random() * 9000);
	password = password + val;
	const newPassphrase = username + "-" + password;

	const images = {
		0: "https://image.tmdb.org/t/p/original/cRR7N8WzOkby776y6I4vW0GQXrJ.jpg",
		1: "https://image.tmdb.org/t/p/original/3gmreIMvzQgd1q4hsiUN5ADV88W.jpg",
		2: "https://image.tmdb.org/t/p/original/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
		3: "https://image.tmdb.org/t/p/original/w5IDXtifKntw0ajv2co7jFlTQDM.jpg",
		4: "https://image.tmdb.org/t/p/original/aAStHDJgD97k4g4Zf0NLqbAmrvZ.jpg",
		5: "https://image.tmdb.org/t/p/original/1oaLxMtdn47TWdaty8BwdU4oXhV.jpg",
	};

	const random = () => {
		return Math.floor(Math.random() * 5);
	};
	const int = random();

	return (
		<>
			<ImageBackground
				source={{ uri: images[int] }}
				resizeMethod="cover"
				style={styles.container}
			>
				<LinearGradient
					style={styles.background}
					colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.8)"]}
				/>
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
						padding: 20,
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 500,
							color: "#FFF",
						}}
					>
						Enter Your Passphrase
					</Text>

					<TextInput
						autoCapitalize="none"
						name="Passphrase"
						onChangeText={(text) => setPassphrase(text)}
						style={{
							marginVertical: 10,
							fontSize: 18,
							fontWeight: 500,
							padding: 10,
							borderRadius: 10,
							borderColor: "#FFF",
							color: "#FFF",
							borderWidth: 2,
							marginTop: 10,
						}}
					/>
					{errorText && (
						<Text style={{ color: colors.danger, fontSize: 20 }}>
							{errorText}
						</Text>
					)}

					<AppButton
						title="Login"
						pressHandler={async () => {
							const data = await authApi.login(passphrase);
							if (data.status === 404) {
								setErrorText("Passphrase is invalid.");
							}
							if (data.id) {
								setUser({ isLoggedIn: true, ...data });
							}
						}}
					/>

					<View style={styles.divider}>
						<Text style={{ color: "#FFF", fontSize: 20, fontWeight: 500 }}>
							Or continue without a login
						</Text>
					</View>
					<AppButton
						title="Continue"
						pressHandler={() => {
							setVisible(true);
						}}
					/>
				</View>
			</ImageBackground>

			<Modal visible={visible} animationType="slide">
				<Screen>
					<Button title="Cancel" onPress={() => setVisible(!visible)} />
					<View style={styles.wrapper}>
						<Text style={styles.modalHeading}>Welcome to Film Study</Text>
						<Text style={styles.modalText}>Your new passphrase will be:</Text>
						<Text style={styles.newPassphrase}>{newPassphrase}</Text>
						<Text
							style={{
								textAlign: "center",
								fontSize: 16,
								lineHeight: 24,
								marginBottom: 20,
							}}
						>
							Use this passphrase to access your account in the future.
						</Text>
						<Text
							style={{
								textAlign: "center",
								fontSize: 16,
								lineHeight: 24,
								marginBottom: 20,
							}}
						>
							It is a good idea to save your passphrase on your device in case
							you forget it.
						</Text>
						<AppButton
							title="Create My Account"
							pressHandler={async () => {
								const data = await authApi.signup(username, password);
								if (data.isLoggedIn) {
									setUser(data);
								}
							}}
						/>
					</View>
				</Screen>
			</Modal>
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 100,
		paddingBottom: 80,
		alignItems: "center",
		justifyContent: "space-between",
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 500,
	},
	title: {
		color: "#FFF",
		fontSize: 46,
		fontWeight: "600",
		marginBottom: 6,
	},
	subtext: {
		color: "#FFF",
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
		borderTopWidth: 2,
		borderTopColor: "#FFF",
	},
	modalHeading: {
		fontSize: 32,
	},
	modalText: {
		marginTop: 20,
		marginBottom: 20,
		fontSize: 20,
		textAlign: "center",
	},
	newPassphrase: {
		marginTop: 40,
		marginBottom: 40,
		fontSize: 20,
		borderWidth: 2,
		paddingVertical: 10,
		paddingHorizontal: 60,
		borderRadius: 10,
		borderColor: colors.medium,
		color: colors.medium,
	},
	wrapper: {
		textAlign: "center",
		marginVertical: 100,
		paddingHorizontal: 20,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default Login;
