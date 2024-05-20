import React from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import * as Yup from "yup";
import { generate, count } from "random-words";
import { useStore } from "../store";

import AppButton from "./components/Forms/AppButton";
import AppForm from "./components/Forms/AppForm";
import AppFormComponent from "./components/Forms/AppFormComponent";
import colors from "../config/colors";
import authApi from "../api/authApi";

function Login(props) {
	const { user, setUser } = useStore();
	console.log("state", user);
	const validationSchema = Yup.object().shape({
		username: Yup.string().required().label("Username"),
		password: Yup.string().required().min(4).label("Password"),
	});
	const username = generate();
	const password = generate();
	return (
		<View style={styles.container}>
			<AppForm
				initialValues={{ username: "", password: "" }}
				onSubmit={(values) => authApi.login(values)}
				validationSchema={validationSchema}
				title="Log In"
			>
				<AppFormComponent
					name="username"
					style={{
						margin: 20,
						padding: 10,
						borderRadius: 10,
						borderColor: colors.medium,
						width: 220,
						borderWidth: 1,
					}}
				/>
				<AppFormComponent
					name="password"
					style={{
						margin: 20,
						padding: 10,
						borderRadius: 10,
						borderColor: colors.medium,
						width: 220,
						borderWidth: 1,
					}}
				/>
			</AppForm>
			<AppButton
				title="Continue"
				pressHandler={async () => {
					const data = await authApi.signup(username, password);
					console.log("data", data);
					if (data.isLoggedIn) {
						setUser(data);
					}
				}}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 100,
		alignItems: "center",
		justifyContent: "center",
	},
});
export default Login;
