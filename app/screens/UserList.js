import React from "react";
import { useEffect } from "react";
import { useStore } from "../store";

import {
	FlatList,
	SafeAreaView,
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import MovieCard from "./components/MovieCard";
import usersApi from "../api/users";
import colors from "../config/colors";

function UserList({ navigation, route }) {
	const { user, setUser } = useStore();

	const getUserHandler = async () => {
		let { data } = await usersApi.getUser(user.id);
		setUser({ ...user, list: data.list });
	};

	useEffect(() => {
		getUserHandler();
	}, []);

	return (
		<SafeAreaView>
			{!user?.list?.length && (
				<View
					style={{
						height: "100%",
						width: "100%",
						alignItems: "center",
						paddingTop: 100,
					}}
				>
					<Text
						style={{
							color: colors.medium,
							textAlign: "center",
							lineHeight: 32,
							fontSize: 22,
						}}
					>
						Your list is empty.
					</Text>
				</View>
			)}
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
export default UserList;
