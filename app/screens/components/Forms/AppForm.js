import React from "react";
import { Formik } from "formik";
import SubmitButton from "./SubmitButton";

export default function AppForm({
	title,
	initialValues,
	onSubmit,
	validationSchema,
	children,
}) {
	return (
		<Formik
			validationSchema={validationSchema}
			initialValues={initialValues}
			onSubmit={onSubmit}
		>
			{() => (
				<>
					{children}
					<SubmitButton title={title} />
				</>
			)}
		</Formik>
	);
}
