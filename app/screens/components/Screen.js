import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView } from "react-native";

export default function Screen({ children }) {
	return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
	screen: {
		width: "100%",
		paddingTop: Constants.statusBarHeight,
		flex: 1,
		backgroundColor: "#f9f9f9",
	},
});
