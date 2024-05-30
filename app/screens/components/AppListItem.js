import {
	Text,
	Image,
	View,
	TouchableHighlight,
	StyleSheet,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function AppListItem({
	title,
	subtitle,
	name,
	pressHandler,
	renderRightActions,
	chevrons = false,
}) {
	return (
		<GestureHandlerRootView>
			<Swipeable renderRightActions={renderRightActions}>
				<TouchableHighlight onPress={pressHandler} underlayColor={colors.light}>
					<View style={styles.card}>
						<View style={{ flexDirection: "row" }}>
							<View
								style={{
									width: 70,
									height: 70,
									borderRadius: 35,
									backgroundColor: colors.medium,
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<MaterialCommunityIcons name={name} size={60} color={"#fff"} />
							</View>
							<View style={styles.text}>
								<Text style={styles.title} numberOfLines={1}>
									{title}
								</Text>
								<Text style={styles.subtitle} numberOfLines={2}>
									{subtitle}
								</Text>
							</View>
						</View>
						{chevrons && (
							<View>
								<MaterialCommunityIcons
									name="chevron-right"
									size={20}
									color={colors.medium}
								/>
							</View>
						)}
					</View>
				</TouchableHighlight>
			</Swipeable>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	card: {
		padding: 10,
		height: 100,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	text: {
		marginHorizontal: 20,
		flexDirection: "column",
		justifyContent: "flex-start",
		alignSelf: "flex-start",
	},
	title: {
		fontWeight: "500",
		fontSize: 16,
		marginBottom: 6,
		color: "#000",
		overflow: "hidden",
		maxWidth: 250,
	},
	subtitle: {
		maxWidth: 250,
		fontSize: 14,
		color: colors.medium,
	},
});
