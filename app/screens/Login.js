import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

function Login({ navigation }) {
	return (
		<View style={styles.container}>
			<Button
				title="Sign in with Google"
				onPress={() => {
					navigation.navigate("Groups", { name: "Groups" });
				}}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
export default Login;
