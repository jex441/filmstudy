import React from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function SearchBar({ changeHandler, searchValue, otherProps }) {
	return (
		<View style={styles.container}>
			<View style={styles.input}>
				<MaterialCommunityIcons name="magnify" size={30} color={colors.dark} />
				<TextInput
					onChangeText={(val) => changeHandler(val)}
					value={searchValue}
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
		height: 90,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		position: "fixed",
	},
	input: {
		backgroundColor: "#fff",
		padding: 10,
		width: "100%",
		borderRadius: 30,
		borderColor: colors.medium,
		flexDirection: "row",
		justifyContent: "flex-start",
		borderColor: colors.medium,
		borderWidth: 1,
		alignContent: "center",
	},
});

export default SearchBar;
