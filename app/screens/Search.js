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
										movie: item,
										addHandler,
									})
								}
							>
								<MovieCard
									key={item.id}
									movie={item}
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
