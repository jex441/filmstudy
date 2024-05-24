import React, { useState, useEffect } from "react";
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Button,
	Modal,
	TouchableOpacity,
	FlatList,
} from "react-native";

import MovieCard from "./components/MovieCard";
import Screen from "./components/Screen";
import AppButton from "./components/Forms/AppButton";
import Backdrop from "./components/Backdrop";
import BadgeButton from "./components/BadgeButton";
import colors from "../config/colors";
import usersApi from "../api/users";
import { useStore } from "../store";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function SingleGroupMovie({ route, navigation }) {
	const { user, setUser } = useStore();
	const [visible, setVisible] = useState(false);
	const [errorText, setErrorText] = useState("");
	const [movie, setMovie] = useState(route.params.movie);
	const { id } = route.params;
	const { overview, backdrop_path, watchList, watched, rating } = movie;
	const stars = [1, 2, 3, 4, 5];
	const [userRating, setUserRating] = useState(rating || 0);

	const addHandler = () => {
		setVisible(true);
	};

	const submitHandler = async () => {
		if (userRating < 1) {
			setErrorText("You must select at least 1 star.");
			return;
		}
		await usersApi
			.addMovie(user.id, {
				...movie,
				rating: userRating,
			})
			.then((res) => {
				setUser({ ...user, list: res.data });
			});
		setVisible(false);
	};

	const addToWatchListHandler = async () => {
		await usersApi.addMovieToWatchList(user.id, movie).then((res) => {
			setUser({ ...user, list: res.data });
		});
	};

	const removeFromListHandler = async () => {
		await usersApi.removeMovie(user.id, movie).then((res) => {
			setUser({ ...user, list: res.data });
		});
	};

	useEffect(() => {
		if (!watchList) {
			user.list.map((userMovie) => {
				if (movie.id === userMovie.webID) {
					setMovie({ ...movie, ...userMovie });
				}
			});
		}
	}, []);

	return (
		<Screen>
			<Backdrop backdrop={backdrop_path} />
			<MovieCard key={id} movie={movie} />
			<View>
				<Text style={styles.overview}>{overview}</Text>
			</View>
			<View style={styles.actions}>
				{!watched && (
					<BadgeButton
						pressHandler={() => addHandler()}
						color={colors.dark}
						name="check"
						label="Mark as Watched"
					/>
				)}
				{!watched && !watchList && (
					<BadgeButton
						pressHandler={() => addToWatchListHandler()}
						color={colors.dark}
						name="menu"
						label="Add to Watch List"
					/>
				)}
				{watchList && (
					<BadgeButton
						pressHandler={() => removeFromListHandler()}
						color={colors.dark}
						name="close"
						label={`Remove from my list`}
					/>
				)}

				<Modal visible={visible} animationType="slide">
					<Screen>
						<Button title="Cancel" onPress={() => setVisible(!visible)} />
						<View style={styles.wrapper}>
							<Text style={styles.text}>How much did you enjoy this film?</Text>
							<View style={styles.ratingContainer}>
								<FlatList
									data={stars}
									numColumns={5}
									keyExtractor={(key) => key.toString()}
									renderItem={({ item, index }) => {
										if (userRating <= index) {
											return (
												<TouchableOpacity
													onPress={() => setUserRating(index + 1)}
												>
													<MaterialCommunityIcons
														style={styles.star}
														name="star"
														size={35}
														color={colors.light}
													/>
												</TouchableOpacity>
											);
										} else {
											return (
												<TouchableOpacity
													onPress={() => setUserRating(index + 1)}
												>
													<MaterialCommunityIcons
														style={styles.star}
														name="star"
														size={35}
														color={colors.dark}
													/>
												</TouchableOpacity>
											);
										}
									}}
								/>
							</View>
							<AppButton title="Submit" pressHandler={() => submitHandler()} />
							{errorText && <Text style={styles.errorText}>{errorText}</Text>}
						</View>
					</Screen>
				</Modal>
			</View>
		</Screen>
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
	text: {
		fontSize: 20,
	},
	wrapper: {
		textAlign: "center",
		marginVertical: 200,
		paddingHorizontal: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	ratingContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 50,
		marginBottom: 20,
	},
	star: {
		width: 50,
		height: 50,
		margin: 10,
	},
	errorText: {
		marginTop: 40,
		color: "red",
	},
});
export default SingleGroupMovie;
