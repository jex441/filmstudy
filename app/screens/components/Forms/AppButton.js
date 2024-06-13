import { Text, TouchableOpacity } from "react-native";

export default function AppButton({
	pressHandler,
	color = "colors.dark",
	title,
}) {
	return (
		<TouchableOpacity
			onPress={pressHandler}
			style={{
				backgroundColor: color,
				display: "flex",
				height: 50,
				marginVertical: 10,
				width: "100%",
				paddingHorizontal: 10,
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				borderRadius: 10,
			}}
		>
			<Text
				style={{
					fontSize: 18,
					fontWeight: 500,
					fontWeight: "bold",
					color: "#FFF",
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
}
