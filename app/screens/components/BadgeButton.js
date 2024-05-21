import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
function BadgeButton({ color, name, label }) {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => pressHandler(label)}
		>
			<View style={{ ...styles.badge, backgroundColor: color }}>
				<MaterialCommunityIcons name={name} color="white" size={30} />
			</View>
			<View>
				<Text style={styles.text}>{label}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 100,
		width: 120,
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
	},
	badge: {
		justifyContent: "center",
		alignItems: "center",
		height: 60,
		width: 60,
		borderRadius: 40,
		marginBottom: 10,
	},
	text: {
		fontSize: 12,
		color: colors.dark,
		textAlign: "center",
	},
});

export default BadgeButton;
