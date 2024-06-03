import React from "react";
import { useState, useEffect } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, Text } from "react-native";

import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import movies from "../api/movies";
import usersApi from "../api/users";
import { useStore } from "../store";

function Search({ navigation, route }) {
	const { user } = useStore();
	const [searchValue, setSearchValue] = useState("");
	const [searchResultsData, setSearchResultsData] = useState([]);
	const [searching, setSearching] = useState(false);

	const changeHandler = (v) => {
		setSearchValue(v);
	};

	const searchMoviesHandler = async () => {
		setSearching(true);
		const { data } = await movies.searchMovies(searchValue);
		setSearching(false);
		setSearchResultsData(data);
	};

	const getRecsHandler = async () => {
		setSearching(true);
		const { data } = await usersApi.getRecs(user.id);
		setSearching(false);
		setSearchResultsData(data);
	};

	useEffect(() => {
		// If the user has not input any search value, reccomendations based on their list are rendered instead
		if (searchValue?.length > 0) searchMoviesHandler(searchValue);
		else getRecsHandler();
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
									})
								}
							>
								<MovieCard key={item.id} movie={item} />
							</TouchableOpacity>
						);
					}}
				/>
			)}
		</SafeAreaView>
	);
}
export default Search;
