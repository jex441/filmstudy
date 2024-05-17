import React from "react";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import Nav from "./Nav";
import MovieCard from "./components/MovieCard";
import data from "../../data";

function SingleGroupView({ navigation, route }) {
	const history = data.user.groups[0].history;

	const addHandler = (movie) => {
		// const newArray = searchResultsData.push(movie);
	};

	const removeHandler = (removedMovie) => {
		// const newArray = searchResultsData.filter(
		// 	(movie) => movie.id !== removedMovie.id
		// );
	};

	return (
		<SafeAreaView>
			<FlatList
				data={history}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					console.log(item.title);
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("SingleMovie", {
									key: item.id,
									poster: item.poster,
									title: item.title,
									director: item.director,
									rating: item.rating,
									actors: item.actors,
									runtime: item.runtime,
									year: item.year,
									overview: item.overview,
									pickedBy: item.pickedBy,
									watchedOn: item.watchedOn,
									groupRating: item.groupRating,
									ratedBy: item.ratedBy,
									tags: item.tags,
									addHandler: addHandler,
									removeHandler: removeHandler,
								})
							}
						>
							<MovieCard
								key={item.id}
								poster={item.poster}
								title={item.title}
								year={item.year}
								runtime={item.runtime}
								rating={item.rating}
								director={item.director}
								actors={item.actors}
								viewed={false}
								pickedBy={item.pickedBy}
								watchedOn={item.watchedOn}
								groupRating={item.groupRating}
								ratedBy={item.ratedBy}
								tags={item.tags}
							/>
						</TouchableOpacity>
					);
				}}
			/>
		</SafeAreaView>
	);
}
export default SingleGroupView;
