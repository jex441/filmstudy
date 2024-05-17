import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../../config/colors";
import defaultStyles from "../../../config/styles";

export default function AppInputText({ icon, ...otherProps }) {
	return (
		<View style={{ ...styles.container, width: otherProps.width || "100%" }}>
			{icon && (
				<MaterialCommunityIcons name={icon} size={20} color={colors.medium} />
			)}
			<TextInput
				style={{
					width: "100%",
					marginLeft: 10,
					...defaultStyles.text,
				}}
				{...otherProps}
			/>
		</View>
	);
}
const styles = StyleSheet.create({});
