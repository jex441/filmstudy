import React from "react";
import {
	Text,
	View,
	StyleSheet,
	Button,
	FlatList,
	Image,
	SafeAreaView,
} from "react-native";

function Nav(props) {
	return (
		<View style={styles.nav}>
			<View>
				<Image
					style={styles.icon}
					source={require("../assets/icons/Profile.png")}
				/>
			</View>
			<View>
				<Text style={styles.title}>Film Study</Text>
			</View>
			<View>
				<Image
					style={styles.icon}
					source={require("../assets/icons/Settings.png")}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	nav: {
		position: "fixed",
		backgroundColor: "#FFF",
		height: 60,
		padding: 10,
		justifyContent: "space-between",
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 20,
	},
	icon: {
		height: 30,
		width: 30,
	},
});
export default Nav;
