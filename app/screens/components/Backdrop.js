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

function Backdrop({ backdrop, video }) {
	console.log(backdrop);
	return (
		<View style={styles}>
			<Image
				source={{ uri: "https://image.tmdb.org/t/p/original" + backdrop }}
				style={{ width: "100%", height: 200 }}
			/>
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
