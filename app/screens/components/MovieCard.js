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

function MovieCard({
	id,
	poster,
	title,
	year,
	director,
	actors,
	runtime,
	rating,
	viewed,
	pickedBy,
	groupRating,
	watchedOn,
	ratedBy,
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
	const cast = actors.map((actor) => actor.name);
	const actorsString = cast && cast.join(", ");
	return (
		<>
			<View style={styles.movieCard}>
				<View style={styles.movieCardImageContainer}>
					<Image
						source={{ uri: "https://image.tmdb.org/t/p/original/" + poster }}
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
					{director && (
						<View>
							<Text style={styles.director}>{director}</Text>
						</View>
					)}
					{actors && (
						<View>
							<Text numberOfLines={1} style={styles.actors}>
								{actorsString}
							</Text>
						</View>
					)}
					<View style={styles.runTimeRatingContainer}>
						<View style={styles.movieCardStarContainer}>{stars(rating)}</View>
						<View>
							<Text style={styles.runtime}>{runtimeString}</Text>
						</View>
					</View>
					{viewed && (
						<GroupMovieCard
							pickedBy={pickedBy}
							watchedOn={watchedOn}
							ratedBy={ratedBy}
							groupRating={groupRating}
						/>
					)}
				</View>
			</View>
		</>
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
		width: 60,
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
