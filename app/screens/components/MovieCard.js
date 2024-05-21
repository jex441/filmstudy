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
import GroupMovieCard from "./GroupMovieCard";
import colors from "../../config/colors";

function MovieCard({ movie }) {
	const {
		poster_path,
		title,
		year,
		director,
		cast,
		runtime,
		vote_average,
		viewed,
		pickedBy,
		groupRating,
		watchedOn,
		ratedBy,
		watched,
		rating,
		watchList,
	} = movie;

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
			<View style={styles.movieCard}>
				<View style={styles.movieCardImageContainer}>
					<Image
						source={{
							uri: "https://image.tmdb.org/t/p/original/" + poster_path,
						}}
						style={styles.movieCardImage}
					/>
				</View>
				<View style={styles.movieCardTextContainer}>
					<View style={styles.movieTextTitleContainer}>
						<View>
							<Text numberOfLines={1} style={styles.title}>
								{title}
							</Text>
						</View>
						<View>
							<Text style={styles.year}>{year}</Text>
						</View>
					</View>
					<View>
						<Text style={styles.director}>{director}</Text>
					</View>
					{cast && (
						<View>
							<Text numberOfLines={1} style={styles.actors}>
								{cast}
							</Text>
						</View>
					)}
					<View style={styles.runTimeRatingContainer}>
						<View style={styles.movieCardStarContainer}>
							{stars(vote_average)}
						</View>
						<View>
							<Text style={styles.runtime}>{runtime}</Text>
						</View>
					</View>
					{watched && <GroupMovieCard rating={rating} />}
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	movieCard: {
		height: 130,
		flexDirection: "row",
		width: "100%",
		backgroundColor: "#FFF",
		paddingVertical: 5,
	},
	movieCardImageContainer: {
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		width: "30%",
		height: "100%",
	},
	movieCardImage: {
		width: 74,
		height: 110,
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
		width: 240,
		color: colors.dark,
		lineHeight: 18,
		fontSize: 18,
	},
	year: {
		color: colors.medium,
		lineHeight: 20,
		fontSize: 12,
	},
	director: {
		fontSize: 12,
		lineHeight: 20,
		color: colors.medium,
	},
	actors: {
		width: 240,
		fontSize: 12,
		lineHeight: 16,
		fontWeight: 300,
		color: colors.medium,
	},
	runTimeRatingContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	runtime: {
		fontSize: 12,
		lineHeight: 20,
		fontWeight: 300,
		color: colors.medium,
	},
	movieCardStarContainer: {
		paddingTop: 4,
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
