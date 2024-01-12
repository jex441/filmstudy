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

function MovieCard({
	id,
	poster,
	title,
	year,
	director,
	actors,
	runtime,
	rating,
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

	const runtimeString = `${Math.floor(runtime / 60)} HR ${Math.floor(
		runtime % 60
	)}`;
	const actorsString = actors.join(", ");
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
					<Text style={styles.director}>{director}</Text>
				</View>
				<View>
					<Text style={styles.actors}>{actorsString}</Text>
				</View>
				<View>
					<Text style={styles.runtime}>{runtimeString}</Text>
				</View>
				<View style={styles.movieCardStarContainer}>{stars(rating)}</View>
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
		lineHeight: 18,
		fontSize: 18,
	},
	year: {
		color: "#333",
		lineHeight: 20,
		fontSize: 12,
	},
	director: {
		fontSize: 12,
		lineHeight: 20,
		color: "#333",
	},
	actors: {
		fontSize: 12,
		lineHeight: 20,
		fontWeight: 300,
		color: "#333",
	},
	runtime: {
		fontSize: 12,
		lineHeight: 20,
		fontWeight: 300,
		color: "#333",
	},
	movieCardStarContainer: {
		height: 60,
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

export default MovieCard;
