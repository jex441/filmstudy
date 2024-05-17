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
import Badges from "./Badges";
import colors from "../../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
function GroupMovieCard({ pickedBy, watchedOn, groupRating, ratedBy, tags }) {
	const stars = (n) => {
		let array = [];
		for (let i = 0; i < n; i++) {
			array.push(
				<Image
					key={i}
					source={require("../../assets/icons/starfilled.png")}
					style={styles.movieCardStar}
				/>
			);
		}
		return array;
	};

	return (
		<>
			<View style={styles.container}>
				<View style={styles.checkContainer}>
					<MaterialCommunityIcons name="check" />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>WATCHED</Text>
					{/* <View style={styles.movieCardStarContainer}>
						{stars(groupRating)}
					</View>
					<View>
						<Text style={styles.pickedBy}>
							Picked by {pickedBy && pickedBy.split(" ")[0]} on {watchedOn}
						</Text>
					</View> */}
					{/* <View style={styles.ratedBy}>
						<Badges users={ratedBy} number={5} size={22} />
					</View> */}
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		justifyContent: "flex-end",
		flexDirection: "row",
		paddingBottom: 10,
	},
	checkContainer: {
		justifyContent: "center",
		marginRight: 5,
		marginTop: 5,
	},
	textContainer: {
		marginTop: 5,
		flex: 1,
		flexDirection: "row",
	},
	text: {
		color: colors.medium,
		fontSize: 12,
	},
	pickedBy: {
		fontSize: 12,
		lineHeight: 20,
		color: colors.medium,
		marginRight: 10,
	},
	watchedOn: {
		fontSize: 12,
		lineHeight: 16,
		fontWeight: 300,
		color: colors.medium,
	},
	ratedBy: {
		paddingTop: 4,
		height: 25,
	},
	movieCardStarContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	movieCardStar: {
		height: 10,
		width: 10,
		marginRight: 3,
	},
});

export default GroupMovieCard;
