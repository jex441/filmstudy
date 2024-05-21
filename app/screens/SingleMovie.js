import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import MovieCard from "./components/MovieCard";
import Backdrop from "./components/Backdrop";
import AppButton from "./components/Forms/AppButton";
import colors from "../config/colors";
import usersApi from "../api/users";
import { useStore } from "../store";
function SingleGroupMovie({ route, navigation }) {
	const { user } = useStore();
	const { id, movie } = route.params;
	const { overview, backdrop_path } = movie;
	return (
		<ScrollView>
			<Backdrop backdrop={backdrop_path} />
			<MovieCard key={id} movie={movie} />
			<View>
				<Text style={styles.overview}>{overview}</Text>
			</View>
			<View style={styles.actions}>
				<AppButton
					pressHandler={async () => await usersApi.addMovie(user.id, movie)}
					title="Add to Watched List"
				/>
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
