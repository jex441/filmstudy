import React from "react";
import { useEffect } from "react";
import { useStore } from "../store";
import { useQuery } from "@tanstack/react-query";

import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import MovieCard from "./components/MovieCard";
import usersApi from "../api/users";

function SingleGroupView({ navigation, route }) {
	const { user, setUser } = useStore();

	const getUserHandler = async () => {
		let { data } = await usersApi.getUser(user.id);
		console.log("DATA", data);
		setUser({ ...user, list: data.list });
	};

	useEffect(() => {
		getUserHandler();
	}, []);
	console.log("USER:", user.list);
	const removeHandler = (removedMovie) => {
		// const newArray = searchResultsData.filter(
		// 	(movie) => movie.id !== removedMovie.id
		// );
	};

	return (
		<SafeAreaView>
			<FlatList
				data={user.list}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("SingleMovie", {
									key: item.webID,
									movie: item,
									removeHandler: removeHandler,
								})
							}
						>
							<MovieCard key={item.webIDid} movie={item} viewed={false} />
						</TouchableOpacity>
					);
				}}
			/>
		</SafeAreaView>
	);
}
export default SingleGroupView;
