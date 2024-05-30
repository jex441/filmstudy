import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LinkItem({ title, source, color, pressHandler }) {
	return (
		<TouchableHighlight onPress={pressHandler} underlayColor={colors.light}>
			<View style={styles.card}>
				<MaterialCommunityIcons name={source} color={color} size={35} />
				<View style={styles.text}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	card: {
		padding: 10,
		height: 80,
		marginVertical: 1,
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: colors.white,
	},
	text: {
		marginHorizontal: 20,
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	title: { fontWeight: "500", fontSize: 18, color: "#000" },
});
