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
		setUser({ ...user, list: data.list });
	};
	console.log(user.list);
	useEffect(() => {
		getUserHandler();
	}, []);

	return (
		<SafeAreaView>
			<FlatList
				data={user.list}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					console.log(item);
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("SingleMovie", {
									key: item.webID,
									movie: item,
								})
							}
						>
							<MovieCard key={item.webID} movie={item} viewed={false} />
						</TouchableOpacity>
					);
				}}
			/>
		</SafeAreaView>
	);
}
export default SingleGroupView;
