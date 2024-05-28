import { Text, TouchableOpacity } from "react-native";

export default function AppButton({ pressHandler, color = "primary", title }) {
	return (
		<TouchableOpacity
			onPress={pressHandler}
			style={{
				backgroundColor: "#000",
				display: "flex",
				height: 50,
				marginVertical: 10,
				width: "100%",
				paddingHorizontal: 10,
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: 40,
			}}
		>
			<Text
				style={{
					fontSize: 18,
					fontWeight: 500,
					textTransform: "uppercase",
					fontWeight: "bold",
					color: "#FFF",
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
}
