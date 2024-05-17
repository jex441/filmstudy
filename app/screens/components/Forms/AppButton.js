import { Text, TouchableOpacity } from "react-native";

export default function AppButton({ pressHandler, color = "primary", title }) {
	return (
		<TouchableOpacity
			onPress={pressHandler}
			style={{
				backgroundColor: "#333",
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
