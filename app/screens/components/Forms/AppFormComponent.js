import React from "react";
import { useFormikContext } from "formik";

import AppInputText from "./AppInputText";
import ErrorText from "./ErrorText";

export default function AppFormComponent({ name, ...otherProps }) {
	const { setFieldTouched, handleChange, errors, touched, values } =
		useFormikContext();
	return (
		<>
			<AppInputText
				// icon="email"
				// autoCapitalize="none"
				// autoCorrect={false}
				// keyboardType="email-address"
				// textContentType="emailAddress"
				{...otherProps}
				placeholder={name}
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
			/>
			<ErrorText text={errors[name]} visible={touched[name]} />
		</>
	);
}
