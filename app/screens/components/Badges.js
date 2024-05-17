import React from "react";
import {
	Text,
	View,
	StyleSheet,
	Button,
	FlatList,
	Image,
	SafeAreaView,
} from "react-native";

function Badges({ users, number, size = 25 }) {
	let count = 0;
	return (
		<FlatList
			data={users}
			renderItem={({ item, index }) => {
				if (index >= number) {
					count++;
				}
				if (index > number + 1) {
					return;
				}
				if (index > number) {
					return (
						<View
							style={{
								height: size,
								justifyContent: "center",
								left: number * size,
							}}
						>
							<Text
								style={{
									fontSize: 12,
									color: "#333",
									fontWeight: 300,
								}}
							>
								+{count} others
							</Text>
						</View>
					);
				}
				return (
					<View
						style={{
							height: size,
							width: "100%",
							position: "absolute",
							left: index * 16,
						}}
					>
						<Image
							source={{
								uri: item.thumbnail,
							}}
							style={{
								height: size,
								width: size,
								borderColor: "#FFF",
								borderRadius: 30,
								borderWidth: 1,
							}}
						/>
					</View>
				);
			}}
			keyExtractor={(item) => item.id}
			horizontal
		/>
	);
}

export default Badges;
