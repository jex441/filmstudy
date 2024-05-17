import React from "react";
import { StyleSheet, View, Text } from "react-native";

import defaultStyles from "../../../config/styles";

export default function ErrorText({ text, visible }) {
	if (!text || !visible) {
		return;
	}
	return (
		<Text style={{ ...defaultStyles.text, color: "red", height: 25 }}>
			{text}
		</Text>
	);
}
const styles = StyleSheet.create({});
