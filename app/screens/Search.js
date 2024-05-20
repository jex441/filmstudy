import React from "react";
import { useState, useEffect } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, Text } from "react-native";

import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import movies from "../api/movies";

function Search({ navigation, route }) {
	const [searchValue, setSearchValue] = useState("");
	const [searchResultsData, setSearchResultsData] = useState([]);
	const [searching, setSearching] = useState(false);
	const addHandler = (movie) => {
		const newArray = searchResultsData.push(movie);
	};

	const removeHandler = (removedMovie) => {
		const newArray = searchResultsData.filter(
			(movie) => movie.id !== removedMovie.id
		);
		setSearchResultsData(newArray);
	};

	const changeHandler = (v) => {
		setSearchValue(v);
	};

	const searchMoviesHandler = async () => {
		setSearching(true);
		const { data } = await movies.searchMovies(searchValue);
		setSearching(false);
		setSearchResultsData(data);
	};

	useEffect(() => {
		if (searchValue?.length > 0) searchMoviesHandler(searchValue);
		else setSearchResultsData([]);
	}, [searchValue]);

	return (
		<SafeAreaView>
			<SearchBar searchValue={searchValue} changeHandler={changeHandler} />
			{searching ? (
				<Text>Loading</Text>
			) : (
				<FlatList
					data={searchResultsData}
					keyExtractor={(item) => item.id}
					renderItem={({ item, index }) => {
						return (
							<TouchableOpacity
								onPress={() =>
									navigation.navigate("SingleMovie", {
										key: item.id,
										poster: item.poster_path,
										backdrop: item.backdrop_path,
										title: item.original_title,
										year: item.release_date.slice(0, 4),
										pickedBy: item.pickedBy,
										watchedOn: item.watchedOn,
										overview: item.overview,
										rating: item.vote_average,
										runtime: item.runtime,
										actors: item.cast,
										director: item.director,
										groupRating: item.groupRating,
										ratedBy: item.ratedBy,
										tags: item.tags,
										viewed: false,
										item: item,
										addHandler,
									})
								}
							>
								<MovieCard
									key={item.id}
									poster={item.poster_path}
									backdrop={item.backdrop_path}
									title={item.title}
									year={item.release_date.slice(0, 4)}
									director={item.director}
									actors={item.cast}
									pickedBy={item.pickedBy}
									watchedOn={item.watchedOn}
									rating={item.vote_average}
									runtime={item.runtime}
									groupRating={item.groupRating}
									ratedBy={item.ratedBy}
									tags={item.tags}
									viewed={index % 2 === 0 ? true : false}
								/>
							</TouchableOpacity>
						);
					}}
				/>
			)}
		</SafeAreaView>
	);
}
export default Search;
