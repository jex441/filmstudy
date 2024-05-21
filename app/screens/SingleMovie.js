import React from "react";
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";

import MovieCard from "./components/MovieCard";
import Backdrop from "./components/Backdrop";
import BadgeButton from "./components/BadgeButton";
import colors from "../config/colors";
import usersApi from "../api/users";
import { useStore } from "../store";

function SingleGroupMovie({ route, navigation }) {
	const { user } = useStore();
	const { id, movie } = route.params;
	const { overview, backdrop_path, watchList, watched } = movie;
	return (
		<ScrollView>
			<Backdrop backdrop={backdrop_path} />
			<MovieCard key={id} movie={movie} />
			<View>
				<Text style={styles.overview}>{overview}</Text>
			</View>
			<View style={styles.actions}>
				{!watched && (
					<BadgeButton
						pressHandler={async () => await usersApi.addMovie(user.id, movie)}
						color={colors.dark}
						name="check"
						label="Mark as Watched"
					/>
				)}
				{!watched && !watchList && (
					<BadgeButton
						pressHandler={async () =>
							await usersApi.addMovieToWatchList(user.id, movie)
						}
						color={colors.dark}
						name="menu"
						label="Add to Watch List"
					/>
				)}
				{watchList && (
					<BadgeButton
						pressHandler={async () =>
							await usersApi.removeMovie(user.id, movie)
						}
						color={colors.dark}
						name="close"
						label={`Remove from my list`}
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
		justifyContent: "space-between",
		alignItems: "center",
	},
});
export default SingleGroupMovie;
