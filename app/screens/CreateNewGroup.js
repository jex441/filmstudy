import React from "react";
import {
	Text,
	View,
	StyleSheet,
	Button,
	FlatList,
	Image,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { Formik, Field, Label, Form, ErrorMessage, FieldArray } from "formik";

function CreateNewGroup({ navigation }) {
	const initialValues = {
		groupName: "",
		members: [
			{
				email: "",
			},
		],
	};
	return (
		<SafeAreaView>
			<View style={styles.form}>
				<Formik
					initialValues={initialValues}
					onSubmit={async (values) => {
						await new Promise((r) => setTimeout(r, 500));
						alert(JSON.stringify(values, null, 2));
					}}
				>
					{({ handleChange, handleBlur, handleSubmit, values }) => (
						<View>
							<Text style={styles.label}>Group Name</Text>
							<TextInput
								name="groupName"
								style={styles.textInput}
								placeholder="Group Name"
								onChangeText={handleChange("groupName")}
								onBlur={handleBlur("groupName")}
								value={values.groupName}
							/>
							<FieldArray name="members">
								{({ remove, push }) => (
									<View>
										<Text style={styles.label}>Invite members:</Text>
										<FlatList
											data={values.members}
											renderItem={({ member, index }) => (
												<View key={index} style={styles.emailWrapper}>
													<TextInput
														style={styles.textInput}
														placeholder="example@gmail.com"
														type="email"
														value={values.members[index].email}
														onChangeText={handleChange(
															`members[${index}].email`
														)}
													/>
													<TouchableOpacity onPress={() => remove(index)}>
														<Image
															style={styles.icon}
															source={require("../assets/icons/remove.png")}
														/>
													</TouchableOpacity>
												</View>
											)}
										/>
										<TouchableOpacity onPress={() => push({ email: "" })}>
											<Image
												style={styles.icon}
												source={require("../assets/icons/Add.png")}
											/>
										</TouchableOpacity>
									</View>
								)}
							</FieldArray>
							<Button onPress={handleSubmit} title="Submit" />
						</View>
					)}
				</Formik>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	form: {
		height: "100%",
		padding: 40,
		backgroundColor: "#FFF",
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
	label: {
		margin: 5,
		fontSize: 16,
	},
	emailWrapper: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
	},
	textInput: {
		padding: 10,
		fontSize: 14,
		backgroundColor: "#FFF",
		marginTop: 5,
		marginBottom: 20,
		width: "90%",
	},
	icon: {
		width: 25,
		height: 25,
		margin: 10,
	},
});
export default CreateNewGroup;
