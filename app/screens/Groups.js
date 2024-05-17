import React from "react";
import {
	Text,
	View,
	StyleSheet,
	Button,
	FlatList,
	Image,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";

import Badges from "./components/Badges";
import Nav from "./Nav";
import data from "../../data";
function Groups({ navigation, route }) {
	const { user } = data;
	const { groups } = user;
	return (
		<SafeAreaView>
			<Nav />
			<FlatList
				data={groups}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("Group", { data: item });
						}}
					>
						<View style={styles.groupCard}>
							<View style={styles.groupImageContainer}>
								<Image
									source={require("../assets/placeholder.png")}
									style={styles.groupImage}
								/>
							</View>
							<View style={styles.groupTextContainer}>
								<Text style={styles.groupTextName}>{item.name}</Text>
								<View style={styles.groupMemberThumbnailsContainer}>
									<Badges users={item.members} number={6} size={22} />
								</View>
							</View>
						</View>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
			/>
			<TouchableOpacity
				style={{ width: "100%" }}
				onPress={() => {
					navigation.navigate("CreateNewGroup");
				}}
			>
				<View style={styles.createGroupCard}>
					<View style={styles.createGroupImageContainer}>
						<Image
							style={styles.createGroupImage}
							source={require("../assets/icons/Add.png")}
						/>
					</View>

					<View style={styles.createGroupTextContainer}>
						<Text style={styles.createGroupText}>Create a new group</Text>
					</View>
				</View>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	groupCard: {
		height: 120,
		flexDirection: "row",
		alignItems: "space-between",
		justifyContent: "center",
		alignItems: "flex-start",
		backgroundColor: "#FFF",
		padding: 6,
	},
	groupImageContainer: {
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		width: "30%",
		height: "100%",
	},
	groupImage: {
		width: 110,
		height: 80,
	},
	groupTextContainer: {
		padding: 10,
		justifyContent: "flex-start",
		alignItems: "flex-start",
		textAlign: "left",
		flexDirection: "column",
		width: "70%",
	},
	groupTextName: {
		fontSize: 16,
	},
	groupMemberThumbnailsContainer: {
		height: 30,
		width: "100%",
		marginTop: 8,
	},
	groupMemberThumbnail: {
		position: "absolute",
		height: 20,
		width: 20,
		borderColor: "#FFF",
		borderRadius: 30,
		borderWidth: 1,
	},
	createGroupCard: {
		height: 100,
		flexDirection: "row",
		width: "100%",
		alignItems: "space-between",
		justifyContent: "center",
		alignItems: "center",
	},
	createGroupImageContainer: {
		justifySelf: "center",
		alignSelf: "center",
		width: "25%",
	},
	createGroupImage: {
		width: 50,
		height: 50,
	},
	createGroupTextContainer: {
		justifyContent: "center",
		textAlign: "center",
		padding: 20,
		width: "60%",
	},
	createGroupText: {
		color: "#333",
		fontSize: 22,
	},
});
export default Groups;
