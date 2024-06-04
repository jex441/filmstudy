import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import GroupMovieCard from "./GroupMovieCard";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function MovieCard({ movie }) {
	const {
		poster_path,
		title,
		year,
		director,
		cast,
		runtime,
		vote_average,
		watched,
	} = movie;

	const stars = (n) => {
		let array = [];
		let half = 0;
		for (let i = 0; i < 5; i++) {
			if (i < Math.floor(n)) {
				array.push(
					<MaterialCommunityIcons
						key={i}
						style={styles.star}
						name="star"
						size={16}
						color={colors.medium}
					/>
				);
			} else if (n % 1 > 0.5 && half < 1) {
				array.push(
					<MaterialCommunityIcons
						key={i}
						style={styles.star}
						name="star-half-full"
						size={16}
						color={colors.medium}
					/>
				);
				half++;
			} else {
				array.push(
					<MaterialCommunityIcons
						key={i}
						style={styles.star}
						name="star"
						size={16}
						color={colors.light}
					/>
				);
			}
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
					<View style={styles.justifyBetween}>
						<View>
							<Text style={styles.director}>{director}</Text>
						</View>
						<View>
							<Text style={styles.runtime}>{runtime}</Text>
						</View>
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
					</View>
					{watched && <GroupMovieCard movie={movie} />}
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
		width: "25%",
		height: "100%",
	},
	movieCardImage: {
		width: 74,
		height: 110,
	},
	movieCardTextContainer: {
		padding: 10,
		textAlign: "left",
		width: "75%",
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
	justifyBetween: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	director: {
		fontSize: 12,
		lineHeight: 18,
		color: colors.medium,
	},
	actors: {
		width: 250,
		fontSize: 12,
		lineHeight: 18,
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
		lineHeight: 18,
		fontWeight: 300,
		color: colors.medium,
	},
	movieCardStarContainer: {
		paddingVertical: 5,
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	movieCardStar: {
		height: 14,
		width: 14,
		marginRight: 3,
	},
});

export default MovieCard;
