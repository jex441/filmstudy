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
function GroupMovieCard({
	id,
	poster,
	title,
	year,
	pickedBy,
	watchedOn,
	groupRating,
	ratedBy,
	tags,
}) {
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
		<View style={styles.movieCard}>
			<View style={styles.movieCardImageContainer}>
				<Image source={{ uri: poster }} style={styles.movieCardImage} />
			</View>
			<View style={styles.movieCardTextContainer}>
				<View style={styles.movieTextTitleContainer}>
					<View>
						<Text style={styles.title}>{title}</Text>
					</View>
					<View>
						<Text style={styles.year}>{year}</Text>
					</View>
				</View>
				<View>
					<Text style={styles.pickedBy}>
						Picked by {pickedBy.split(" ")[0]}{" "}
						on {watchedOn}
					</Text>
				</View>
				<View style={styles.movieCardStarContainer}>{stars(groupRating)}</View>
				<View style={styles.ratedBy}>
					<Badges ratedBy={ratedBy} number={5} size={20} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	movieCard: {
		height: 120,
		flexDirection: "row",
		width: "100%",
		backgroundColor: "#FFF",
	},
	movieCardImageContainer: {
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		width: "30%",
		height: "100%",
	},
	movieCardImage: {
		width: 80,
		height: 100,
	},
	movieCardTextContainer: {
		padding: 10,
		flexDirection: "column",
		textAlign: "left",
		width: "70%",
	},
	movieTextTitleContainer: {
		justifyContent: "space-between",
		flexDirection: "row",
		width: "100%",
	},
	title: {
		color: "#333",
		lineHeight: 16,
		fontSize: 16,
	},
	year: {
		color: "#333",
		lineHeight: 20,
		fontSize: 12,
	},
	pickedBy: {
		fontSize: 12,
		lineHeight: 20,
		color: "#333",
	},
	watchedOn: {
		fontSize: 12,
		lineHeight: 16,
		fontWeight: 300,
		color: "#333",
	},
	ratedBy: {
        paddingTop: 4,
		height: 25,
		width: "100%",
	},
	movieCardStarContainer: {
		height: 20,
		paddingTop: 8,
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	movieCardStar: {
		height: 10,
		width: 10,
		marginRight: 3,
	},
});

export default GroupMovieCard;
