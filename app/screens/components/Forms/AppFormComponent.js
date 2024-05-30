import React from "react";
import { useFormikContext } from "formik";

import AppInputText from "./AppInputText";
import ErrorText from "./ErrorText";

export default function AppFormComponent({
	name,
	placeholder,
	label,
	...otherProps
}) {
	const { setFieldTouched, handleChange, errors, touched, values } =
		useFormikContext();
	return (
		<>
			<AppInputText
				autoCapitalize="none"
				autoCorrect={false}
				name={name}
				label={label}
				{...otherProps}
				placeholder={placeholder}
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
			/>
			<ErrorText text={errors[name]} visible={touched[name]} />
		</>
	);
}
