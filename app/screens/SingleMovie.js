import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import MovieCard from "./components/MovieCard";
import Backdrop from "./components/Backdrop";
import AppButton from "./components/Forms/AppButton";
import colors from "../config/colors";

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
		addHandler,
		item,
	} = route.params;

	// const warning = () => {
	// 	alert(
	// 		"Are you sure you would like to remove this from your watch history?"
	// 	);
	// };

	return (
		<ScrollView>
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
			<View style={styles.actions}>
				{viewed ? (
					<AppButton
						pressHandler={(item) => addHandler(item)}
						title="Remove from list"
					/>
				) : (
					<AppButton
						pressHandler={(item) => addHandler(item)}
						title="Mark as Watched"
					/>
				)}
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
		color: colors.medium,
	},
	actions: {
		backgroundColor: "#fff",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		height: 150,
		padding: 50,
	},
	iconWrapper: {
		marginHorizontal: 10,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
	},
});
export default SingleGroupMovie;
