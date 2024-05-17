import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Nav from "./Nav";
import MovieCard from "./components/MovieCard";
import Backdrop from "./components/Backdrop";
import GroupMovieCard from "./components/GroupMovieCard";

function SingleGroupMovie({ route, navigation }) {
	const {
		id,
		poster,
		title,
		year,
		director,
		actors,
		rating,
		runtime,
		backdrop,
		overview,
		groupRating,
		pickedBy,
		ratedBy,
		watchedOn,
		tags,
		viewed,
	} = route.params;
	return (
		<ScrollView>
			<Nav />
			<Backdrop backdrop={backdrop} />
			<MovieCard
				key={id}
				poster={poster}
				title={title}
				year={year}
				director={director}
				actors={actors}
				rating={rating}
				runtime={runtime}
				groupRating={groupRating}
				pickedBy={pickedBy}
				ratedBy={ratedBy}
				watchedOn={watchedOn}
				tags={tags}
				viewed={viewed}
			/>
			<View>
				<Text style={styles.overview}>{overview}</Text>
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	overview: {
		width: "100%",
		padding: 10,
		fontSize: 12,
		lineHeight: 24,
		backgroundColor: "#fff",
		color: "#333",
	},
});
export default SingleGroupMovie;
