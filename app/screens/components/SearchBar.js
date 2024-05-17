import React from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function SearchBar({ otherProps }) {
	return (
		<View style={styles.container}>
			<View style={styles.input}>
				<MaterialCommunityIcons name="magnify" size={30} color={"#333"} />
				<TextInput
					placeholder="Start typing a title to search...."
					style={{
						width: "100%",
						marginLeft: 10,
					}}
					{...otherProps}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: 20,
		marginVertical: 20,
	},
	input: {
		backgroundColor: "#fff",
		padding: 10,
		width: "100%",
		borderRadius: 30,
		borderColor: "#333",
		flexDirection: "row",
		justifyContent: "flex-start",
		borderColor: "#333",
		borderWidth: 1,
		alignContent: "center",
	},
});

export default SearchBar;
