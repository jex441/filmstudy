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

function Backdrop({ path, video }) {
	if (video) {
		// code for video
		return (
			<View style={styles}>
				<Image source={{ uri: path }} />
			</View>
		);
	}
	return (
		<View style={styles}>
			<Image source={{ uri: path }} />
		</View>
	);
}
const styles = StyleSheet.create({
	position: "fixed",
	zIndex: "-1",
	width: "100%",
	height: 200,
	marginBottom: 2,
});
export default Backdrop;
