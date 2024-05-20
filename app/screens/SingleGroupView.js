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
									poster: item.poster_path,
									backdrop: item.backdrop_path,
									title: item.original_title,
									year: item.release_date,
									pickedBy: item.pickedBy,
									watchedOn: item.watchedOn,
									overview: item.overview,
									rating: item.vote_average,
									runtime: item.runtime,
									cast: item.cast,
									director: item.director,
									groupRating: item.groupRating,
									ratedBy: item.ratedBy,
									tags: item.tags,
									viewed: false,
									item: item,
									removeHandler: removeHandler,
								})
							}
						>
							<MovieCard
								key={item.webIDid}
								poster={item.poster_path}
								backdrop={item.backdrop_path}
								title={item.title}
								year={item.release_date}
								director={item.director}
								cast={item.cast}
								pickedBy={item.pickedBy}
								watchedOn={item.watchedOn}
								rating={item.vote_average}
								runtime={item.runtime}
								groupRating={item.groupRating}
								ratedBy={item.ratedBy}
								tags={item.tags}
								viewed={false}
							/>
						</TouchableOpacity>
					);
				}}
			/>
		</SafeAreaView>
	);
}
export default SingleGroupView;
